"use client"

import { Canvas } from "@react-three/fiber"
import dynamic from "next/dynamic"
import { FC } from "react"

interface pageProps {}

const Model = dynamic(() => import("@/app/_components/model"), {
  loading: () => <p>Loading</p>,
  ssr: false,
})

const page: FC<pageProps> = ({}) => {
  return <Model />
}

export default page
