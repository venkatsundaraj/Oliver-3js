"use client";
import { FC, useState } from "react";
import { eq, InferModel, is } from "drizzle-orm";
import { workTable, blogTable, peopleTable } from "@/server/db/schema";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu";
import { Icons } from "@/app/_components/icons";
import { Button, buttonVariants } from "@/app/_components/ui/button";
import { cn } from "@/lib/utils";

import { deletePost } from "@/lib/delete-post";
import { toast } from "@/app/_components/ui/use-toast";
import { useRouter } from "next/navigation";
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";

type Work = InferModel<typeof workTable>;
type Blog = InferModel<typeof blogTable>;
type People = InferModel<typeof peopleTable>;

interface EditPostButtonProps {
  post: Work | Blog | People;
  type: "people" | "work" | "blog";
}

const EditPostButton: FC<EditPostButtonProps> = ({ post, type }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const deletePostHandler = async function (id: number, type: string) {
    setIsLoading(true);

    const result = await deletePost(post.id, type);
    if (result.success) {
      setIsLoading(false);
      // Refresh the current route
      router.refresh();
    } else {
      // Handle error, maybe show a toast notification
      console.error(result.error);
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="">
        <Icons.EllipsisVertical className="w-4 h-4  text-foreground hover:bg-foreground/30" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        sideOffset={10}
        align="start"
        side="left"
        className="bg-background border border-foreground/40 w-full !rounded-md p-0 py-2"
      >
        <Link
          href={`/dashboard/${type}/${post.id}`}
          className={cn(
            "!text-foreground bg-background w-full inline-flex items-center justify-center hover:bg-background hover:!text-secondary-foreground text-[16px] font-paragraph border-none text-center"
          )}
        >
          Edit
        </Link>
        <div className="w-full h-[1px] bg-foreground my-1" />
        <DropdownMenuSeparator />
        <Button
          onClick={() => deletePostHandler(post.id, type)}
          variant={"outline"}
          className="!text-foreground p-0 h-[initial] font-paragraph hover:!text-secondary-foreground w-full hover:bg-background border-none text-[16px]"
        >
          {isLoading ? <Icons.Loader2 className="animate-spin" /> : null}
          Delete
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default EditPostButton;
