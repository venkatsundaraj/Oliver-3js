import { Button } from "@/app/_components/ui/button";

import { Input } from "@/app/_components/ui/input";
import { Label } from "@/app/_components/ui/label";
import { blogCategoryTitle } from "@/config/marketing";
import { FC } from "react";
import { blogCategoryContent } from "@/config/marketing";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/_components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { slugify } from "@/lib/utils";
import { blogTable } from "@/server/db/schema";
import { InferModel } from "drizzle-orm";

type Blog = InferModel<typeof blogTable>;

interface BlogListsProps {
  blogs: Blog[];
}

const BlogLists: FC<BlogListsProps> = ({ blogs }) => {
  if (blogs.length === 0) {
    return <p>Blogs are yet to be uploaded</p>;
  }

  return (
    <Tabs
      defaultValue={blogs[0].category}
      className="w-full md:max-w-3xl bg-transparent"
    >
      <TabsList className="flex w-full gap-8 md:gap-24 flex-wrap md:flex-nowrap">
        {blogs.length
          ? Array.from(new Set(blogs.map((item) => item.category).sort())).map(
              (item, i) => (
                <TabsTrigger key={i} value={item}>
                  {item}
                </TabsTrigger>
              )
            )
          : null}
      </TabsList>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {blogs.length
          ? blogs.map((item, i) => (
              <TabsContent
                className="w-full bg-background gap-4 md:gap-8 "
                value={item.category}
              >
                <Link
                  key={i}
                  href={`our-blogs/${slugify(item.title)}`}
                  className="flex items-start flex-col justify-start gap-4  p-4 bg-foreground mt-6"
                >
                  <span className="text-background font-paragraph text-subtitle_heading">
                    {item.category}
                  </span>

                  <h3 className="text-primary-foreground font-paragraph text-subtitle_heading">
                    {item.title}
                  </h3>
                  {/* <Image
                    alt={item.category}
                    src={item.image}
                    width="280"
                    height="280"
                  /> */}
                </Link>
              </TabsContent>
            ))
          : null}
      </div>
    </Tabs>
  );
};

export default BlogLists;
