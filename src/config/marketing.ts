import {
  contactUsItem,
  locationItem,
  SubNavItem,
  MainNavItems,
  NavItem,
  functionalSpiralItem,
  OurProjectsType,
} from "@/types";
import { Icon, Icons } from "@/app/_components/icons";
import { title } from "process";
export const marketingConfig: MainNavItems = [
  {
    title: "Our Profile",
    href: "/our-profile",
    subItems: [
      { title: "Our Etymology", href: "/our-profile" },
      { title: "Our Persona", href: "/our-profile#who-are-we" },
      { title: "Our Belief", href: "/our-profile#our-beliefs" },
      { title: "Our Values Engine", href: "/our-profile#our-values-engine" },
    ],
  },
  {
    title: "Our Promise",
    href: "/our-offer",
    subItems: [
      { title: "Our Goal", href: "/our-offer#our-goal" },
      { title: "Our Offer", href: "/our-offer#our-offer" },
      {
        title: "Our Differentiators",
        href: "/our-offer#our-differentiators",
      },
      { title: "Our Terrain", href: "/our-offer#our-terrain" },
      { title: "Our Practices", href: "/our-offer#our-practices" },
      { title: "Our Solution Levels", href: "/our-offer#our-solution-levels" },
      {
        title: "Our Domain Spirals",
        href: "/our-offer#our-functional-spirals",
      },
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
    subItems: [
      {
        title: "Our Projects",
        href: "/our-work#our-projects",
      },
      {
        title: "Our IPs",
        href: "/our-work#our-ips",
      },
    ],
  },

  {
    title: "Our Clients",
    href: "/our-client-domains",
    subItems: [
      {
        title: "Our Client Domains",
        href: "/our-client-domains#our-client-domains",
      },
      {
        title: "Our Clients",
        href: "/our-client-domains#some-of-our-clients",
      },
    ],
  },
  {
    title: "Our Views",
    href: "/our-blogs",
    subItems: [],
  },
  {
    title: "Our Co-ordinates",
    href: "/contact-us",
    subItems: [],
  },
];

export const ourSnapshotContent: { title: string; subItems: string[] } = {
  title: "Our Snapshot",
  subItems: [
    "Cosmos Strategy is a business strategy firm which uses deep internal & external insights to unlock higher, profitable growth for its clients : especially pertinent in business transformation, business entry or deep capability building scenarios.",
    "We are a bunch of growth strategists, with almost 500 years of cross category and geography experience cumulatively straddling almost all aspects of business. Bulk of this experience comes from client or practitioner side in leadership roles further supplemented by high end consulting experience.",
    "We emphasize using insight driven business strategy to help clients in business entry and transformations. This entails uncovering business insights & utilising them in a manner that helps clients do not just better marketing or operations but better business strategy & organisation design: an approach that goes beyond value chain & efficiency led incremental business strategy discourse. This further leads to specific actions or programs that the business needs to start doing over multiple time horizons. We are sector agnostic, and we cherish discontinuities. Our work in business entry straddles new category, new industry or new geography entry. In business transformations, we enjoy tasks pertaining to P&L transformations, rapid business scale ups or complex organisation culture transformations. A particularly gratifying part of our work pertains to strategic, on job business process & capability building - something where our proprietary approaches have helped organisations get better skilled with effective business results through light yet meaningful processes. As part of the overall task, we do undertake significant functional projects in marketing, sales & distribution, supply chain, IT, human capital, and performance management but they are invariably linked to holistic organisation & PnL evolution.",
    "Our overall approach is highly accountable & collaborative. A big part of solution development happens through on job, collaborative workshops. Further, we run along with our clients during execution as that's where strategies need to be continually fine-tuned. This approach combined with our client-side practitioner experience helps us remain granular & feasible in our advice to clients. We have a network of downstream alliance partners globally [design, activation, communication, analytics, direct marketing, valuation, people etc.] who can help execute the programs we design on shared accountability.",
    "Over the last 10 years, Cosmos Strategy has evolved to a firm of 16+ senior professionals with decades of diverse experience, clients across 5 countries & 3 continents, more than 12 associate firms, solutions across FMCG, Telecom, Pharma, Polyester, Apparel, Jewellery, Maintenance Services, Media, Beauty, Foods, Auto ... Most of these solutions have revolved around simplifying complex situations that has allowed us to continually learn, collaborate, co-create & own up our clients' objectives.",
  ],
};
export const insightCenteredContent: string[] = [
  "Empathy",
  "Insights",
  "Imperatives",
  "Strategy: Hero actions - Front & Back",
  "Obj. | Goals | Metrics",
  "Mission | Purpose | Vision | Definition",
  "Star Shifts : Start | Stop | Continue",
  "PoC & Execution Oversight",
  "Assured Success",
];
// Footer contents
export const locationContents: locationItem[] = [
  {
    locationCount: "India",
    location: "Address Line 1, Address Line 2, Address Line 3, City - Pincode.",
  },
  {
    locationCount: "Singapore",
    location: "Address Line 1, Address Line 2, Address Line 3, City - Pincode.",
  },
  {
    locationCount: "UK",
    location: "Address Line 1, Address Line 2, Address Line 3, City - Pincode.",
  },
  {
    locationCount: "Kenya",
    location: "Address Line 1, Address Line 2, Address Line 3, City - Pincode.",
  },
];
export const partnersContents: locationItem[] = [
  {
    locationCount: "Bengaluru",
    location: "Address Line 1, Address Line 2, Address Line 3, City - Pincode.",
  },
  {
    locationCount: "Delhi",
    location: "Address Line 1, Address Line 2, Address Line 3, City - Pincode.",
  },
  {
    locationCount: "Nagpur",
    location: "Address Line 1, Address Line 2, Address Line 3, City - Pincode.",
  },
  {
    locationCount: "Dubai",
    location: "Address Line 1, Address Line 2, Address Line 3, City - Pincode.",
  },
  {
    locationCount: "Toronto",
    location: "Address Line 1, Address Line 2, Address Line 3, City - Pincode.",
  },
  {
    locationCount: "Sydney",
    location: "Address Line 1, Address Line 2, Address Line 3, City - Pincode.",
  },
  {
    locationCount: "Barcelona",
    location: "Address Line 1, Address Line 2, Address Line 3, City - Pincode.",
  },
];

export const contactUsBody: contactUsItem[] = [
  {
    icon: "https://utfs.io/f/ZowmNmBHF7rVuWjyjgtWdTHI3LNzMgCnc7u9iRa5BAtXG2yv",
    name: "+91 8169531703",
    link: "tel:+91 8169531703",
  },
  {
    icon: "https://zkok4chdpn.ufs.sh/f/ZowmNmBHF7rVWKqF8k12uX31TIjKoHYR0aPnSbMcFkhvmy76",
    name: "Download Profile",
    link: "https://zkok4chdpn.ufs.sh/f/ZowmNmBHF7rVUwEtCAAY7SB9WamizGsyEwM4ZK2vHxtIn0kh",
  },
  {
    icon: "https://utfs.io/f/ZowmNmBHF7rVj1hVHcW8lWpd9eUfvNKun5Rza3Jr2k7oD6Gb",
    name: "contact@cosmostrategy.com",
    link: "mailto:contact@cosmostrategy.com",
  },
  {
    icon: "https://utfs.io/f/ZowmNmBHF7rVKgolOqILRN7EY2f498lBm1DhqtyXeHvZVid5",
    name: "+91 8169531703",
    link: "https://wa.me/+918169531703",
  },
  // {
  //   icon: "https://utfs.io/f/ZowmNmBHF7rVy1dEBYiorYCB6GnRhmpVzbsTv5EZJ1LQ7Xc0",
  //   name: "cosmos-strategy-consultants-llp/",
  //   link: "cosmos-strategy-consultants-llp/",
  // },
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
  "Promoter Driven Enterprises",
  "Regional Giants",
  "MSME's",
  "Startup Ventures",
  "Not-for-Profit Organisation",
];

export const clientDomains: string[] = [
  "India & Middle East",
  "Indonesia, China & Far East Asia",
  "Sub Saharan Africa",
  "US & Europe",
];

export const clientData: { title: string; color: string }[] = [
  { title: "A PE backed Ed-Tech start up", color: "blue" },
  {
    title: "A multi billion dollar, emerging markets, FMCG conglomerate",
    color: "blue",
  },
  { title: "An Indian premium fashion boutique", color: "yellow" },
  { title: "An Indian health & wellness leader", color: "blue" },
  { title: "A global media & entertainment powerhouse", color: "blue" },
  { title: "A global adult nutrition brand", color: "blue" },
  { title: "LA global, Indian jewellery leader", color: "blue" },
  {
    title: "An emerging Indian professional beauty products enterprise",
    color: "blue",
  },
  { title: "A global, multi category B2B and B2C conglomerate", color: "blue" },
  { title: "Home service startup", color: "blue" },
  { title: "An Indian diaspora targeted retail enterprise", color: "blue" },
  { title: "An Indian FMCG snacking start up", color: "blue" },
  { title: "A US Dollar Store Chain", color: "blue" },
  { title: "An Indian automotive leader", color: "blue" },
  { title: "An Indonesian FMCG major", color: "blue" },
  { title: "A global polyester fiber & filaments major", color: "blue" },
  { title: "A global, operations consulting group", color: "blue" },
  { title: "An Indian premium jewellery retailer", color: "blue" },
  { title: "An Indian amusement parks leader", color: "blue" },
  { title: "A PE funded FMCG personal care player", color: "blue" },
  { title: "A global home appliances start up", color: "blue" },
  { title: "An Indonesian fashion retailer", color: "blue" },
  { title: "An Indian e-tailer start up", color: "blue" },
  { title: "An Indian fashion & apparel leader", color: "blue" },
  { title: "An OOH media start up", color: "blue" },
  { title: "An Indian school education leader", color: "blue" },
  { title: "An emerging markets health & wellness FMCG major", color: "blue" },
  { title: "An South African Hair Retailer", color: "blue" },
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
    title: "Insights centered",
    imgPath:
      "https://utfs.io/f/ZowmNmBHF7rVS7N3l6RkTnuUMoapyhGFmg9lwIYORcVixtW1",
  },
  {
    title: "Insights → Hero Actions → P&Ls",
    imgPath:
      "https://utfs.io/f/ZowmNmBHF7rVbWDCKXkH2jDYzO9VfQms1UPwlxZdI8GBNqX7",
  },
  {
    title: "360 degree co-creation",
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
    title: "Handholding till execution & success",
    imgPath:
      "https://utfs.io/f/ZowmNmBHF7rVih5Fmu12L9SrhBkonyJq4Z8l0ANjKH7a5euM",
  },
  {
    title: "Customised approach & remuneration",
    imgPath:
      "https://utfs.io/f/ZowmNmBHF7rVgAnj0u8GZmO7D95FyjUwVrPNpCBfxz4KHMWX",
  },
];

