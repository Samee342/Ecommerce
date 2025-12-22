"use client";
import Link from "next/link";
import { LOGIN_ROUTE } from "../constants/routes";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/auth/authSlice";
import { useRouter } from "next/navigation";

const AuthMenu = () => {
  const { user, error } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const router = useRouter();

  function logout() {
    dispatch(logoutUser());
    router.push(LOGIN_ROUTE);
  }
  if (user)
    return (
      <button
        onClick={logout}
        className="border-2 rounded-2xl p-2 border-secondary text-primary hover:bg-primary transition hover:text-white"
      >
        Logout
      </button>
    );
  return (
    <Link
      href={LOGIN_ROUTE}
      className="border-2 rounded-2xl p-2 border-secondary text-primary hover:bg-primary transition hover:text-white"
    >
      login
    </Link>
  );
};

export default AuthMenu;
