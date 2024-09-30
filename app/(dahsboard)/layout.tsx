"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Cookies from "js-cookie";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const userType = Cookies.get("userType");
    if (!userType) {
      router.push("/");
    }
  }, [router]);

  const handleLogout = () => {
    Cookies.remove("userType");
    router.push("/");
  };

  return (
    <div>
      <nav className="bg-gray-800 text-white p-3">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            Multi-User System
          </Link>
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      </nav>
      <main className="container mx-auto mt-8">{children}</main>
    </div>
  );
}
