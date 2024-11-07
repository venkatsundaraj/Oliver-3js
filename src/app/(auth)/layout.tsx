import React, { FC } from "react";
import Navbar from "@/app/_components/navbar";
import { marketingConfig } from "@/config/marketing";
import Footer from "@/app/_components/footer";
import { Toaster } from "@/app/_components/ui/toaster";

interface layoutProps {
  children: React.ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
  return (
    <main className="min-h-screen w-screen bg-background">
      <Navbar items={marketingConfig} />
      {children}
      <Footer />
      <Toaster />
    </main>
  );
};

export default layout;
