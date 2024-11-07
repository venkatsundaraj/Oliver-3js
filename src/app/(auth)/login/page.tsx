import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <section className="w-screen flex items-center justify-center h-screen bg-background py-5 ">
        <div className="container flex items-center justify-center"></div>
      </section>
    </>
  );
};

export default page;
