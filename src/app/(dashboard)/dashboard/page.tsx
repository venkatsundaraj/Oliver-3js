import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <main className="bg-background h-screen w-full flex items-center justify-center">
      <h1 className="text-foreground font-heading text-secondary_heading">
        Kindly Navigate through the links.
      </h1>
    </main>
  );
};

export default page;
