"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import SideBar from "./SideBar";

export default function ClientShell({ children }) {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith("/dashboard");

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {!isDashboard && <Navbar />}
      <main className="flex-1">
        {children}
      </main>
      {!isDashboard && <Footer />}
      {!isDashboard && <WhatsAppButton />}
      {!isDashboard && <SideBar />}
    </div>
  );
}
