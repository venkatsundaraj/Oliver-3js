import React, { FC } from "react"
import Image from "next/image"

interface ImageProps {
  width: string
  height: string
  aspectRatio?: string
  alt: string
  src: string
  objectFit?: string
}

const CustomImage: FC<ImageProps> = function ({
  width,
  height,
  aspectRatio,
  alt,
  src,
  objectFit,
  ...props
}) {
  const altTag = alt || "Razorswift"
  const objectFitValue = objectFit || "cover"
  return (
    <div>
      <Image
        priority={true}
        src={src}
        alt={altTag}
        objectFit={objectFitValue}
        fill={true}
        sizes="auto"
        {...props}
      />
    </div>
  )
}

export default CustomImage
