import {
  generateReactHelpers,
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react"

import type { OurFileRouter } from "@/app/api/uploadthing/core"

export const { uploadFiles, useUploadThing } =
  generateReactHelpers<OurFileRouter>()

export const UploadButton = generateUploadButton<OurFileRouter>()
export const UploadDropzone = generateUploadDropzone<OurFileRouter>()
