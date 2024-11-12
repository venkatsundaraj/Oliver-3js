import { NextAuthOptions } from "next-auth";
import { db } from "@/server/db";
import { env } from "@/env";
import EmailProvider from "next-auth/providers/email";
import { Resend } from "resend";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { and, eq } from "drizzle-orm";
import { users } from "@/server/db/schema";

export const authOptions: NextAuthOptions = {
  adapter: DrizzleAdapter(db as any),
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: env.NEXTAUTH_SECRET,
  providers: [
    EmailProvider({
      from: env.SMTP_FROM,
      sendVerificationRequest: async ({ identifier, url, provider }) => {
        const user = await db
          .select({ emailVerified: users.emailVerified })
          .from(users)
          .where(eq(users.email, identifier))
          .limit(1)
          .then((res) => res[0]);

        const resend = new Resend(env.RESEND_API_KEY);
        const response = await resend.emails.create({
          from: provider.from as string,
          to: identifier,
          subject: "Regarding Authentication",
          text: `Click the link to login - ${url}`,
          headers: {
            "X-Entity-Ref-ID": new Date().getTime() + "",
          },
        });
        console.log(response);
      },
    }),
  ],
  callbacks: {
    async session({ token, session }) {
      if (token) {
        (session.user.id = token.id),
          (session.user.email = token.email),
          (session.user.name = token.name),
          (session.user.image = token.picture);
      }

      return session;
    },
    async jwt({ token, user }) {
      const dbUser = await db
        .select()
        .from(users)
        .where(eq(users.email, token.email as string))
        .limit(1)
        .then((res) => res[0]);

      if (!dbUser) {
        if (user) {
          token.id = user.id;
        }
        return token;
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
      };
    },
    redirect() {
      return "/dashboard";
    },
  },
};
