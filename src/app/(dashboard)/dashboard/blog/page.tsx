import AddBlog from "@/app/_components/add-blog";
import { db } from "@/server/db";
import { blogTable } from "@/server/db/schema";
import { FC } from "react";
import Link from "next/link";

interface pageProps {}
export const revalidate = 0; // This forces the page to be dynamic

async function getData() {
  const data = await db.select().from(blogTable);
  return data;
}

const page = async ({}: pageProps) => {
  const data = await getData();
  console.log(data);
  return (
    <main className="bg-background min-h-screen w-full flex items-start flex-col justify-center p-4 ">
      <section className="w-full flex items-start justify-center bg-background py-4 md:py-24  min-h-screen">
        <div className="container flex-col flex items-start justify-center gap-8">
          <h2 className="text-secondary-foreground text-secondary_heading font-heading leading-[1.1]">
            Blogs
          </h2>
          <ul className="w-full flex flex-col items-center justify-start gap-4">
            {data.length ? (
              data.map((item, i) => (
                <li key={i} className="w-full">
                  <Link
                    className="flex w-full py-4 px-4 border border-foreground rounded-md items-center justify-between"
                    href={`/dashboard/blog/${item.id}`}
                  >
                    <h4 className="text-foreground">
                      {item.title} ({item.category})
                    </h4>
                  </Link>
                </li>
              ))
            ) : (
              <p></p>
            )}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default page;
