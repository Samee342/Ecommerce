import React from "react";
import Image from "next/image";
import config from "../config";
import logo from "@/app/assets/images/logo.png";

const Logo = () => {
  const { appName } = config;
  const appNameparts = appName.split(" ");
  return (
    <div className="flex items-center gap-1">
      <Image src={logo} alt="logo" className="w-14 h-14 " />
      <div className="flex items-center font-bold ">
        <span className="text-primary">{appNameparts[0]}</span>
        <span className="text-secondary">{appNameparts[1]}</span>
      </div>
    </div>
  );
};

export default Logo;
