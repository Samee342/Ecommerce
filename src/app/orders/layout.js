"use client";

import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function OrderLayout({ children }) {
  const { user } = useSelector((state) => state.auth);
  //const router = useRouter();

  if (!user) return null;
  return (
    <div className="bg-slate-100 dark:bg-slate-800">
      <div className="container mx-auto px-4 py-5 min-h-screen  dark:bg-slate-800">
        {children}
      </div>
    </div>
  );
}
