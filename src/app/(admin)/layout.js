"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { HOME_ROUTE, LOGIN_ROUTE } from "../constants/routes";
import Spinner from "../components/Spinner";
import { allowededAdminRoles } from "../helpers/auth";
import SideBar from "./_components/SideBar";

const AdminLayout = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  const allowdedRoles = allowededAdminRoles(user?.roles);

  const router = useRouter();
  useEffect(() => {
    if (!user) router.push(LOGIN_ROUTE);
    if (!allowdedRoles) router.push(LOGIN_ROUTE);
  });
  if (!user || !allowdedRoles)
    return (
      <div className="flex justify-center py-20">
        <Spinner className="w-12 h-12 mt-2.5 fill-primary" />
      </div>
    );

  return (
    <div className="min-h-screen">
      <SideBar />
      {children}
    </div>
  );
};
export default AdminLayout;
