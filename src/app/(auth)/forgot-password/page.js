"use client";
import { useForm } from "react-hook-form";
import { EMAIL_REGEX } from "@/app/constants/regex";
import React, { useState } from "react";
import Button from "@/app/components/Button";
import { forgotPassword } from "@/app/api/auth";
import { LOGIN_ROUTE } from "@/app/constants/routes";
import Link from "next/link";
import { toast } from "react-toastify";

const ForgetpasswordPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  function submitForm(data) {
    setLoading(true);
    forgotPassword(data)
      .then(() => {
        toast.success("Reset Password link sent successfully", {
          autoClose: 1500,
        });
      })
      .catch((error) => {
        toast.error(error.response?.data, { autoClose1500 });
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div>
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Forgot Password ?
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
                  I agree to all Terms and Condition
                </label>
              </div>
            </div>
          </div>
          {/* <button type="submit">Sign in</button> */}

          <Button loading={loading} label="submit" />
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Please login to continue
            <Link
              href={LOGIN_ROUTE}
              className="font-medium text-primary hover:underline dark:text-primary"
            >
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgetpasswordPage;
