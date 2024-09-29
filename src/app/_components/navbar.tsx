"use client";

import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icons } from "@/app/_components/icons";
import { MainNavItems } from "@/types";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/app/_components/ui/navigation-menu";

interface NavbarProps {
  items: MainNavItems;
}

const Navbar: FC<NavbarProps> = ({ items }) => {
  const valueChangeHanlder = function (e: string) {
    console.log(e);
  };
  return (
    <header
      className={cn(
        "sm:flex relative flex-row items-center justify-between gap-8 py-4 px-10 border-b",
        true && "justify-between"
      )}
    >
      <Link
        href="/"
        className="flex z-40 font-semibold items-center justify-center flex-nowrap gap-2"
      >
        <Image
          height={100}
          width={200}
          src={
            "https://utfs.io/f/ZowmNmBHF7rV4k9DHq58tCRcZbLox5S9hfdI037uwUEjeQWF"
          }
          alt="Logo"
        />
      </Link>
      {items?.length ? (
        <nav
          className={cn(
            "hidden md:flex items-center justify-center gap-8 flex-row ",
            {}
          )}
        >
          <NavigationMenu
            orientation="horizontal"
            className="static"
            onValueChange={(e) => valueChangeHanlder(e)}
          >
            <NavigationMenuList>
              {items.map((item, index) => (
                <NavigationMenuItem className="" key={index}>
                  <NavigationMenuTrigger className="static">
                    <Link
                      key={index}
                      href={item.disabled ? "#" : item.href}
                      className={cn(
                        "inline-flex  items-center text-foreground flex-row justify-center hover:text-primary-foreground text-sm font-medium font-paragraph",
                        {
                          "cursor-not-allowed text-foreground/50":
                            item.disabled,
                        }
                      )}
                    >
                      {item.title}
                    </Link>
                  </NavigationMenuTrigger>

                  {item?.subItems.length ? (
                    <NavigationMenuContent
                      asChild={false}
                      className={cn("border-none ")}
                    >
                      <ul className="flex items-center justify-end w-screen gap-4 px-8 py-6">
                        {item.subItems.map((subItem, i) => (
                          <li
                            key={i}
                            className="flex items-center justify-center"
                          >
                            <Link
                              className={cn(
                                "inline-flex  items-center text-black flex-row justify-center group-hover:text-primary-foreground text-sm font-medium font-paragraph",
                                {
                                  "cursor-not-allowed text-foreground/50":
                                    item.disabled,
                                }
                              )}
                              href={subItem.href}
                            >
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  ) : null}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      ) : null}
    </header>
  );
};

export default Navbar;
