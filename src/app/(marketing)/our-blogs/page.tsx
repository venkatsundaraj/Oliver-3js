import BlogLists from "@/app/_components/blog-lists"
import { FC } from "react"

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      {/* Hero section */}
      <section className="w-screen flex items-center justify-center h-screen bg-background py-16 ">
        <div className="container flex items-center justify-center">
          <h2 className="flex items-center justify-center flex-col">
            <span className="text-extra_paragraph_heading text-foreground font-heading text-center">
              Our
            </span>
            <span className="text-primary-foreground text-center text-secondary_heading font-heading font-bold">
              Views
            </span>
          </h2>
        </div>
      </section>

      {/* Blogs section */}
      <section className="w-screen flex items-center justify-center bg-background py-16 ">
        <div className="container flex items-center justify-center">
          <BlogLists />
        </div>
      </section>
    </>
  )
}

export default page
