"use client";
import { useForm } from "react-hook-form";
import { EMAIL_REGEX } from "@/app/constants/regex";
import Link from "next/link";
import { HOME_ROUTE, REGISTER_ROUTE } from "@/app/constants/routes";
import { login } from "@/app/api/auth";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import PasswordInput from "../_components/PasswordInput";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/app/redux/auth/authAction";
import { useEffect } from "react";
import Spinner from "@/app/components/Spinner";
import Button from "@/app/components/Button";
const loginpage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  const dispatch = useDispatch();
  const { user, error, loading } = useSelector((state) => state.auth);

  function submitForm(data) {
    dispatch(loginUser(data));
  }
  useEffect(() => {
    if (error) {
      toast.error(error, {
        autoClose: 1000,
      });
      return;
    }
    if (user) router.push(HOME_ROUTE);
  }, [user, error, router]);
  return (
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Sign in to your account
      </h1>
      <form
        className="space-y-4 md:space-y-6"
        onSubmit={handleSubmit(submitForm)}
      >
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue dark:focus:border-blue"
            placeholder="name@company.com"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: EMAIL_REGEX,
                message: "Invalid email address",
              },
            })}
          />
          <p className="text-red-600 text-sm m-1">{errors.email?.message}</p>
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <PasswordInput
            id="password"
            {...register("password", {
              required: "Password is required",

              minLength: {
                value: 6,
                message: "Password length must be greater than 6",
              },
            })}
          />

          <p className="text-red-500 text-sm m-1">{errors.password?.message}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="remember"
                className="text-gray-500 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
          </div>
          <Link
            href="#"
            className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Forgot password?
          </Link>
        </div>
        <Button loading={loading} label="Sign in" />
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Don’t have an account yet?{" "}
          <Link
            href={REGISTER_ROUTE}
            className="font-medium text-primary hover:underline dark:text-primary"
          >
            Sign up
          </Link>
        </p>
      </form>
    </div>
    //    </div>
    //    </section>
  );
};
export default loginpage;
