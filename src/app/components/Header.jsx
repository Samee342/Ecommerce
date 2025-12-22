import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import { MdAddShoppingCart } from "react-icons/md";
import AuthMenu from "./AuthMenu";
import ToogleTheme from "./ToogleTheme";

const Header = () => {
  return (
    <header className="shadow sticky top-0 bg-[white]">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center">
          <Logo />

          <NavMenu />
          <div className="flex items-center gap-3">
            <MdAddShoppingCart />
            <ToogleTheme />
            <AuthMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
