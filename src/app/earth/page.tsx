import dynamic from "next/dynamic"
import { FC } from "react"

interface pageProps {}

const Earth = dynamic(() => import("@/app/_components/earth"), {
  loading: () => <p>Loading...</p>,
})

const page: FC<pageProps> = ({}) => {
  return <Earth />
}

export default page
