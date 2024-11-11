"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/app/_components/ui/button";
import { Calendar } from "@/app/_components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/_components/ui/popover";
import { Label } from "@/app/_components/ui/label";

interface DatePickerProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
  function ({ className, label, id, disabled, name, ...props }, ref) {
    const [date, setDate] = React.useState<Date>();

    return (
      <div
        className={cn(
          "flex items-start flex-col justify-start gap-2 w-full",
          className
        )}
      >
        {label && (
          <Label htmlFor={id} className="text-foreground font-paragraph">
            {label}
          </Label>
        )}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[280px] justify-start text-left font-normal bg-background hover:bg-background text-foreground hover:text-foreground",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              className="rounded-md border"
              selected={date}
              onSelect={(newDate) => {
                console.log(newDate);
                setDate(newDate);
                if (props.onChange) {
                  props.onChange(newDate as any);
                }
              }}
              disabled={disabled}
            />
          </PopoverContent>
        </Popover>
        <input
          type="hidden"
          ref={ref}
          name={name}
          value={date ? date.toISOString() : ""}
          {...props}
        />
      </div>
    );
  }
);
