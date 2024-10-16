import {
  contactUsItem,
  locationItem,
  MainNavItems,
  functionalSpiralItem,
} from "@/types";
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
];

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
];

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
];

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
];

export const domainsData: string[] = [
  "Global International",
  "Regional Giants",
  "SME's",
  "Startup Ventures",
  "Not-for-Profit Organisation",
];

export const tailSectionData: { title: string; palette: string }[] = [
  {
    title: "A multi billion dollar, emerging markets, FMCG conglomerate",
    palette: "bg-tail-a",
  },
  { title: "A global telecom giant", palette: "bg-tail-b" },
  {
    title: "An Indian premium fashion boutique",
    palette: "bg-tail-c",
  },
  {
    title: "An Indian FMCG snacking startup",
    palette: "bg-tail-d",
  },
  {
    title: "An Indian amusement parks leader",
    palette: "bg-tail-e",
  },
];

export const differentiatorData: {
  serialNumber: string;
  description: string;
}[] = [
  {
    serialNumber: "A.",
    description:
      "Insight centered strategy instead of value chain driven strategy",
  },
  {
    serialNumber: "B.",
    description:
      "Root growth driver centered approach instead of algorithmic approach to problem solving",
  },
  {
    serialNumber: "C.",
    description:
      "Enterprise and organization design instead of functional design alone",
  },
  {
    serialNumber: "D.",
    description: "Not just reports - Hero actions and programs to do",
  },
  {
    serialNumber: "E.",
    description:
      "Collaborative solution creation around the table instead of transactional delivery across the table",
  },
  {
    serialNumber: "F.",
    description: "practitioners as consultants instead of career consultants",
  },
  {
    serialNumber: "G.",
    description:
      "Only senior professionals with 25 years+ each and 500+ years experience instead of an army of junior applications",
  },
  {
    serialNumber: "H.",
    description:
      "Diverse experience harnessing horizontal knowledge complementing client's category depth instead of narrow specialization reflecting what clients",
  },
  {
    serialNumber: "I.",
    description:
      "Expeerience across x categories, y geographies, z domains versus tunneled expertise",
  },
];

export const ourDifferentiatorContent: { title: string; imgPath: string }[] = [
  {
    title: "Insights centered strategy",
    imgPath:
      "https://utfs.io/f/ZowmNmBHF7rVS7N3l6RkTnuUMoapyhGFmg9lwIYORcVixtW1",
  },
  {
    title: "Hero actions",
    imgPath:
      "https://utfs.io/f/ZowmNmBHF7rVbWDCKXkH2jDYzO9VfQms1UPwlxZdI8GBNqX7",
  },
  {
    title: "360 deg co-creation",
    imgPath:
      "https://utfs.io/f/ZowmNmBHF7rVerDO2THzKF8PVfhHaR7CmudUQywI1cWtxBk2",
  },
  {
    title: "Only senior consultants",
    imgPath:
      "https://utfs.io/f/ZowmNmBHF7rVKD9il6ILRN7EY2f498lBm1DhqtyXeHvZVid5",
  },
  {
    title: "500+ years, 70% practitioners",
    imgPath:
      "https://utfs.io/f/ZowmNmBHF7rVWFoOmX2uX31TIjKoHYR0aPnSbMcFkhvmy76G",
  },
  {
    title: "Tremendous diversity",
    imgPath:
      "https://utfs.io/f/ZowmNmBHF7rVcGmgyCFL0cRPUsJHtd7pnFIgDZAmaLNfuQi6",
  },
  {
    title: "End to end Accountability",
    imgPath:
      "https://utfs.io/f/ZowmNmBHF7rVih5Fmu12L9SrhBkonyJq4Z8l0ANjKH7a5euM",
  },
  {
    title: "Bespoke approach",
    imgPath:
      "https://utfs.io/f/ZowmNmBHF7rVgAnj0u8GZmO7D95FyjUwVrPNpCBfxz4KHMWX",
  },
];