export const valueEngineContent: string[] = [
  "Granular Insights",
  "Rich Empathy",
  "Practiced Expertise",
  "Holistic Perspective",
  "Collaborative Working",
  "Accountable Partnership",
  "Joyful Experience",
  "Mutual Learning",
  "Actionable Strategy",
  "Customisable Solution",
];

export const ourProfileContent: string[] = [
  "Businesses exist for growth and they often require help in unlocking it especially when the markets are complex. At the heart of all such problems & opportunities lies a core business insight, a market value driver, around which spirals a specific growth construct.",
  "Uncovering the right insight & having the entire business strategy and model revolve around it is the beginning of sustained growth advantage. This advantage often leads to new ways of expanding business & portfolio.",
  "Realising the advantage lies in the design of precise programs at the front-end on brand, innovation, customer engagement helped by a specific, enabling people & operations perspective.",
  " To give customised advice on making this happen requires intense collaboration, shared accountability, personal involvement by a sound blend of global practitioner + consulting experience at the core with a network of best in class program experts.",
];

export const ourProfileContentForStickySlider: { title: string; icon: Icon }[] =
  [
    {
      title:
        "Businesses exist for growth and they often require help in unlocking it especially when the markets are complex. At the heart of all such problems & opportunities lies a core business insight, a market value driver, around which spirals a specific growth construct.",
      icon: "Snail",
    },
    {
      title:
        "Uncovering the right insight & having the entire business strategy and model revolve around it is the beginning of sustained growth advantage. This advantage often leads to new ways of expanding business & portfolio.",
      icon: "Pencil",
    },
    {
      title:
        "Realising the advantage lies in the design of precise programs at the front-end on brand, innovation, customer engagement helped by a specific, enabling people & operations perspective.",
      icon: "Moon",
    },
    {
      title:
        " To give customised advice on making this happen requires intense collaboration, shared accountability, personal involvement by a sound blend of global practitioner + consulting experience at the core with a network of best in class program experts.",
      icon: "X",
    },
    {
      title:
        "Uncovering the right insight & having the entire business strategy and model revolve around it is the beginning of sustained growth advantage. This advantage often leads to new ways of expanding business & portfolio.",
      icon: "Laptop",
    },
    {
      title:
        "Realising the advantage lies in the design of precise programs at the front-end on brand, innovation, customer engagement helped by a specific, enabling people & operations perspective.",
      icon: "MapPin",
    },
    {
      title:
        " To give customised advice on making this happen requires intense collaboration, shared accountability, personal involvement by a sound blend of global practitioner + consulting experience at the core with a network of best in class program experts.",
      icon: "Play",
    },
    {
      title:
        " To give customised advice on making this happen requires intense collaboration, shared accountability, personal involvement by a sound blend of global practitioner + consulting experience at the core with a network of best in class program experts.",
      icon: "Plus",
    },
  ];

