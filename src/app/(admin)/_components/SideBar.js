"use client";
import {
  DASHBOARD_ROUTE,
  ORDER_MANAGEMENT_ROUTE,
  PRODUCT_MANAGEMENT_ROUTE,
  PROFILE_ROUTE,
  USER_MANAGEMENT_ROUTE,
} from "@/app/constants/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const adminMenu = [
  {
    route: DASHBOARD_ROUTE,
    label: "Dashboard",
  },
  {
    route: PRODUCT_MANAGEMENT_ROUTE,
    label: "Product Management",
  },
  {
    route: ORDER_MANAGEMENT_ROUTE,
    label: "Order Management",
  },
  {
    route: USER_MANAGEMENT_ROUTE,
    label: "User Management",
  },
  {
    route: PROFILE_ROUTE,
    label: "Profile ",
  },
];

const SideBar = ({ show, setShow }) => {
  const pathName = usePathname();

  return (
    <div
      className={`hidden lg:block ${show ? "w-62" : "w-12"} bg-white absolute top-18 left-0 h-full z-20 border border-gray-300 dark:bg-gray-700`}
    >
      <button
        onClick={() => setShow(!show)}
        className="ml-3 mt-2 p-2 font-bold text-gray-900 dark:text-white"
      >
        {show ? <FaArrowLeft /> : <FaArrowRight />}
      </button>
      {show && (
        <div className="px-2 py-4 flex flex-col gap-1 ">
          {adminMenu.map((menu) => {
            const isActive = pathName.startsWith(menu.route);
            return (
              <Link
                key={menu.route}
                href={menu.route}
                className={`px-3 py-1  dark:text-white rounded-md ${isActive ? "bg-secondary text-white" : "bg-secondary/10 text-gray-700"} `}
              >
                {menu.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SideBar;
