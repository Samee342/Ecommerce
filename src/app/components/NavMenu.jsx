"use client";
import React from "react";
import navLink from "@/app/constants/navLink";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavMenu = () => {
  const pathname = usePathname();
  return (
    <div>
      <nav className="hidden md:flex gap-4">
        {navLink.map((navLink) => {
          const isactive =
            pathname === navLink.route ||
            (navLink.route !== "/" && pathname.startsWith(navLink.route));

          return (
            <Link
              key={navLink.route}
              href={navLink.route}
              className={`hover:text-primary text-sm" ${
                isactive ? "text-secondary" : ""
              }`}
            >
              {navLink.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default NavMenu;
