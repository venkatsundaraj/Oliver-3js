"use client";
import { FC, useState } from "react";
import { Button } from "@/app/_components/ui/button";
import { NavItem, SubNavItem } from "@/types";
import { cn, slugify } from "@/lib/utils";
import axios from "axios";
import { toast } from "@/app/_components/ui/use-toast";
import { useRouter } from "next/navigation";

interface CreatePostProps {
  subItem: SubNavItem;
}

const CreatePost: FC<CreatePostProps> = ({ subItem }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const addBlogHandler = async function () {
    try {
      setIsLoading(true);
      const response = await fetch("/api/post/blog", { method: "POST" });
      console.log(response);

      if (response.statusText !== "OK") {
        if (response.status !== 200) {
          toast({
            title: "Something Went Wrong",
            description: "Try afte some time Please",
            variant: "destructive",
          });
        }
      }
      const data = await response.json();

      toast({
        title: "New Blog is created",
        description: "Please enter your data",
        variant: "default",
      });
      router.refresh();
      return router.push(`/dashboard/blog/${data.id}`);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  const addWorkHandler = async function () {
    try {
      setIsLoading(true);
      const response = await fetch("/api/post/work", { method: "POST" });

      if (response.statusText !== "OK") {
        if (response.status !== 200) {
          toast({
            title: "Something Went Wrong",
            description: "Try afte some time Please",
            variant: "destructive",
          });
        }
      }
      const data = await response.json();

      toast({
        title: "New Blog is created",
        description: "Please enter your data",
        variant: "default",
      });
      router.refresh();
      return router.push(`/dashboard/work/${data.id}`);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  const addPeopleHandler = async function () {
    try {
      setIsLoading(true);
      const response = await fetch("/api/post/people", { method: "POST" });

      if (response.statusText !== "OK") {
        if (response.status !== 200) {
          toast({
            title: "Something Went Wrong",
            description: "Try afte some time Please",
            variant: "destructive",
          });
        }
      }
      const data = await response.json();

      toast({
        title: "New Blog is created",
        description: "Please enter your data",
        variant: "default",
      });
      router.refresh();
      return router.push(`/dashboard/people/${data.id}`);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  const postCreateHandler = function (e: React.MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLButtonElement;
    console.log(target.value);
    if (target.value === "add-blog") {
      addBlogHandler();
    }
    if (target.value === "add-work") {
      addWorkHandler();
    }
    if (target.value === "add-people") {
      addPeopleHandler();
    }
  };

  return (
    <Button
      onClick={(e) => postCreateHandler(e)}
      value={slugify(subItem.title)}
      disabled={isLoading}
      className={cn(
        "inline-flex bg-transparent p-0 hover:bg-transparent items-center text-secondary_heading text-foreground flex-row justify-center hover:text-primary-foreground text-sm font-medium font-paragraph",
        {
          "cursor-not-allowed text-foreground/50": subItem.disabled,
        }
      )}
    >
      {subItem.title}
    </Button>
  );
};

export default CreatePost;
