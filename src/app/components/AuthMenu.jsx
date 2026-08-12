"use client";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { FaUser } from "react-icons/fa";
import PopupUser from "./PopupUser";
import { useState } from "react";
import { logoutUser } from "@/app/redux/auth/authSlice";
import { allowededAdminRoles } from "@/app/helpers/auth";

const AuthMenu = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);

  // Check if user is admin
  const isAdmin = allowededAdminRoles(user?.roles);
  // Normal user
  if (!isAdmin) {
    return (
      <button
        onClick={() => dispatch(logoutUser())}
        className="border-2 rounded-xl px-4 py-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition"
      >
        Logout
      </button>
    );
  }

  // Admin
  return (
    <div className="relative">
      <button onClick={() => setShowPopup((prev) => !prev)} className="ml-2">
        {user.profileImageURL ? (
          <Image
            src={user.profileImageURL}
            alt={user.name}
            width={40}
            height={40}
            className="h-10 w-10 border border-slate-400 rounded-full object-cover"
          />
        ) : (
          <FaUser className="h-10 w-10 rounded-full p-2 bg-gray-200 text-gray-700" />
        )}
      </button>

      {showPopup && <PopupUser user={user} setshowPopup={setShowPopup} />}
    </div>
  );
};

export default AuthMenu;
