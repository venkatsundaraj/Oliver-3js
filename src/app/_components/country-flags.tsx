import { FC } from "react";
import Image from "next/image";

interface CountryFlagsProps {
  data: string[];
}

const CountryFlags: FC<CountryFlagsProps> = ({ data }) => {
  return data.map((item, i) => (
    <Image
      src={item}
      width={640}
      height={200}
      alt="logo"
      className="w-full h-auto"
      priority={true}
      quality={100}
    />
  ));
};

export default CountryFlags;