export const ourProfileContentIcon = [
  Icons.Snail,
  Icons.Pencil,
  Icons.Laptop,
  Icons.Moon,
];

export const addressData: { location: string; description: string }[] = [
  {
    location: "Mumbai",
    description: "Level 9, Platina, BKC, Mumbai - 400051. Maharashtra, India",
  },
  {
    location: "Singapore",
    description: "Level 19 & 20, Tower 2, 1 Raffles Place 048616, Singapore",
  },
  {
    location: "London",
    description: "Level 5,167 - 169 Great Portland St., London W1W 5PF, UK",
  },
  {
    location: "Nairobi",
    description:
      "Level 3, Royal Offices, Mogotio Road, Nairobi, PO 6578-00200, Kenya",
  },
];

export const blogCategoryTitle: { title: string; value: string }[] = [
  {
    title: "All",
    value: "all",
  },
  {
    title: "Category 1",
    value: "category-1",
  },
  {
    title: "Category 2",
    value: "category-2",
  },
  {
    title: "Category 3",
    value: "category-3",
  },
];

export const blogCategoryContent = [
  {
    value: "all",
    contents: [
      {
        category: "all",
        id: 1,
        categoryTitle: "Lorem ipsum dolor sit amet, consect adipiscing elit?",
        image:
          "https://utfs.io/f/ZowmNmBHF7rVbWDCKXkH2jDYzO9VfQms1UPwlxZdI8GBNqX7",
      },
      {
        category: "all",
        id: 2,
        categoryTitle: "Lorem ipsum dolor sit amet, consect adipiscing elit?",
        image:
          "https://utfs.io/f/ZowmNmBHF7rVbWDCKXkH2jDYzO9VfQms1UPwlxZdI8GBNqX7",
      },
      {
        category: "all",
        id: 3,
        categoryTitle: "Lorem ipsum dolor sit amet, consect adipiscing elit?",
        image:
          "https://utfs.io/f/ZowmNmBHF7rVbWDCKXkH2jDYzO9VfQms1UPwlxZdI8GBNqX7",
      },
      {
        category: "all",
        id: 4,
        categoryTitle: "Lorem ipsum dolor sit amet, consect adipiscing elit?",
        image:
          "https://utfs.io/f/ZowmNmBHF7rVbWDCKXkH2jDYzO9VfQms1UPwlxZdI8GBNqX7",
      },
    ],
  },
  {
    value: "category-1",
    contents: [
      {
        category: "category-1",
        id: 5,
        categoryTitle: "Lorem ipsum dolor sit amet, consect adipiscing elit?",
        image:
          "https://utfs.io/f/ZowmNmBHF7rVbWDCKXkH2jDYzO9VfQms1UPwlxZdI8GBNqX7",
      },
      {
        category: "category-1",
        id: 6,
        categoryTitle: "Lorem ipsum dolor sit amet, consect adipiscing elit?",
        image:
          "https://utfs.io/f/ZowmNmBHF7rVbWDCKXkH2jDYzO9VfQms1UPwlxZdI8GBNqX7",
      },
      {
        category: "category-1",
        id: 7,
        categoryTitle: "Lorem ipsum dolor sit amet, consect adipiscing elit?",
        image:
          "https://utfs.io/f/ZowmNmBHF7rVbWDCKXkH2jDYzO9VfQms1UPwlxZdI8GBNqX7",
      },
      {
        category: "category-1",
        id: 8,
        categoryTitle: "Lorem ipsum dolor sit amet, consect adipiscing elit?",
        image:
          "https://utfs.io/f/ZowmNmBHF7rVbWDCKXkH2jDYzO9VfQms1UPwlxZdI8GBNqX7",
      },
    ],
  },
  {
    value: "category-2",
    contents: [
      {
        category: "category-2",
        id: 9,
        categoryTitle: "Lorem ipsum dolor sit amet, consect adipiscing elit?",
        image:
          "https://utfs.io/f/ZowmNmBHF7rVbWDCKXkH2jDYzO9VfQms1UPwlxZdI8GBNqX7",
      },
      {
        category: "category-2",
        id: 10,
        categoryTitle: "Lorem ipsum dolor sit amet, consect adipiscing elit?",
        image:
          "https://utfs.io/f/ZowmNmBHF7rVbWDCKXkH2jDYzO9VfQms1UPwlxZdI8GBNqX7",
      },
      {
        category: "category-2",
        id: 11,
        categoryTitle: "Lorem ipsum dolor sit amet, consect adipiscing elit?",
        image:
          "https://utfs.io/f/ZowmNmBHF7rVbWDCKXkH2jDYzO9VfQms1UPwlxZdI8GBNqX7",
      },
      {
        category: "category-2",
        id: 12,
        categoryTitle: "Lorem ipsum dolor sit amet, consect adipiscing elit?",
        image:
          "https://utfs.io/f/ZowmNmBHF7rVbWDCKXkH2jDYzO9VfQms1UPwlxZdI8GBNqX7",
      },
    ],
  },
  {
    value: "category-3",
    contents: [
      {
        category: "category-3",
        id: 13,
        categoryTitle: "Lorem ipsum dolor sit amet, consect adipiscing elit?",
        image:
          "https://utfs.io/f/ZowmNmBHF7rVbWDCKXkH2jDYzO9VfQms1UPwlxZdI8GBNqX7",
      },
      {
        category: "category-3",
        id: 14,
        categoryTitle: "Lorem ipsum dolor sit amet, consect adipiscing elit?",
        image:
          "https://utfs.io/f/ZowmNmBHF7rVbWDCKXkH2jDYzO9VfQms1UPwlxZdI8GBNqX7",
      },
      {
        category: "category-3",
        id: 15,
        categoryTitle: "Lorem ipsum dolor sit amet, consect adipiscing elit?",
        image:
          "https://utfs.io/f/ZowmNmBHF7rVbWDCKXkH2jDYzO9VfQms1UPwlxZdI8GBNqX7",
      },
      {
        category: "category-3",
        id: 16,
        categoryTitle: "Lorem ipsum dolor sit amet, consect adipiscing elit?",
        image:
          "https://utfs.io/f/ZowmNmBHF7rVbWDCKXkH2jDYzO9VfQms1UPwlxZdI8GBNqX7",
      },
    ],
  },
];

