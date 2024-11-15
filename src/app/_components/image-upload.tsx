"use client"

import React, { useState, useEffect } from "react"
import { useFormContext } from "react-hook-form"
import Image from "next/image"
import { UploadButton } from "@/lib/uploadthing"
import { OurFileRouter } from "@/app/api/uploadthing/core"

interface ImageUploadProps {
  name: string
  label: string
}

export const ImageUpload: React.FC<ImageUploadProps> = ({ name, label }) => {
  const { setValue, watch } = useFormContext()
  const [preview, setPreview] = useState<string | null>(null)

  const value = watch(name)

  useEffect(() => {
    if (typeof value === "string") {
      setPreview(value)
    } else if (value instanceof File) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(value)
    } else {
      setPreview(null)
    }
  }, [value])

  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="flex items-center space-x-4">
        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            if (res && res.length > 0) {
              setValue(name, res[0].url, { shouldValidate: true })
            }
          }}
          onUploadError={(error: Error) => {
            console.error(error)
          }}
        />
        {preview && (
          <div className="relative w-20 h-20">
            <Image
              src={preview}
              alt="Preview"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-md"
            />
          </div>
        )}
      </div>
      {typeof value === "string" && (
        <p className="text-sm text-gray-500 truncate">{value}</p>
      )}
    </div>
  )
}
