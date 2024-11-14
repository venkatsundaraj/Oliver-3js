export type SubNavItem = {
  title: string
  href: string
  disabled?: boolean
  type?: string
}

export type NavItem = SubNavItem & {
  subItems: SubNavItem[]
}

export type MainNavItems = NavItem[]

export type locationItem = {
  locationCount: string
  location: string
}

export type contactUsItem = {
  icon: string
  name: string
  link: string
}

export type functionalSpiralItem = { data: string; value: string }

export type OurProjectType = {
  type: string
  subTitle: string
  location: string
}

export type OurProjectsType = OurProjectType[]
