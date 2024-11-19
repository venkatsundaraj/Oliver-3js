import { cn } from "@/lib/utils"
import { type BlogAuthSchema } from "@/lib/validation/auth"
import React, { FC } from "react"
import { UseFormRegister } from "react-hook-form"
import { Label } from "@/app/_components/ui/label"

interface selectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  category: string[]
  label: string
}

const SelectCategory = React.forwardRef<
  HTMLSelectElement,
  selectProps & ReturnType<UseFormRegister<BlogAuthSchema>>
>(({ category, className, onChange, onBlur, name, label, ...props }, ref) => {
  return (
    <>
      <Label className="mb-2 block text-foreground">{label}</Label>
      <select
        {...props}
        ref={ref}
        onChange={onChange}
        name={name}
        onBlur={onBlur}
        className={cn(
          "bg-transparent p-4 border border-border text-foreground focus:outline-none",
          className
        )}
      >
        {category.length
          ? category.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))
          : null}
      </select>
    </>
  )
})

SelectCategory.displayName = "Select"

export default SelectCategory
