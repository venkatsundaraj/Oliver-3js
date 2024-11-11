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

interface BlogListsProps {}

const BlogLists: FC<BlogListsProps> = ({}) => {
  return (
    <Tabs defaultValue="all" className="w-full md:max-w-3xl bg-transparent">
      <TabsList className="flex w-full gap-8 md:gap-24 flex-wrap md:flex-nowrap">
        {blogCategoryTitle.map((item, i) => (
          <TabsTrigger key={i} value={item.value}>
            {item.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {blogCategoryContent.map((item, i) => (
        <TabsContent
          className="w-full grid grid-cols-1 md:grid-cols-2 bg-background gap-4 md:gap-8 "
          value={item.value}
        >
          {item.contents.map((blogItem, i) => (
            <Link
              key={i}
              href={`our-blogs/${slugify(blogItem.categoryTitle)}`}
              className="flex items-start flex-col justify-start gap-4  p-4 bg-foreground mt-6"
            >
              <span className="text-background font-paragraph text-subtitle_heading">
                {blogItem.category}
              </span>

              <h3 className="text-primary-foreground font-paragraph text-subtitle_heading">
                {blogItem.categoryTitle}
              </h3>
              <Image
                alt={blogItem.category}
                src={blogItem.image}
                width="280"
                height="280"
              />
            </Link>
          ))}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default BlogLists;
