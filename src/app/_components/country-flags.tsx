import { FC } from "react"
import Image from "next/image"

interface CountryFlagsProps {
  data: string[]
}

const CountryFlags: FC<CountryFlagsProps> = ({ data }) => {
  return data.map((item, i) => (
    <Image
      src={item}
      width={200}
      height={100}
      alt="logo"
      className="w-[220px] aspect-[256/160]"
    />
  ))
}

export default CountryFlags
