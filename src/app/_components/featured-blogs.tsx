import { FC } from "react";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/_components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

interface FeaturedBlogsProps {}

const FeaturedBlogs: FC<FeaturedBlogsProps> = ({}) => {
  return (
    <>
      <h2 className="text-foreground font-heading leading-tight text-secondary_heading">
        Also Read
      </h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
          active: true,
        }}
        plugins={[]}
        className={cn("w-full flex items-center justify-center relative ")}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <Link
                href={"/our-blogs"}
                className="grid grid-cols-1 md:grid-cols-2 w-full gap-8 md:gap-0"
              >
                <div className="flex items-center justify-center">
                  <Image
                    alt="Our Trrain"
                    className="w-3/4 md:w-96"
                    src="https://utfs.io/f/ZowmNmBHF7rVbWDCKXkH2jDYzO9VfQms1UPwlxZdI8GBNqX7"
                    width={200}
                    height={200}
                  />
                </div>
                <div className="flex items-start flex-col justify-center gap-4">
                  <h2 className="font-heading text-tertiary_heading text-secondary-foreground leading-tight md:leading-[55px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h2>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute top-[100%] right-[20%] md:right-0 translate-y-[-50%]">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </>
  );
};

export default FeaturedBlogs;
