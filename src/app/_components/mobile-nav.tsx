import { MainNavItems } from "@/types";
import { FC } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icons } from "@/app/_components/icons";
import { useLockBody } from "@/hooks/use-lock-body";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/app/_components/ui/accordion";

interface MobileNavProps {}

interface MobileNavProps {
  items: MainNavItems;
  children?: React.ReactNode;
  removeHandler: () => void;
}

const MobileNav: FC<MobileNavProps> = ({ items, children, removeHandler }) => {
  return (
    <div
      className={cn(
        "fixed inset-0 top-24 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 xl:hidden"
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {items.length
            ? items.map((item, index) =>
                !item.subItems.length ? (
                  <Link
                    key={index}
                    href={item.disabled ? "#" : item.href}
                    onClick={removeHandler}
                    className={cn(
                      "flex w-full items-center rounded-md p-2 text-extra_subtitle_heading font-medium hover:underline",
                      item.disabled && "cursor-not-allowed opacity-60"
                    )}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-extra_subtitle_heading">
                        {item.title}
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="flex items-start justify-center flex-col gap-1">
                          {item.subItems.map((subItem, i) => (
                            <li>
                              <Link
                                key={index}
                                href={item.disabled ? "#" : item.href}
                                onClick={removeHandler}
                                className={cn(
                                  "flex w-full items-center rounded-md px-2 text-sm font-medium hover:underline",
                                  item.disabled &&
                                    "cursor-not-allowed opacity-60"
                                )}
                              >
                                {subItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                )
              )
            : null}
        </nav>
        {children}
      </div>
    </div>
  );
};

export default MobileNav;
