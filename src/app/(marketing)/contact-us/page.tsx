import { FC } from "react";
import { addressData, contactUsBody } from "@/config/marketing";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/app/_components/contact-form";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      {/* {Form Section} */}
      <section className="w-screen flex items-center justify-center bg-background py-6 md:py-32">
        <div className="container flex items-start justify-center flex-col">
          <h2 className="flex items-start justify-start flex-col">
            <span className="text-extra_paragraph_heading text-foreground font-heading text-center">
              Contact Us
            </span>
            <span className="text-primary-foreground text-secondary_heading font-heading font-bold">
              Get in Touch
            </span>
          </h2>
          <ContactForm />
        </div>
      </section>

      {/* {CTA Section} */}
      <section className="w-screen flex items-center justify-center bg-background py-6 md:py-32">
        <div className="container flex items-center justify-start">
          <ul className="grid grid-cols-1 md:grid-cols-2 w-full gap-8 md:gap-8 md:px-28">
            {contactUsBody.map((item, i) => (
              <li key={i} className="flex gap-6 items-start justify-start">
                <Image src={item.icon} alt={item.name} width={35} height={35} />
                <Link
                  className="font-paragraph text-foreground text-subtitle_heading"
                  href={item.link}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* {Our offices Section} */}
      <section className="w-screen flex items-center justify-center bg-background py-6 md:py-32">
        <div className="container flex items-start justify-center flex-col">
          <h2 className="flex items-start justify-start flex-col">
            <span className="text-extra_paragraph_heading text-foreground font-heading text-center">
              Our
            </span>
            <span className="text-primary-foreground text-secondary_heading font-heading font-bold">
              Offices
            </span>
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {addressData.map((item, i) => (
              <li
                key={i}
                className="flex bg-secondary-foreground items-start justify-start flex-col gap-4 md:gap-6 p-8 "
              >
                <p className="font-paragraph text-extra_paragraph_heading text-background leading-normal">
                  {item.location}
                </p>
                <p className="font-paragraph text-extra_paragraph_heading text-foreground leading-normal">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default page;
