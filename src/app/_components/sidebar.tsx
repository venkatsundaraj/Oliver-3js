"use client"

import { contentLists } from "@/config/marketing"
import Link from "next/link"
import { FC } from "react"
import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/_components/ui/accordion"

import CreatePost from "@/app/_components/create-post"

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <nav className="max-w-[280px] w-full flex items-start justify-center border-e border-e-foreground h-screen overflow-hidden p-4 ">
      <ul className="flex list-none items-center flex-col justify-between w-full">
        {contentLists.map((item, i) => (
          <li className="text-subtitle_heading w-full text-center" key={i}>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-foreground ">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="flex items-start px-14 justify-center gap-2 text-subtitle_heading flex-col">
                    {item.subItems.map((subItem, i) =>
                      subItem.type !== "button" ? (
                        <li key={i}>
                          <Link
                            key={i}
                            href={subItem.disabled ? "#" : subItem.href}
                            className={cn(
                              "inline-flex bg-transparent items-center text-secondary_heading text-foreground flex-row justify-center hover:text-primary-foreground text-sm font-medium font-paragraph",
                              {
                                "cursor-not-allowed text-foreground/50":
                                  subItem.disabled,
                              }
                            )}
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ) : (
                        <li key={i}>
                          <CreatePost subItem={subItem} />
                        </li>
                      )
                    )}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Sidebar

{
  /* <Link
              href={item.disabled ? "#" : item.href}
              className={cn(
                "inline-flex bg-transparent items-center text-secondary_heading text-foreground flex-row justify-center hover:text-primary-foreground text-sm font-medium font-paragraph",
                {
                  "cursor-not-allowed text-foreground/50": item.disabled,
                }
              )}
            >
              {item.title}
            </Link> */
}
