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
      console.log(formData);
      const { data } = await axios.post("/api/contact-us", formData);
      console.log(data);
      if (data.status === 200) {
        console.log(data);
        toast({
          title: "Your data has been Submitted",
          description: "Please Check your data",
          variant: "default",
        });
        return reset();
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
    <div className="bg-background flex items-center justify-center py-14 px-4 w-full">
      <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-2 border border-foreground p-4 md:p-8">
        <h2 className="font-paragraph text-foreground text-extra_paragraph_heading text-center md:text-left max-w-xs">
          Send us a message, and we will get back to you.
        </h2>
        <form
          className="col-span-2 text-foreground w-full flex flex-col gap-4 "
          onSubmit={handleSubmit(submitHandler)}
        >
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex items-start flex-col justify-start gap-2 w-full group relative">
              <Input
                id="First Name"
                autoCapitalize="off"
                autoComplete="none"
                placeholder=" "
                className="w-full p-0 text-foreground bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus-visible:ring-0 rounded-none focus-visible:border-b focus-visible:border-b-foreground focus:border-primary peer"
                type="text"
                {...register("firstName")}
                disabled={isSubmitting}
                required
              />
              <Label
                htmlFor="First Name"
                className="absolute text-sm text-muted-foreground duration-300 transform -translate-y-7 scale-90 top-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:text-foreground peer-focus:scale-90 peer-focus:-translate-y-7"
              >
                First Name
              </Label>
              {errors?.firstName ? (
                <p className="px-1 text-xs text-destructive h-4">
                  {errors.firstName.message}
                </p>
              ) : (
                <p className="h-4"></p>
              )}
            </div>
            <div className="flex items-start flex-col justify-start gap-2 w-full relative">
              <Input
                id="Last Name"
                autoCapitalize="off"
                placeholder=" "
                className="w-full p-0 text-foreground bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus-visible:ring-0 rounded-none focus-visible:border-b focus-visible:border-b-foreground focus:border-primary peer"
                autoComplete="none"
                type="text"
                {...register("lastName")}
                disabled={isSubmitting}
                required
              />
              <Label
                htmlFor="Last Name"
                className="absolute text-sm text-muted-foreground duration-300 transform -translate-y-7 scale-90 top-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:text-foreground peer-focus:scale-90 peer-focus:-translate-y-7"
              >
                Last Name
              </Label>
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
            <div className="flex items-start flex-col justify-start gap-2 w-full relative">
              <Input
                id="Phone"
                autoCapitalize="off"
                autoComplete="none"
                placeholder=" "
                className="w-full p-0 text-foreground bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus-visible:ring-0 rounded-none focus-visible:border-b focus-visible:border-b-foreground focus:border-primary peer"
                type="tel"
                required
                {...register("phone")}
                disabled={isSubmitting}
              />
              <Label
                htmlFor="Phone"
                className="absolute text-sm text-muted-foreground duration-300 transform -translate-y-7 scale-90 top-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:text-foreground peer-focus:scale-90 peer-focus:-translate-y-7"
              >
                Phone
              </Label>
              {errors?.phone ? (
                <p className="px-1 text-xs text-destructive h-4">
                  {errors.phone.message}
                </p>
              ) : (
                <p className="h-4"></p>
              )}
            </div>
            <div className="flex items-start flex-col justify-start gap-2 w-full relative">
              <Input
                id="Email"
                autoCapitalize="off"
                autoComplete="none"
                placeholder=" "
                className="w-full p-0 text-foreground bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus-visible:ring-0 rounded-none focus-visible:border-b focus-visible:border-b-foreground focus:border-primary peer"
                type="email"
                required
                {...register("email")}
                disabled={isSubmitting}
              />
              <Label
                htmlFor="Email"
                className="absolute text-sm text-muted-foreground duration-300 transform -translate-y-7 scale-90 top-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:text-foreground peer-focus:scale-90 peer-focus:-translate-y-7"
              >
                Email Id
              </Label>
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
            <div className="flex items-start flex-col justify-start gap-2 w-full relative">
              <Input
                id="Company Name"
                autoCapitalize="off"
                autoComplete="none"
                placeholder=" "
                className="w-full p-0 text-foreground bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus-visible:ring-0 rounded-none focus-visible:border-b focus-visible:border-b-foreground focus:border-primary peer"
                type="text"
                {...register("companyName")}
                disabled={isSubmitting}
              />
              <Label
                htmlFor="Company Name"
                className="absolute text-sm text-muted-foreground duration-300 transform -translate-y-7 scale-90 top-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:text-foreground peer-focus:scale-90 peer-focus:-translate-y-7"
              >
                Company Name, If Applicable
              </Label>
              {errors?.companyName ? (
                <p className="px-1 text-xs text-destructive h-4">
                  {errors.companyName.message}
                </p>
              ) : (
                <p className="h-4"></p>
              )}
            </div>
            <div className="flex items-start flex-col justify-start gap-2 w-full relative">
              <Input
                id="Company Website"
                autoCapitalize="off"
                autoComplete="none"
                placeholder=" "
                className="w-full p-0 text-foreground bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus-visible:ring-0 rounded-none focus-visible:border-b focus-visible:border-b-foreground focus:border-primary peer"
                type="url"
                {...register("companyWebsite")}
                disabled={isSubmitting}
              />
              <Label
                htmlFor="Company Website"
                className="absolute text-sm text-muted-foreground duration-300 transform -translate-y-7 scale-90 top-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:text-foreground peer-focus:scale-90 peer-focus:-translate-y-7"
              >
                Company Website
              </Label>
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
            <div className="flex items-start flex-col justify-start gap-2 w-full relative">
              <Textarea
                required
                className="w-full p-0 text-foreground bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus-visible:ring-0 rounded-none focus-visible:border-b focus-visible:border-b-foreground focus:border-primary peer"
                placeholder=" "
                {...register("message")}
                disabled={isSubmitting}
              />
              <Label
                className="absolute text-sm text-muted-foreground duration-300 transform -translate-y-9 scale-90 top-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-10 peer-focus:text-foreground peer-focus:scale-90 peer-focus:-translate-y-9"
                htmlFor="Message"
              >
                Message
              </Label>
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
