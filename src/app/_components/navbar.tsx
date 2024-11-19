"use client"

import { FC, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Icons } from "@/app/_components/icons"
import { MainNavItems } from "@/types"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/app/_components/ui/navigation-menu"
import MobileNav from "@/app/_components/mobile-nav"
import { useSelectedLayoutSegment } from "next/navigation"

interface NavbarProps {
  items: MainNavItems
  children?: React.ReactNode
}

const Navbar: FC<NavbarProps> = ({ items, children }) => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)
  const segment = useSelectedLayoutSegment()

  const valueChangeHanlder = function (e: string) {
    console.log(e)
  }
  return (
    <header
      className={cn(
        "flex flex-row items-center justify-between gap-8 py-4 z-20 px-10 border-b fixed w-screen top-0 backdrop-blur-sm",
        true && "justify-between"
      )}
    >
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
                        "inline-flex bg-transparent items-center text-foreground flex-row justify-center hover:text-primary-foreground text-sm font-medium font-paragraph",
                        {
                          "cursor-not-allowed text-foreground/50":
                            item.disabled,
                        },
                        item.href.startsWith(`/${segment}`)
                          ? "text-secondary-foreground"
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
                      <ul className="flex items-center justify-end w-screen gap-4 px-8 py-6">
                        {item.subItems.map((subItem, i) => (
                          <li
                            key={i}
                            className="flex items-center justify-center "
                          >
                            <Link
                              className={cn(
                                "inline-flex  items-center text-black flex-row justify-center group-hover:text-primary-foreground text-sm font-medium font-paragraph ",
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
      <button
        className="flex items-center space-x-2 md:hidden"
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
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </header>
  )
}

export default Navbar
