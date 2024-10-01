import { locationItem, MainNavItems } from "@/types"
export const marketingConfig: MainNavItems = [
  {
    title: "Home",
    href: "/",
    subItems: [
      { title: "Our Terrain", href: "/our-terrain" },
      { title: "Our Differentiators", href: "/our-differentiators" },
    ],
  },
  {
    title: "Our Essence",
    href: "/our-essence",
    subItems: [
      { title: "Our Terrain", href: "/our-terrain" },
      { title: "Our Differentiators", href: "/our-differentiators" },
      { title: "Our Practices", href: "/our-practices" },
    ],
  },
  {
    title: "Our Offer",
    href: "/our-offer",
    subItems: [
      { title: "Our Terrain - One", href: "/our-terrain" },
      { title: "Our Differentiators - One", href: "/our-differentiators" },
      { title: "Our Practices - One", href: "/our-practices" },
    ],
  },
  {
    title: "Our People",
    href: "/our-people",
    subItems: [],
  },
  {
    title: "Our Work",
    href: "/our-work",
    subItems: [],
  },
  {
    title: "Our Blogs",
    href: "/our-blogs",
    subItems: [],
  },
]

// Footer contents
export const locationContents: locationItem[] = [
  {
    locationCount: "Location 1",
    location: "Address Line 1, Address Line 2, Address Line 3, City - Pincode.",
  },
  {
    locationCount: "Location 2",
    location: "Address Line 1, Address Line 2, Address Line 3, City - Pincode.",
  },
  {
    locationCount: "Location 3",
    location: "Address Line 1, Address Line 2, Address Line 3, City - Pincode.",
  },
  {
    locationCount: "Location 4",
    location: "Address Line 1, Address Line 2, Address Line 3, City - Pincode.",
  },
  {
    locationCount: "Location 5",
    location: "Address Line 1, Address Line 2, Address Line 3, City - Pincode.",
  },
]
