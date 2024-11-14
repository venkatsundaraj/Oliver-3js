import AddBlog from "@/app/_components/add-blog"
import { FC } from "react"

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <main className="bg-background min-h-screen w-full flex items-center justify-center">
      <AddBlog />
    </main>
  )
}

export default page
