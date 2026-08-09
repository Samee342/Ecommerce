"use client";

import Link from "next/link";
import Image from "next/image";
import { LOGIN_ROUTE } from "../constants/routes";
import { useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";
import PopupUser from "./PopupUser";
import { useState } from "react";

const AuthMenu = () => {
  const { user } = useSelector((state) => state.auth);
  const [showPopup, setShowPopup] = useState(false);

  if (user) {
    return (
      <div className="relative">
        <button onClick={() => setShowPopup((prev) => !prev)} className="ml-2">
          {user.profileImageURL ? (
            <Image
              src={user.profileImageURL}
              alt={user.name}
              width={40}
              height={40}
              className="h-10 w-10  border border-slate-400 rounded-full object-cover "
            />
          ) : (
            <FaUser className="h-10 w-10 rounded-full p-2 bg-gray-200 text-gray-700" />
          )}
        </button>

        {showPopup && <PopupUser user={user} setshowPopup={setShowPopup} />}
      </div>
    );
  }

  return (
    <Link
      href={LOGIN_ROUTE}
      className="border-2 rounded-xl p-2 border-secondary text-primary hover:bg-primary transition hover:text-white"
    >
      Login
    </Link>
  );
};

export default AuthMenu;
