"use client";

import { Button } from "@/app/_components/button";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";
import { FC } from "react";

interface pageProps {}

const Model = dynamic(() => import("@/app/_components/model"), {
  loading: () => <p>Loading</p>,
  ssr: false,
});

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <Model />

      <section className="w-screen flex items-center justify-center h-screen bg-violet-500">
        <Button>FBL</Button>
      </section>
    </>
  );
};

export default page;