export const contentLists: NavItem[] = [
  {
    title: "Blogs",
    href: "/dashboard/blog",
    subItems: [
      { title: "Add Blog", href: "/dashboard/blog/", type: "button" },
      { title: "All Blogs", href: "/dashboard/blog/" },
    ],
  },
  {
    title: "Work",
    href: "/dashboard/work",
    subItems: [
      { title: "Add Work", href: "/dashboard/work/", type: "button" },
      { title: "All Work", href: "/dashboard/work/" },
    ],
  },
  {
    title: "People",
    href: "/dashboard/people",
    subItems: [
      { title: "Add People", href: "/dashboard/people/", type: "button" },
      { title: "People List", href: "/dashboard/people/" },
    ],
  },
];

export const ourProjects: OurProjectsType = [
  {
    type: "Insights for the future readiness",
    subTitle: "Cultural Fore-sighting with business implications",
    location: "Chennai",
  },
  {
    type: "Insights Centered Strategy",
    subTitle: "Cultural Fore-sighting with business implications One",
    location: "Chennai",
  },
  {
    type: "Insights Centered Strategy",
    subTitle: "Cultural Fore-sighting with business implications Two",
    location: "Chennai",
  },
  {
    type: "Insights Centered Strategy",
    subTitle: "Cultural Fore-sighting with business implications Three",
    location: "Chennai",
  },
  {
    type: "Insights Centered Programmes",
    subTitle: "Cultural Fore-sighting with business implications Four",
    location: "Chennai",
  },
  {
    type: "Insights Centered Programmes",
    subTitle: "Cultural Fore-sighting with business implications Five",
    location: "Chennai",
  },
  {
    type: "Insights Centered Programmes",
    subTitle: "Cultural Fore-sighting with business implications Six",
    location: "Chennai",
  },
];

