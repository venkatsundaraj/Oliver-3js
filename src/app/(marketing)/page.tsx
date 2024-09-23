import Image from "next/image"
import { FC } from "react"

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <section className="flex relative items-center justify-center gap-5 w-screen h-[1000vh]">
      <Image
        alt="embedded Image"
        className=""
        objectFit="contain"
        fill
        src={
          "https://utfs.io/f/ZowmNmBHF7rVXqc0S0NPNKpEC2qHOlTSV3oM1muw8adnj5RY"
        }
      />
    </section>
  )
}

export default page
