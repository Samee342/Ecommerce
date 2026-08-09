import Link from "next/link";
import React from "react";
import {
  DASHBOARD_ROUTE,
  PROFILE_ROUTE,
  LOGIN_ROUTE,
} from "../constants/routes";
import { logoutUser } from "../redux/auth/authSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

const PopupUser = ({ user, setshowPopup }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  function logout() {
    dispatch(logoutUser());
    router.push(LOGIN_ROUTE);
  }

  return (
    <div className="absolute top-0 right-0 ">
      <div
        onClick={() => setshowPopup(false)}
        className="fixed top-0 left-0 h-full w-full bg-black/10 z-10"
      ></div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 min-w-50 flex flex-col items-start gap-1 z-50 relative">
        <div className="text-left">
          <h3 className="font-medium text-sm dark:text-white"> {user.name} </h3>
          <p className="text-xs dark:text-white">{user.email}</p>

          <div className="flex flex-col mt-2 mb-2 gap-2">
            <Link
              href={DASHBOARD_ROUTE}
              className="px-4 py-1 rounded-md dark:bg-gray-700 text-white bg-purple-600 w-full text-left hover:bg-purple-500"
            >
              Admin Panel
            </Link>
            <Link
              href={PROFILE_ROUTE}
              className="px-4 py-1 rounded-md bg-purple-600 dark:bg-gray-700 text-white w-full text-left hover:bg-purple-500"
            >
              Profile
            </Link>
          </div>
          <button
            onClick={logout}
            className="border w-full mt-1 rounded-xl p-1 border-slate-300 hover:bg-primary transition hover:text-white"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupUser;
