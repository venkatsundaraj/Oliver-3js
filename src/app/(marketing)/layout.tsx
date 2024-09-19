import React, { FC } from "react"
import Navbar from "@/app/_components/navbar"
import { marketingConfig } from "@/config/marketing"

interface layoutProps {
  children: React.ReactNode
}

const layout: FC<layoutProps> = ({ children }) => {
  return (
    <main className="min-h-screen w-screen bg-background">
      <Navbar items={marketingConfig} />
      {children}
    </main>
  )
}

export default layout
