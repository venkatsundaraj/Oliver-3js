"use client"

import { extendedBlogSchema } from "@/lib/validation/auth"
import { zodResolver } from "@hookform/resolvers/zod"
import { FC, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/app/_components/button"
import { cn, slugify } from "@/lib/utils"

import { Input } from "@/app/_components/ui/input"
import { Label } from "@/app/_components/ui/label"
import { toast } from "@/app/_components/ui/use-toast"
import { AxiosError } from "axios"

import RichTextEditor from "@/app/_components/rich-text-editor"
import SelectCategory from "@/app/_components/select-category"
import { UploadButton, useUploadThing } from "@/lib/uploadthing"
import { blogTable, peopleTable } from "@/server/db/schema"
import { InferModel } from "drizzle-orm"
import { useRouter } from "next/navigation"
import { peopleAuthSchema } from "@/lib/validation/auth"
import ImageGallery from "./image-gallery"

type People = InferModel<typeof peopleTable>

interface AddPeopleProps {
  people: People
}

type FormData = z.infer<typeof peopleAuthSchema>

const AddPeople: FC<AddPeopleProps> = ({ people }) => {
  const [content, setContent] = useState<any>()
  const [trigger, setTrigger] = useState<boolean>(false)
  const [isUploading, setIsUploading] = useState<boolean>(false)

  const router = useRouter()
  const { startUpload } = useUploadThing("imageUploader")
  const {
    register,
    handleSubmit,
    setError,
    control,
    reset,
    getValues,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(peopleAuthSchema),
    defaultValues: {
      fileUrl: people.fileUrl,
      companyProfiles: people.companyProfiles,
      countryFlags: people.countryFlags,
    },
  })

  //Utility Function

  const handleContentChange = (reason: string) => {
    setValue("content", reason)
  }

  const onSubmit = async function (formData: FormData) {
    try {
      //Uploadthing image uploader
      setIsUploading(true)

      const data = await fetch(`/api/post/people/${people.id}`, {
        method: "PATCH",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          slug: slugify(`${formData.name}${formData.role}`),
        }),
      })

      if (data.status === 200) {
        console.log(data)
        toast({
          title: "Your data has been Submitted",
          description: "Please Check your data",
          variant: "default",
        })
        setTrigger((prev) => !prev)
        return router.push("/dashboard/people")
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
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col items-start justify-start w-full gap-2 ">
            <Label className="mb-2 text-foreground" htmlFor="Name">
              Name
            </Label>
            <Input
              id="Name"
              autoCapitalize="off"
              autoComplete="none"
              className="bg-transparent focus-visible:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 text-foreground"
              type="text"
              {...register("name")}
              disabled={isSubmitting}
              defaultValue={people.name}
              required
            />
            {errors?.name ? (
              <p className="h-4 px-1 text-xs text-destructive">
                {errors.name.message}
              </p>
            ) : (
              <p className="h-4"></p>
            )}
          </div>

          <div className="flex flex-col items-start justify-start w-full gap-2 ">
            <Label className="mb-2 text-foreground" htmlFor="Role">
              Role
            </Label>
            <Input
              id="Role"
              autoCapitalize="off"
              autoComplete="none"
              className="bg-transparent focus-visible:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 text-foreground"
              type="text"
              {...register("role")}
              disabled={isSubmitting}
              defaultValue={people.role}
              required
            />
            {errors?.role ? (
              <p className="h-4 px-1 text-xs text-destructive">
                {errors.role.message}
              </p>
            ) : (
              <p className="h-4"></p>
            )}
          </div>

          <div className="flex flex-col items-start justify-start w-full gap-2">
            <Label className="mb-2 text-foreground" htmlFor="file">
              Image
            </Label>
            <Controller
              name="fileUrl"
              control={control}
              render={({ field }) => (
                <UploadButton
                  endpoint="imageUploader"
                  appearance={{
                    button:
                      "ut-ready:bg-green-500 ut-uploading:cursor-not-allowed rounded-r-none bg-background border px-2 after:bg-orange-400",
                    container:
                      "w-max flex-row rounded-md border-cyan-300 bg-background",
                    allowedContent:
                      "flex h-8 flex-col items-center justify-center px-2 text-white",
                  }}
                  onClientUploadComplete={(res) => {
                    if (res && res.length > 0) {
                      const uploadedFileUrl = res[0].key

                      setValue(
                        "fileUrl",
                        `https://utfs.io/f/${uploadedFileUrl}`,
                        {
                          shouldValidate: true,
                        }
                      )
                    }
                  }}
                  onUploadError={(error) => {
                    console.error("Upload error: ", error)
                  }}
                />
              )}
            />
            <ImageGallery
              updateImageHandler={([value]) => {
                setValue("fileUrl", value, {
                  shouldValidate: true,
                })
              }}
              images={
                getValues("fileUrl")
                  ? new Array(getValues("fileUrl"))
                  : new Array(people.fileUrl)
              }
            />
            {errors?.fileUrl ? (
              <p className="h-4 px-1 text-xs text-destructive">
                {errors.fileUrl.message}
              </p>
            ) : (
              <p className="h-4"></p>
            )}
          </div>

          <div className="flex flex-col items-start justify-start w-full gap-2">
            <Label className="mb-2 text-foreground" htmlFor="companyProfile">
              Company Profile
            </Label>
            <Controller
              name="companyProfiles"
              control={control}
              render={({ field }) => (
                <UploadButton
                  endpoint="companyProfileUploader"
                  appearance={{
                    button:
                      "ut-ready:bg-green-500 ut-uploading:cursor-not-allowed rounded-r-none bg-background border px-2 after:bg-orange-400",
                    container:
                      "w-max flex-row rounded-md border-cyan-300 bg-background",
                    allowedContent:
                      "flex h-8 flex-col items-center justify-center px-2 text-white",
                  }}
                  onClientUploadComplete={(res) => {
                    setIsUploading(false)
                    if (res) {
                      const existingUrls = res.map((file) => file.url)
                      const currentUrls = getValues("companyProfiles") || []
                      const urls = [...existingUrls, ...currentUrls]

                      setValue("companyProfiles", urls, {
                        shouldValidate: true,
                      })
                    }
                  }}
                  onUploadError={(error) => {
                    console.error("Upload error: ", error)
                  }}
                />
              )}
            />
            <ImageGallery
              updateImageHandler={(value) => {
                console.log(value)
                setValue("companyProfiles", value, {
                  shouldValidate: true,
                })
                console.log(getValues())
              }}
              images={
                getValues("companyProfiles")
                  ? getValues("companyProfiles") || []
                  : people.companyProfiles
              }
            />
            {errors?.companyProfiles ? (
              <p className="h-4 px-1 text-xs text-destructive">
                {errors.companyProfiles.message}
              </p>
            ) : (
              <p className="h-4"></p>
            )}
          </div>

          <div className="flex flex-col items-start justify-start w-full gap-2">
            <Label className="mb-2 text-foreground" htmlFor="countryFlags">
              Country Flog
            </Label>
            <Controller
              name="countryFlags"
              control={control}
              render={({ field }) => (
                <UploadButton
                  endpoint="companyProfileUploader"
                  appearance={{
                    button:
                      "ut-ready:bg-green-500 ut-uploading:cursor-not-allowed rounded-r-none bg-background border px-2 after:bg-orange-400",
                    container:
                      "w-max flex-row rounded-md border-cyan-300 bg-background",
                    allowedContent:
                      "flex h-8 flex-col items-center justify-center px-2 text-white",
                  }}
                  onClientUploadComplete={(res) => {
                    setIsUploading(false)
                    if (res) {
                      const existingUrls = res.map((file) => file.url)
                      const currentUrls = getValues("countryFlags") || []
                      const urls = [...existingUrls, ...currentUrls]

                      setValue("countryFlags", urls, {
                        shouldValidate: true,
                      })
                    }
                  }}
                  onUploadError={(error) => {
                    console.error("Upload error: ", error)
                  }}
                />
              )}
            />
            <ImageGallery
              updateImageHandler={(value) => {
                setValue("countryFlags", value, {
                  shouldValidate: true,
                })
              }}
              images={
                getValues("countryFlags")
                  ? getValues("countryFlags") || []
                  : people.countryFlags
              }
            />
            {errors?.countryFlags ? (
              <p className="h-4 px-1 text-xs text-destructive">
                {errors.countryFlags.message}
              </p>
            ) : (
              <p className="h-4"></p>
            )}
          </div>

          <div className="flex flex-col items-start justify-start w-full col-start-1 col-end-3 gap-2 cols bg-background">
            <Label className="mb-2 text-foreground" htmlFor="content">
              Content
            </Label>
            <RichTextEditor
              {...register("content")}
              name="content"
              loading={isSubmitting}
              defaultValue={people.content}
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

export default AddPeople
