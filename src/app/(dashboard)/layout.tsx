import React, { FC } from "react";
import Navbar from "@/app/_components/navbar";
import { marketingConfig } from "@/config/marketing";
import Footer from "@/app/_components/footer";
import { Toaster } from "@/app/_components/ui/toaster";
import Sidebar from "@/app/_components/sidebar";
import { users } from "@/server/db/schema";
import { notFound } from "next/navigation";
import { getCurrentUser } from "@/lib/session";

interface layoutProps {
  children: React.ReactNode;
}

const layout = async ({ children }: layoutProps) => {
  const user = await getCurrentUser();
  if (!user || !user.email) notFound();

  return (
    <main className="min-h-screen w-screen bg-background flex flex-col md:flex-row relative">
      <Sidebar />
      {children}
      <Toaster />
    </main>
  );
};

export default layout;
