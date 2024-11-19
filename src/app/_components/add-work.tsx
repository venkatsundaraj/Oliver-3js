"use client"

import { FC, useState } from "react"
import * as React from "react"
import { useSearchParams } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  extendedBlogSchema,
  userAuthSchema,
  ExtendedBlogSchema,
} from "@/lib/validation/auth"
import { useForm, Controller } from "react-hook-form"
import * as z from "zod"
import axios from "axios"

import { cn, slugify } from "@/lib/utils"
import { CalendarIcon } from "lucide-react"
import { Button } from "@/app/_components/button"

import { buttonVariants } from "@/app/_components/ui/button"
import { Input } from "@/app/_components/ui/input"
import { Label } from "@/app/_components/ui/label"
import { Icons } from "@/app/_components/icons"
import { AxiosError } from "axios"
import { toast } from "@/app/_components/ui/use-toast"

import { workAuthSchema, workAuthSchemaType } from "@/lib/validation/auth"
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
import { workTable } from "@/server/db/schema"

import { UploadButton } from "@/lib/uploadthing"
import { workSubType, workType } from "@/config/marketing"

type Work = InferModel<typeof workTable>

interface AddWorkProps {
  work: Work
}

type FormData = z.infer<typeof workAuthSchema>

const category: string[] = ["Category 1", "Category 2", "Category 3"]

const AddWork: FC<AddWorkProps> = ({ work }) => {
  // const searchParams = useSearchParams();
  const router = useRouter()

  const {
    register,
    handleSubmit,
    setError,
    control,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(workAuthSchema),
  })

  //Utility Function

  const onSubmit = async function (formData: FormData) {
    try {
      const data = await fetch(`/api/post/work/${work.id}`, {
        method: "PATCH",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
        }),
      })

      if (data.status === 200) {
        console.log(data)
        toast({
          title: "Your data has been Submitted",
          description: "Please Check your data",
          variant: "default",
        })

        return router.push("/dashboard/work")
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
          <div className="flex items-start flex-col justify-start gap-2 w-full">
            <SelectCategory
              disabled={isSubmitting}
              id="type"
              register={register}
              name="type"
              label="Type"
              category={workType}
              defaultValue={work.type}
              className="min-w-full p-2 border border-gray-300 rounded-md text-foreground h-10 bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors?.type ? (
              <p className="px-1 text-xs text-destructive h-4">
                {errors.type.message}
              </p>
            ) : (
              <p className="h-4"></p>
            )}
          </div>
          <div className="flex items-start flex-col justify-start gap-2 w-full">
            <SelectCategory
              disabled={isSubmitting}
              id="subType"
              register={register}
              name="subType"
              label="Sub Type"
              defaultValue={work.subType}
              category={workSubType}
              className="min-w-full p-2 border border-gray-300 rounded-md text-foreground h-10 bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors?.subType ? (
              <p className="px-1 text-xs text-destructive h-4">
                {errors.subType.message}
              </p>
            ) : (
              <p className="h-4"></p>
            )}
          </div>

          <div className="flex items-start flex-col justify-start gap-2 w-full ">
            <Label className="text-foreground mb-2" htmlFor="Location">
              Location
            </Label>
            <Input
              id="Location"
              autoCapitalize="off"
              autoComplete="none"
              className="bg-transparent focus-visible:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 text-foreground"
              type="text"
              {...register("location")}
              disabled={isSubmitting}
              defaultValue={work.location}
              required
            />
            {errors?.location ? (
              <p className="px-1 text-xs text-destructive h-4">
                {errors.location.message}
              </p>
            ) : (
              <p className="h-4"></p>
            )}
          </div>

          <div className="flex items-start flex-col justify-start gap-2 w-full ">
            <Label className="text-foreground mb-2" htmlFor="Category">
              Category
            </Label>
            <Input
              id="Category"
              autoCapitalize="off"
              autoComplete="none"
              className="bg-transparent focus-visible:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 text-foreground"
              type="text"
              {...register("category")}
              disabled={isSubmitting}
              defaultValue={work.category}
              required
            />
            {errors?.location ? (
              <p className="px-1 text-xs text-destructive h-4">
                {errors.location.message}
              </p>
            ) : (
              <p className="h-4"></p>
            )}
          </div>

          <div className="flex items-start flex-col justify-start gap-2 w-full ">
            <Label className="text-foreground mb-2" htmlFor="Content">
              Content
            </Label>
            <Input
              id="Content"
              autoCapitalize="off"
              autoComplete="none"
              className="bg-transparent focus-visible:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 text-foreground"
              type="text"
              {...register("content")}
              disabled={isSubmitting}
              defaultValue={work.content}
              required
            />
            {errors?.content ? (
              <p className="px-1 text-xs text-destructive h-4">
                {errors.content.message}
              </p>
            ) : (
              <p className="h-4"></p>
            )}
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

export default AddWork
