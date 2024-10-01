"use client"

import { Button, buttonVariants } from "@/app/_components/button"
import { cn } from "@/lib/utils"
import { Canvas } from "@react-three/fiber"
import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

interface pageProps {}

const Model = dynamic(() => import("@/app/_components/model"), {
  loading: () => <p>Loading</p>,
  ssr: false,
})

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <Model />

      {/* Our Terrain Section */}
      <section className="w-screen flex items-center justify-center h-screen bg-background">
        <div className="container flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full">
            <div className="flex items-start flex-col justify-center gap-4">
              <h2 className="flex items-start justify-start flex-col">
                <span className="text-extra_paragraph_heading text-foreground font-paragraph">
                  Our
                </span>
                <span className="text-primary-foreground text-secondary_heading font-normal">
                  Terrain
                </span>
              </h2>
              <p className="max-w-md text-extra_paragraph_heading text-foreground">
                Operating Contexts that are Complex, or Represent
                discontinuities, or have a history of failure. Across
                Industries, & Geographies Categories, & Domains.
              </p>
              <Link
                href={"/know-more"}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "text-foreground rounded-none mt-2"
                )}
              >
                Know More
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <Image
                alt="Our Trrain"
                src="https://utfs.io/f/ZowmNmBHF7rVfjRd73PCmXPz69iKdAF7rv2Qs8klLYWEecnx"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* People Section */}
      <section className="w-screen flex items-center justify-center h-screen bg-background">
        <div className="container flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full">
            <div className="flex items-start flex-col justify-center gap-4">
              <h2 className="flex items-start justify-start flex-col">
                <span className="text-extra_paragraph_heading text-foreground font-paragraph">
                  Some of our
                </span>
                <span className="text-primary-foreground text-secondary_heading font-normal">
                  People
                </span>
              </h2>
              <p className="max-w-md text-extra_paragraph_heading text-foreground">
                The leadership team at Cosmos comprises senior professionals,
                with more than 500 years of Cumulative experience in building,
                managing & growing large businesses across various geographies
                globally.
              </p>
              <Link
                href={"/know-more"}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "text-foreground rounded-none mt-2"
                )}
              >
                Know More
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <Image
                alt="Our Trrain"
                src="https://utfs.io/f/ZowmNmBHF7rVKZnxLUILRN7EY2f498lBm1DhqtyXeHvZVid5"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projectjs Section */}
      <section className="w-screen flex items-center justify-center h-screen bg-background">
        <div className="container flex items-center justify-center">
          <div className="grid grid-cols-1  w-full">
            <div className="flex items-start flex-col justify-center gap-4">
              <h2 className="flex items-start justify-start flex-col">
                <span className="text-extra_paragraph_heading text-foreground font-paragraph">
                  Some of our
                </span>
                <span className="text-primary-foreground text-secondary_heading font-normal">
                  People
                </span>
              </h2>
              <p className="max-w-md text-extra_paragraph_heading text-foreground">
                The leadership team at Cosmos comprises senior professionals,
                with more than 500 years of Cumulative experience in building,
                managing & growing large businesses across various geographies
                globally.
              </p>
              <Link
                href={"/know-more"}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "text-foreground rounded-none mt-2"
                )}
              >
                Know More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default page
