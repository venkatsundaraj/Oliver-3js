"use client"

import { FC, useState } from "react"
import * as React from "react"
import { useSearchParams } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { userAuthSchema } from "@/lib/validation/auth"
import { useForm, Controller } from "react-hook-form"
import * as z from "zod"
import axios from "axios"

import { cn } from "@/lib/utils"
import { CalendarIcon } from "lucide-react"
import { Button } from "@/app/_components/button"

import { buttonVariants } from "@/app/_components/ui/button"
import { Input } from "@/app/_components/ui/input"
import { Label } from "@/app/_components/ui/label"
import { Icons } from "@/app/_components/icons"
import { AxiosError } from "axios"
import { toast } from "@/app/_components/ui/use-toast"

import { blogAuthSchema } from "@/lib/validation/auth"
import SelectCategory from "@/app/_components/select-category"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/_components/ui/popover"
import { format } from "date-fns"
import { Calendar } from "@/app/_components/ui/calendar"
import { DatePicker } from "./ui/date-picker"
import RichTextEditor from "@/app/_components/rich-text-editor"
import { useUploadThing } from "@/lib/uploadthing"
import { blogTable } from "@/server/db/schema"
import { useRouter } from "next/navigation"
import { InferModel } from "drizzle-orm"

type Blog = InferModel<typeof blogTable>

interface AddBlogProps {
  blog: Blog
}

type FormData = z.infer<typeof blogAuthSchema>

const category: string[] = ["Category 1", "Category 2", "Category 3"]

const AddBlog: FC<AddBlogProps> = ({ blog }) => {
  const [content, setContent] = useState<any>()
  const [trigger, setTrigger] = useState<boolean>(false)
  const [progressValue, setProgressValue] = useState<number>(0)
  const [isUploading, setIsUploading] = useState<boolean>(false)

  // const searchParams = useSearchParams();
  const router = useRouter()
  const { startUpload } = useUploadThing("imageUploader")
  const {
    register,
    handleSubmit,
    setError,
    control,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(blogAuthSchema),
  })

  //Utility Function

  const handleContentChange = (reason: string) => {
    setValue("content", reason)
  }

  const triggerInterval = () => {
    const interval = setInterval(() => {
      setProgressValue((prev) => {
        if (prev >= 95) {
          clearInterval(interval)
          return prev
        }

        return prev + 5
      })
    }, 400)

    return interval
  }

  const onSubmit = async function (formData: FormData) {
    try {
      //Uploadthing image uploader
      setIsUploading(true)
      const progressTrigger = triggerInterval()

      const imageResponse = await startUpload([formData.file[0]])

      if (!imageResponse) {
        return toast({
          title: "File upload Failed",
          description: "File upload Failed",
          variant: "destructive",
        })
      }

      clearInterval(progressTrigger)

      const data = await fetch(`/api/post/blog/${blog.id}`, {
        method: "PATCH",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          fileUrl: `https://utfs.io/f/${imageResponse[0].key}`,
        }),
      })
      console.log(formData, content)

      if (data.status === 200) {
        console.log(data)
        toast({
          title: "Your data has been Submitted",
          description: "Please Check your data",
          variant: "default",
        })
        setTrigger((prev) => !prev)
        return router.push("/dashboard/blog")
      }

      return toast({
        title: "Something Went Wrong",
        description: "Please Check your data",
        variant: "destructive",
      })
    } catch (err) {
      console.log(err)
      if (err instanceof AxiosError) {
        return setError("root", { message: err.message })
      }
      if (err instanceof z.ZodError) {
        return setError("root", { message: err.message })
      }
      return setError("root", { message: "Something went wrong" })
    }
  }

  return (
    <div className={cn("grid gap-6 w-full h-full px-4 md:px-8 py-4 md:py-8")}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start flex-col justify-start gap-2 w-full ">
            <Label className="text-foreground mb-2" htmlFor="Title">
              Title
            </Label>
            <Input
              id="Title"
              autoCapitalize="off"
              autoComplete="none"
              className="bg-transparent focus-visible:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 text-foreground"
              type="text"
              {...register("title")}
              disabled={isSubmitting}
              defaultValue={blog.title}
              required
            />
            {errors?.title ? (
              <p className="px-1 text-xs text-destructive h-4">
                {errors.title.message}
              </p>
            ) : (
              <p className="h-4"></p>
            )}
          </div>
          <div className="flex items-start flex-col justify-start gap-2 w-full">
            <SelectCategory
              disabled={isSubmitting}
              {...register("category")}
              id="location"
              min={0}
              label="Category"
              category={category}
              defaultValue={blog.category}
              className="min-w-full p-2 border border-gray-300 rounded-md text-foreground h-10 bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors?.category ? (
              <p className="px-1 text-xs text-destructive h-4">
                {errors.category.message}
              </p>
            ) : (
              <p className="h-4"></p>
            )}
          </div>

          <div className="flex items-start flex-col justify-start gap-2 w-full">
            <Label className="text-foreground mb-2" htmlFor="file">
              Image
            </Label>
            <Input
              {...register("file")}
              id="file"
              className="text-foreground max-w-full"
              name="file"
              defaultValue={blog.fileUrl}
              type="file"
              disabled={isSubmitting}
            />
            {errors?.file ? (
              <p className="px-1 text-xs text-destructive h-4">
                {errors.file.message}
              </p>
            ) : (
              <p className="h-4"></p>
            )}
          </div>

          <div className="flex items-start flex-col justify-start gap-2 w-full">
            <Label className="text-foreground mb-2" htmlFor="date">
              Date
            </Label>
            <Input
              {...register("date")}
              id="date"
              className="text-foreground"
              name="date"
              defaultValue={blog.date}
              type="date"
              disabled={isSubmitting}
            />
            {errors?.date ? (
              <p className="px-1 text-xs text-destructive h-4">
                {errors.date.message}
              </p>
            ) : (
              <p className="h-4"></p>
            )}
          </div>

          <div className="flex items-start flex-col cols col-start-1 col-end-3 justify-start gap-2 w-full bg-background">
            <Label className="text-foreground mb-2" htmlFor="content">
              Content
            </Label>
            <RichTextEditor
              {...register("content")}
              name="content"
              loading={isSubmitting}
              defaultValue={blog.content}
              id="content"
              onChange={(newContent: string) => handleContentChange(newContent)}
              resetTrigger={trigger}
            />
          </div>
        </div>

        <Button
          variant={"outline"}
          size={"lg"}
          className="max-w-[120px] mt-8 rounded-lg text-secondary-foreground hover:text-secondary-foreground"
          disabled={isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  )
}

export default AddBlog
