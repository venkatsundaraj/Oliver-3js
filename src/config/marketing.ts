import {
  contactUsItem,
  locationItem,
  MainNavItems,
  functionalSpiralItem,
} from "@/types"
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

export const contactUsBody: contactUsItem[] = [
  {
    icon: "https://utfs.io/f/ZowmNmBHF7rVuWjyjgtWdTHI3LNzMgCnc7u9iRa5BAtXG2yv",
    name: "+91 22670 00505",
    link: "tel:+91 22670 00505",
  },
  {
    icon: "https://utfs.io/f/ZowmNmBHF7rVj1hVHcW8lWpd9eUfvNKun5Rza3Jr2k7oD6Gb",
    name: "contact@cosmostrategy.com",
    link: "email:contact@cosmostrategy.com",
  },
  {
    icon: "https://utfs.io/f/ZowmNmBHF7rVKgolOqILRN7EY2f498lBm1DhqtyXeHvZVid5",
    name: "contact@cosmostrategy.com",
    link: "email:contact@cosmostrategy.com",
  },
  {
    icon: "https://utfs.io/f/ZowmNmBHF7rVy1dEBYiorYCB6GnRhmpVzbsTv5EZJ1LQ7Xc0",
    name: "cosmos-strategy-consultants-llp/",
    link: "cosmos-strategy-consultants-llp/",
  },
]

export const functionalSpiralContent: functionalSpiralItem[] = [
  {
    data: "Functional",
    value: "Business",
  },
  {
    data: "Brand",
    value: "Brand & Marketing",
  },
  {
    data: "Innovation",
    value: "Innovation",
  },
  {
    data: "Human Capital",
    value: "Human Resources",
  },
  {
    data: "Sales",
    value: "Sales, Business Development & Distribution",
  },
  {
    data: "Finance",
    value: "Financeial Management, Management Accountancy",
  },
  {
    data: "Operations",
    value: "Operations & Supply Chain",
  },
]

export const domainsData: string[] = [
  "Global International",
  "Regional Giants",
  "SME's",
  "Startup Ventures",
  "Not-for-Profit Organisation",
]
