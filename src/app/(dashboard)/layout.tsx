import React, { FC } from "react";
import Navbar from "@/app/_components/navbar";
import { marketingConfig } from "@/config/marketing";
import Footer from "@/app/_components/footer";
import { Toaster } from "@/app/_components/ui/toaster";
import Sidebar from "@/app/_components/sidebar";

interface layoutProps {
  children: React.ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
  return (
    <main className="min-h-screen w-screen bg-background flex flex-col md:flex-row">
      <Sidebar />
      {children}
      <Toaster />
    </main>
  );
};

export default layout;
