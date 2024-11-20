import clsx, { ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { workTable } from "@/server/db/schema"
import { InferModel } from "drizzle-orm"
type Work = InferModel<typeof workTable>

export const cn = function (...className: ClassValue[]) {
  return twMerge(clsx(className))
}

export const slugify = function (title: string): string {
  return title
    .toString()
    .toLowerCase()
    .normalize("NFD") // Normalize to decomposed form for handling accents
    .replace(/[\u0300-\u036f]/g, "") // Remove accents
    .replace(/[^a-z0-9\s-]/g, "") // Remove non-alphanumeric characters except spaces and hyphens
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
    .trim() // Trim leading and trailing spaces/hyphens
    .replace(/^-+|-+$/g, "")
}

export const splitArray = function (item: Work[]) {
  const result = item.reduce<[Set<string>, Set<string>, Set<string>]>(
    (acc, { type, subType, location }) => {
      acc[0].add(type) // Add name to the first group
      acc[1].add(subType) // Add age to the second group
      acc[2].add(location) // Add interests to the third group
      return acc
    },
    [new Set<string>(), new Set<string>(), new Set<string>()]
  )
  console.log(result)
  return result
}
