import BlogLists from "@/app/_components/blog-lists";
import axios from "axios";
import { FC } from "react";
import { db } from "@/server/db";
import { blogTable } from "@/server/db/schema";
import OrbitSymbol from "@/app/_components/atomic-animation";

export const revalidate = 0; // This forces the page to be dynamic

async function getData() {
  const data = await db.select().from(blogTable);
  return data;
}

interface pageProps {}

const page = async ({}: pageProps) => {
  const data = await getData();

  return (
    <>
      {/* Hero section */}
      <section className="w-screen flex items-center justify-center h-screen bg-background py-16  ">
        <div className="container flex items-center justify-center relative">
          <h2 className="flex items-center justify-center flex-col">
            <span className="text-extra_paragraph_heading text-foreground font-heading text-center">
              Our
            </span>
            <span className="text-primary-foreground text-center text-secondary_heading font-heading font-bold">
              Views
            </span>
          </h2>
          <OrbitSymbol size={400} strokeWidth={0.2} />
        </div>
      </section>

      {/* Blogs section */}
      <section className="w-screen flex items-center justify-center bg-background py-16 ">
        <div className="container flex items-center justify-center">
          <BlogLists blogs={data} />
        </div>
      </section>
    </>
  );
};

export default page;