export const workType: string[] = [
  "Insight for future readiness",
  "Insight centered strategy",
  "Insight centered programs",
];
export const workSubType: string[] = [
  "Cultural Fore-sighting with business implications",
  "Business strategy and organisation design",
  "Brand and Innovation",
  "New business opportunities",
  "Corporate brand and business",
  "Value chain redesign",
  "Innovation & Brand property Creation",
  "Efficiency, Productivity & Quality",
  "Capability, Culture & Internal Engagement",
];

export const ourSolutionLevelsData = [
  {
    text: "Cosmos Strategy",
    subText: "Premier",
    solution: "Solutions",
    hoverText:
      "Client Specific Solutions led by Consultants ahead of the industry curve",
  },
  {
    text: "Cosmos Strategy",
    subText: "Professional",
    solution: "Solutions",
    hoverText: "Client Specific Solutions led by Industry class Consultants",
  },

  {
    text: "Cosmos Strategy",
    subText: "Elemental",
    solution: "Solutions",
    hoverText: "Client Specific Solutions led by Yound & Energetic Consultants",
  },

  {
    text: "Cosmos Strategy",
    subText: "Atelier",
    solution: "Experiences",
    hoverText: "Group bootcamps and seminars for Client",
  },
];

export const IpSuitesBlz = [
  {
    ipBrand: "B3BC-Flows",
    scope: "Business Model Value Flows",
    moniker: "B3BC-Flows",
  },
  {
    ipBrand: "I-Spiral",
    scope: "External 360-degree Insights",
    moniker: "I-Spiral.Mkt.360Sight",
  },
  {
    ipBrand: "I-Spiral-Xct",
    scope: "External BD Insights",
    moniker: "I-Spiral-BD.Mkt.360Sight",
  },
  {
    ipBrand: "D-Spiral-Xct",
    scope: "Insights Evaluation",
    moniker: "D-Spiral.Mkt.360Sight",
  },
  {
    ipBrand: "OrgAware",
    scope: "Business Self Awareness",
    moniker: "OrgAware.Ntrpys.360Sight",
  },
  {
    ipBrand: "Passion Diamond",
    scope: "Empathy - Passions of People",
    moniker: "PassionDiamond.Mpth",
  },
  {
    ipBrand: "Sublime",
    scope: "Empathy - Semiotic Understanding",
    moniker: "Sublime.Mpth",
  },
  {
    ipBrand: "GrwthPrymd",
    scope: "Share of Growth Pyramid",
    moniker: "GrwthPyrmd",
  },
  {
    ipBrand: "Induct",
    scope: "Inductive Reasoning & Synthesis",
    moniker: "Induct",
  },
  {
    ipBrand: "Insight-Matrix",
    scope: "Insight Definition",
    moniker: "Insight-Matrix",
  },
];

export const ourDomainSpiral = [
  "Enterprise",
  "Business",
  "Brand",
  "Brand",
  "Marketing",
  "Marketing",
  "Innovation",
  "Innovation",
  "Human Capital",
  "Human Resources",
  "Sales",
  "Sales, Business Development & Distribution",
  "Finance",
  "Financial Management, Management Accountancy",
  "Operations",
  "Operations & Supply Chain",
  "Synthesis",
  "Data Analytics, Synthesis & Reasoning",
  "Tech",
  "Technology",
  "Digital",
  "Digital & Social",
  "Design",

  "Design",
];
