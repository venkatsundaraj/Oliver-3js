"use client";

import { extendedBlogSchema } from "@/lib/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/app/_components/button";
import { cn, slugify } from "@/lib/utils";

import { Input } from "@/app/_components/ui/input";
import { Label } from "@/app/_components/ui/label";
import { toast } from "@/app/_components/ui/use-toast";
import { AxiosError } from "axios";

import RichTextEditor from "@/app/_components/rich-text-editor";
import SelectCategory from "@/app/_components/select-category";
import { UploadButton, useUploadThing } from "@/lib/uploadthing";
import { blogTable, peopleTable } from "@/server/db/schema";
import { InferModel } from "drizzle-orm";
import { useRouter } from "next/navigation";
import { peopleAuthSchema } from "@/lib/validation/auth";

type People = InferModel<typeof peopleTable>;

interface AddPeopleProps {
  people: People;
}

type FormData = z.infer<typeof peopleAuthSchema>;

const AddPeople: FC<AddPeopleProps> = ({ people }) => {
  const [content, setContent] = useState<any>();
  const [trigger, setTrigger] = useState<boolean>(false);
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const router = useRouter();
  const { startUpload } = useUploadThing("imageUploader");
  const {
    register,
    handleSubmit,
    setError,
    control,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(peopleAuthSchema),
    defaultValues: {
      fileUrl: people.fileUrl,
      companyProfiles: people.companyProfiles,
      countryFlags: people.countryFlags,
    },
  });

  //Utility Function

  const handleContentChange = (reason: string) => {
    setValue("content", reason);
  };

  const handleSupplyDomainChange = function (value: string) {
    setValue("supportDomains", value);
  };
  const handleDomainChange = function (value: string) {
    setValue("domains", value);
  };

  const onSubmit = async function (formData: FormData) {
    try {
      //Uploadthing image uploader
      setIsUploading(true);

      console.log(formData);

      const data = await fetch(`/api/post/people/${people.id}`, {
        method: "PATCH",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          slug: slugify(`${formData.name}-${formData.role}`),
        }),
      });

      if (data.status === 200) {
        console.log(data);
        toast({
          title: "Your data has been Submitted",
          description: "Please Check your data",
          variant: "default",
        });
        setTrigger((prev) => !prev);
        return router.push("/dashboard/people");
      }

      return toast({
        title: "Something Went Wrong",
        description: "Please Check your data",
        variant: "destructive",
      });
    } catch (err) {
      console.log(err);
      if (err instanceof AxiosError) {
        return setError("root", { message: err.message });
      }
      if (err instanceof z.ZodError) {
        return setError("root", { message: err.message });
      }
      return setError("root", { message: "Something went wrong" });
    }
  };

  return (
    <div className={cn("grid gap-6 w-full h-full px-4 md:px-8 py-4 md:py-8")}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start flex-col justify-start gap-2 w-full ">
            <Label className="text-foreground mb-2" htmlFor="Name">
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
              <p className="px-1 text-xs text-destructive h-4">
                {errors.name.message}
              </p>
            ) : (
              <p className="h-4"></p>
            )}
          </div>

          <div className="flex items-start flex-col justify-start gap-2 w-full ">
            <Label className="text-foreground mb-2" htmlFor="Role">
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
              <p className="px-1 text-xs text-destructive h-4">
                {errors.role.message}
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
              defaultValue={people.location}
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
            <Label className="text-foreground mb-2" htmlFor="Core">
              Core
            </Label>
            <Input
              id="Core"
              autoCapitalize="off"
              autoComplete="none"
              className="bg-transparent focus-visible:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 text-foreground"
              type="text"
              {...register("core")}
              disabled={isSubmitting}
              defaultValue={people.core}
              required
            />
            {errors?.core ? (
              <p className="px-1 text-xs text-destructive h-4">
                {errors.core.message}
              </p>
            ) : (
              <p className="h-4"></p>
            )}
          </div>

          <div className="flex items-start flex-col justify-start gap-2 w-full ">
            <Label className="text-foreground mb-2" htmlFor="Experience">
              Experience
            </Label>
            <Input
              id="Experience"
              autoCapitalize="off"
              autoComplete="none"
              className="bg-transparent focus-visible:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 text-foreground"
              type="text"
              {...register("experience")}
              disabled={isSubmitting}
              defaultValue={people.experience}
              required
            />
            {errors?.experience ? (
              <p className="px-1 text-xs text-destructive h-4">
                {errors.experience.message}
              </p>
            ) : (
              <p className="h-4"></p>
            )}
          </div>

          <div className="flex items-start flex-col justify-start gap-2 w-full ">
            <Label className="text-foreground mb-2" htmlFor="Industries">
              Industries
            </Label>
            <Input
              id="Industries"
              autoCapitalize="off"
              autoComplete="none"
              className="bg-transparent focus-visible:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 text-foreground"
              type="text"
              {...register("industries")}
              disabled={isSubmitting}
              defaultValue={people.industries}
              required
            />
            {errors?.industries ? (
              <p className="px-1 text-xs text-destructive h-4">
                {errors.industries.message}
              </p>
            ) : (
              <p className="h-4"></p>
            )}
          </div>

          <div className="flex items-start flex-col justify-start gap-2 w-full ">
            <Label className="text-foreground mb-2" htmlFor="Lead Domain">
              Lead Domain
            </Label>
            <Input
              id="Lead Domain"
              autoCapitalize="off"
              autoComplete="none"
              className="bg-transparent focus-visible:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 text-foreground"
              type="text"
              {...register("leadDomain")}
              disabled={isSubmitting}
              defaultValue={people.leadDomain}
              required
            />
            {errors?.leadDomain ? (
              <p className="px-1 text-xs text-destructive h-4">
                {errors.leadDomain.message}
              </p>
            ) : (
              <p className="h-4"></p>
            )}
          </div>

          <div className="flex items-start flex-col justify-start gap-2 w-full ">
            <Label className="text-foreground mb-2" htmlFor="Skills">
              Skills
            </Label>
            <Input
              id="Skills"
              autoCapitalize="off"
              autoComplete="none"
              className="bg-transparent focus-visible:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 text-foreground"
              type="text"
              {...register("skills")}
              disabled={isSubmitting}
              defaultValue={people.skills}
              required
            />
            {errors?.skills ? (
              <p className="px-1 text-xs text-destructive h-4">
                {errors.skills.message}
              </p>
            ) : (
              <p className="h-4"></p>
            )}
          </div>

          <div className="flex items-start flex-col justify-start gap-2 w-full ">
            <Label className="text-foreground mb-2" htmlFor="Type">
              Type
            </Label>
            <Input
              id="Type"
              autoCapitalize="off"
              autoComplete="none"
              className="bg-transparent focus-visible:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 text-foreground"
              type="text"
              {...register("type")}
              disabled={isSubmitting}
              defaultValue={people.type}
              required
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
            <Label className="text-foreground mb-2" htmlFor="file">
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
                      const uploadedFileUrl = res[0].key;

                      setValue(
                        "fileUrl",
                        `https://utfs.io/f/${uploadedFileUrl}`,
                        {
                          shouldValidate: true,
                        }
                      );
                    }
                  }}
                  onUploadError={(error) => {
                    console.error("Upload error: ", error);
                  }}
                />
              )}
            />
            {errors?.fileUrl ? (
              <p className="px-1 text-xs text-destructive h-4">
                {errors.fileUrl.message}
              </p>
            ) : (
              <p className="h-4"></p>
            )}
          </div>

          <div className="flex items-start flex-col justify-start gap-2 w-full">
            <Label className="text-foreground mb-2" htmlFor="companyProfile">
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
                    setIsUploading(false);
                    if (res && res.length > 0) {
                      const uploadedFileUrl = res[0].key;

                      setValue(
                        "companyProfiles",
                        [`https://utfs.io/f/${uploadedFileUrl}`],
                        {
                          shouldValidate: true,
                        }
                      );
                    }
                  }}
                  onUploadError={(error) => {
                    console.error("Upload error: ", error);
                  }}
                />
              )}
            />
            {errors?.companyProfiles ? (
              <p className="px-1 text-xs text-destructive h-4">
                {errors.companyProfiles.message}
              </p>
            ) : (
              <p className="h-4"></p>
            )}
          </div>

          <div className="flex items-start flex-col justify-start gap-2 w-full">
            <Label className="text-foreground mb-2" htmlFor="countryFlags">
              Country Flag
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
                    setIsUploading(false);
                    if (res && res.length > 0) {
                      const uploadedFileUrl = res[0].key;

                      setValue(
                        "countryFlags",
                        [`https://utfs.io/f/${uploadedFileUrl}`],
                        {
                          shouldValidate: true,
                        }
                      );
                    }
                  }}
                  onUploadError={(error) => {
                    console.error("Upload error: ", error);
                  }}
                />
              )}
            />
            {errors?.countryFlags ? (
              <p className="px-1 text-xs text-destructive h-4">
                {errors.countryFlags.message}
              </p>
            ) : (
              <p className="h-4"></p>
            )}
          </div>

          <div className="flex items-start flex-col cols col-start-1 col-end-3 justify-start gap-2 w-full bg-background">
            <Label className="text-foreground mb-2" htmlFor="Support Domains">
              Support Domains
            </Label>
            <RichTextEditor
              {...register("supportDomains")}
              name="supportDomains"
              loading={isSubmitting}
              defaultValue={people.supportDomains}
              id="supportDomains"
              onChange={(newContent: string) =>
                handleSupplyDomainChange(newContent)
              }
              resetTrigger={trigger}
            />
            {errors?.supportDomains ? (
              <p className="px-1 text-xs text-destructive h-4">
                {errors.supportDomains.message}
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
              defaultValue={people.content}
              id="content"
              onChange={(newContent: string) => handleContentChange(newContent)}
              resetTrigger={trigger}
            />
          </div>

          <div className="flex items-start flex-col cols col-start-1 col-end-3 justify-start gap-2 w-full bg-background">
            <Label className="text-foreground mb-2" htmlFor="domains">
              Domains
            </Label>
            <RichTextEditor
              {...register("domains")}
              name="domains"
              loading={isSubmitting}
              defaultValue={people.domains}
              id="domains"
              onChange={(newContent: string) => handleDomainChange(newContent)}
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
  );
};

export default AddPeople;
