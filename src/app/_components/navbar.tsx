"use client";

import { FC, useState } from "react";
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
import MobileNav from "@/app/_components/mobile-nav";
import { useSelectedLayoutSegment } from "next/navigation";
import { ourSnapshotContent } from "@/config/marketing";
import MasThead from "./masthead";

interface NavbarProps {
  items: MainNavItems;
  children?: React.ReactNode;
}

const Navbar: FC<NavbarProps> = ({ items, children }) => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const segment = useSelectedLayoutSegment();

  const valueChangeHanlder = function (e: string) {
    console.log(e);
  };
  return (
    <>
      <header
        className={cn(
          "flex flex-row items-center justify-center gap-0 py-1 z-20  fixed w-screen top-0 border-b px-4 md:px-0 backdrop-blur-sm",
          true && "justify-between"
        )}
      >
        <div className="flex items-center justify-between md:w-screen  px-10 ">
          <div className="flex items-center justify-center gap-2 py-4">
            <Link
              href="/"
              className="inline-flex z-40 font-semibold items-center justify-center flex-nowrap gap-2"
            >
              <Image
                height={100}
                width={200}
                className="w-[100px] md:w-[200px]"
                src={
                  "https://utfs.io/f/ZowmNmBHF7rVyt3CMIEiorYCB6GnRhmpVzbsTv5EZJ1LQ7Xc"
                }
                alt="Logo"
              />
            </Link>
            <MasThead />
          </div>

          {items?.length ? (
            <nav
              className={cn(
                "hidden xl:flex items-center justify-center gap-8 flex-row w-[900px] max-w-[900px]",
                {}
              )}
            >
              <NavigationMenu
                orientation="horizontal"
                className="static"
                onValueChange={(e) => valueChangeHanlder(e)}
              >
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>
                      <Link
                        href={"#"}
                        className={cn(
                          "inline-flex bg-transparent items-center text-foreground flex-row justify-center hover:text-primary-foreground text-sm font-medium font-paragraph"
                        )}
                      >
                        {ourSnapshotContent.title}
                      </Link>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent
                      asChild={false}
                      className={cn("border-t border-b bg-background w-screen")}
                    >
                      <ul className="flex  items-center justify-start w-screen gap-8 px-8 py-12 flex-col max-h-[360px] md:max-h-[460px] overflow-y-scroll">
                        {ourSnapshotContent.subItems.length
                          ? ourSnapshotContent.subItems.map((item, i) => (
                              <li
                                key={i}
                                className="text-foreground container text-extra_subtitle_heading font-paragraph list-none"
                              >
                                {item}
                              </li>
                            ))
                          : null}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  {items.map((item, index) => (
                    <NavigationMenuItem className="" key={index}>
                      <NavigationMenuTrigger className="static">
                        <Link
                          key={index}
                          href={item.disabled ? "#" : item.href}
                          className={cn(
                            "inline-flex bg-transparent items-center text-foreground flex-row justify-center hover:text-primary-foreground text-sm font-medium font-paragraph",
                            {
                              "cursor-not-allowed text-foreground/50":
                                item.disabled,
                            },
                            item.href.startsWith(`/${segment}`)
                              ? "text-secondary-foreground font-bold"
                              : "text-foreground"
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
                          <div className="w-screen flex items-center justify-end bg-transparent">
                            <ul className="flex items-center justify-start flex-wrap w-[930px] gap-x-12 gap-y-6 ps-0 pe-6 py-6">
                              {item.subItems.map((subItem, i) => (
                                <li
                                  key={i}
                                  className="flex items-center justify-center "
                                >
                                  <Link
                                    className={cn(
                                      "inline-flex  items-center text-foreground hover:text-secondary-foreground flex-row justify-center group-hover:text-primary-foreground text-sm font-medium font-paragraph ",
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
                          </div>
                        </NavigationMenuContent>
                      ) : null}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </nav>
          ) : null}
        </div>
        <button
          className="flex items-center space-x-2 xl:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? (
            <Icons.CircleX className="text-foreground" />
          ) : (
            <Icons.Menu className="text-foreground" />
          )}
          <span className="font-bold hidden">Menu</span>
        </button>
        {showMobileMenu && items && (
          <MobileNav
            removeHandler={() => setShowMobileMenu(!showMobileMenu)}
            items={items}
          >
            {children}
          </MobileNav>
        )}
      </header>
    </>
  );
};

export default Navbar;
