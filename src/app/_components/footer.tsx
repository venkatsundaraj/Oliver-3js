import { FC } from "react"
import Image from "next/image"
import { locationContents } from "@/config/marketing"

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="flex items-center justify-center">
      <div className="grid w-full grid-cols-1 md:grid-cols-2">
        <div className="flex items-center justify-center flex-col">
          <Image
            height={100}
            width={200}
            src={
              "https://utfs.io/f/ZowmNmBHF7rVyt3CMIEiorYCB6GnRhmpVzbsTv5EZJ1LQ7Xc"
            }
            alt="Logo"
          />
          <h3 className="text-foreground font-heading">Our Offices</h3>
          <ul className="flex flex-col items-start justify-center gap-2">
            {locationContents.map((item, i) => (
              <li key={i} className="flex items-start justify-center flex-col">
                <h5 className="font-heading text-primary-foreground text-extra_paragraph_heading">
                  {item.locationCount}
                </h5>
                <p className="text-tertiary_heading font-paragraph text-foreground">
                  {item.location}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div></div>
      </div>
    </footer>
  )
}

export default Footer
