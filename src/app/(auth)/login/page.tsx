import { Metadata } from "next";
import Link from "next/link";

import { Icons } from "@/app/_components/icons";
import { UserAuthForm } from "@/app/_components/user-auth-form";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

export default function LoginPage() {
  return (
    <div className="container grid h-screen w-screen flex-row items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="h-full w-full lg:flex flex items-center justify-center">
        <Icons.UserRoundCog className="max-w-md w-1/4 text-foreground h-1/4 stroke-1" />
      </div>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Icons.Pencil className="mx-auto h-14 w-14 text-foreground/30" />
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email to sign in to your account
          </p>
        </div>

        <UserAuthForm />
      </div>
    </div>
  );
}
