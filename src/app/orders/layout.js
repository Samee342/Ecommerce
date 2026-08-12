"use client";

import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { LOGIN_ROUTE } from "../constants/routes";
import { useEffect } from "react";

export default function OrderLayout({ children }) {
  const { user } = useSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push(LOGIN_ROUTE);
    }
  }, [user, router]);

  if (!user) {
    return null;
  }
  return (
    <div className="bg-slate-100 dark:bg-slate-800">
      <div className="container mx-auto px-4 py-5 min-h-screen  dark:bg-slate-800">
        {children}
      </div>
    </div>
  );
}
