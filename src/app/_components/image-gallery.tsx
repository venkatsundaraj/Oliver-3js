"use state"

import Image from "next/image"
import { useState, useEffect } from "react"
import { FC } from "react"
import { Icons } from "./icons"
import { Button } from "./button"

interface ImageGalleryProps {
  images: string[]
  updateImageHandler: (val: string[]) => void
}

const ImageGallery: FC<ImageGalleryProps> = ({
  images,
  updateImageHandler,
}) => {
  const [removeImages, setRemoveImages] = useState<string[] | []>(images)

  useEffect(() => {
    setRemoveImages(images)
  }, [images])

  const imageRemoveHandler = function (item: string) {
    setRemoveImages((prev) => {
      const urls = prev.filter((value) => value !== item)
      updateImageHandler(urls)
      return urls
    })
  }

  return (
    <div className="grid grid-cols-8 gap-2">
      {removeImages.length
        ? removeImages.map((item, i) => (
            <div key={i} className="relative">
              <Image
                src={item}
                className="object-cover h-16 overflow-hidden w-28"
                width={100}
                height={100}
                alt="Dashboard Icons"
              />
              <Icons.X
                onClick={() => imageRemoveHandler(item)}
                className="absolute top-0 right-0 w-4 h-4 bg-foreground text-background rounded-full translate-x-[50%] translate-y-[-50%] cursor-pointer hover:bg-foreground/90"
              />
            </div>
          ))
        : null}
    </div>
  )
}

export default ImageGallery
