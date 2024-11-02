"use client";

import { FC } from "react";
import { Input } from "@/app/_components/ui/input";
import { Textarea } from "@/app/_components/ui/text-area";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/app/_components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactusFormSchema,
  contactusFormType,
} from "@/lib/validation/contact-form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios, { AxiosError } from "axios";
import { useToast } from "@/app/_components/ui/use-toast";

interface ContactFormProps {}

const ContactForm: FC<ContactFormProps> = ({}) => {
  const {
    handleSubmit,
    register,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<contactusFormType>({
    resolver: zodResolver(contactusFormSchema),
  });
  const { toast } = useToast();

  const submitHandler = async function (formData: contactusFormType) {
    try {
      const { data } = await axios.post("/api/contact-us", formData);
      console.log(data);
      if (data.status === 200) {
        console.log(data);
        return toast({
          title: "Your data has been Submitted",
          description: "Please Check your data",
          variant: "default",
        });
        // return reset();
      }

      return toast({
        title: "Something Went Wrong",
        description: "Please Check your data",
        variant: "destructive",
      });
    } catch (err) {
      console.log(err);
      if (err instanceof z.ZodError) {
        setError("email", { message: err.message });
        return;
      }
      if (err instanceof AxiosError) {
        setError("email", { message: err.response?.data });
        return;
      }

      setError("email", { message: "something went wrong" });
    }
  };

  return (
    <div className="bg-foreground flex items-center justify-center py-14 px-4 w-full">
      <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-2 border-t border-t-background p-4">
        <h2 className="font-paragraph text-background text-extra_paragraph_heading text-center md:text-left max-w-xs">
          Send us a message, and we will get back to you.
        </h2>
        <form
          className="col-span-2 w-full flex flex-col gap-4 "
          onSubmit={handleSubmit(submitHandler)}
        >
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex items-start flex-col justify-start gap-2 w-full ">
              <Label htmlFor="First Name">First Name</Label>
              <Input
                id="First Name"
                autoCapitalize="off"
                autoComplete="none"
                className="bg-transparent focus-visible:ring-offset-0 focus-visible:outline-none focus-visible:ring-0"
                type="text"
                {...register("firstName")}
                disabled={isSubmitting}
                required
              />
              {errors?.firstName ? (
                <p className="px-1 text-xs text-destructive h-4">
                  {errors.firstName.message}
                </p>
              ) : (
                <p className="h-4"></p>
              )}
            </div>
            <div className="flex items-start flex-col justify-start gap-2 w-full">
              <Label htmlFor="Last Name">Last Name</Label>
              <Input
                id="Last Name"
                autoCapitalize="off"
                autoComplete="none"
                className="bg-transparent focus-visible:ring-offset-0 focus-visible:outline-none focus-visible:ring-0"
                type="text"
                {...register("lastName")}
                disabled={isSubmitting}
                required
              />
              {errors?.lastName ? (
                <p className="px-1 text-xs text-destructive h-4">
                  {errors.lastName.message}
                </p>
              ) : (
                <p className="h-4"></p>
              )}
            </div>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex items-start flex-col justify-start gap-2 w-full ">
              <Label htmlFor="Phone">Phone</Label>
              <Input
                id="Phone"
                autoCapitalize="off"
                autoComplete="none"
                className="bg-transparent focus-visible:ring-offset-0 focus-visible:outline-none focus-visible:ring-0"
                type="tel"
                required
                {...register("phone")}
                disabled={isSubmitting}
              />
              {errors?.phone ? (
                <p className="px-1 text-xs text-destructive h-4">
                  {errors.phone.message}
                </p>
              ) : (
                <p className="h-4"></p>
              )}
            </div>
            <div className="flex items-start flex-col justify-start gap-2 w-full">
              <Label htmlFor="Email">Email Id</Label>
              <Input
                id="Email"
                autoCapitalize="off"
                autoComplete="none"
                className="bg-transparent focus-visible:ring-offset-0 focus-visible:outline-none focus-visible:ring-0"
                type="email"
                required
                {...register("email")}
                disabled={isSubmitting}
              />
              {errors?.email ? (
                <p className="px-1 text-xs text-destructive h-4">
                  {errors.email.message}
                </p>
              ) : (
                <p className="h-4"></p>
              )}
            </div>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex items-start flex-col justify-start gap-2 w-full ">
              <Label htmlFor="Company Name">Company Name, If Applicable</Label>
              <Input
                id="Company Name"
                autoCapitalize="off"
                autoComplete="none"
                className="bg-transparent focus-visible:ring-offset-0 focus-visible:outline-none focus-visible:ring-0"
                type="text"
                {...register("companyName")}
                disabled={isSubmitting}
              />
              {errors?.companyName ? (
                <p className="px-1 text-xs text-destructive h-4">
                  {errors.companyName.message}
                </p>
              ) : (
                <p className="h-4"></p>
              )}
            </div>
            <div className="flex items-start flex-col justify-start gap-2 w-full">
              <Label htmlFor="Company Website">Company Website</Label>
              <Input
                id="Company Website"
                autoCapitalize="off"
                autoComplete="none"
                className="bg-transparent focus-visible:ring-offset-0 focus-visible:outline-none focus-visible:ring-0"
                type="url"
                {...register("companyWebsite")}
                disabled={isSubmitting}
              />
              {errors?.companyWebsite ? (
                <p className="px-1 text-xs text-destructive h-4">
                  {errors.companyWebsite.message}
                </p>
              ) : (
                <p className="h-4"></p>
              )}
            </div>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-1 gap-2">
            <div className="flex items-start flex-col justify-start gap-2 w-full ">
              <Label htmlFor="Message">Message</Label>
              <Textarea
                required
                className="bg-transparent focus-visible:ring-offset-0 focus-visible:outline-none focus-visible:ring-0"
                {...register("message")}
                disabled={isSubmitting}
              />
              {errors?.message ? (
                <p className="px-1 text-xs text-destructive h-4">
                  {errors.message.message}
                </p>
              ) : (
                <p className="h-4"></p>
              )}
            </div>
          </div>
          <Button
            variant={"default"}
            size={"sm"}
            className="max-w-[120px]"
            disabled={isSubmitting}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
