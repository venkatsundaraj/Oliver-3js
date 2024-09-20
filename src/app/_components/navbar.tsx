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
  return (
    <div className="sm:flex relative flex-row items-center justify-between gap-8 py-4 px-10 border-b">
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
        <nav className="hidden md:flex items-center justify-center gap-8 flex-row">
          {items.map((item, index) => (
            <NavigationMenu
              key={index}
              orientation="vertical"
              className="static"
            >
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="static">
                    <Link
                      key={index}
                      href={item.disabled ? "#" : item.href}
                      className={cn(
                        "inline-flex items-center text-foreground flex-row justify-center group-hover:text-foreground/50 text-sm font-medium font-paragraph",
                        {
                          "cursor-not-allowed text-foreground/50":
                            item.disabled,
                        }
                      )}
                    >
                      {item.title}
                    </Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-yellow-400  w-screen rounded-none">
                    <ul className="grid w-screen gap-3 p-6 lg:grid-cols-[.75fr_1fr] rounded-none">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              shadcn/ui
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Beautifully designed components that you can copy
                              and paste into your apps. Accessible.
                              Customizable. Open Source.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li title="Introduction">
                        Re-usable components built using Radix UI and Tailwind
                        CSS.
                      </li>
                      <li title="Installation">
                        How to install dependencies and structure your app.
                      </li>
                      <li title="Typography">
                        Styles for headings, paragraphs, lists...etc
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          ))}
        </nav>
      ) : null}
    </div>
  );
};

export default Navbar;
