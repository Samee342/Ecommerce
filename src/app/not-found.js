import { HOME_ROUTE } from "@/app/constants/routes";
import Link from "next/link";
import React from "react";

const notfound = () => {
  return (
    <div className="flex items-center justify-center flex-col h-[85vh]">
      <h2 className="text-8xl text-red-500 font-bold">
        4<span className="text-9xl text-red-500">0</span>4
      </h2>
      <h2 className="text-4xl">not found</h2>

      <Link
        href={HOME_ROUTE}
        className="text-blue-300 text-4xl hover:underline"
      >
        GO BACK TO HOME PAGE
      </Link>
    </div>
  );
};

export default notfound;
