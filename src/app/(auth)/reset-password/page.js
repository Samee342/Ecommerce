"use client";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import Button from "@/app/components/Button";
import { LOGIN_ROUTE } from "@/app/constants/routes";
import Link from "next/link";
import { toast } from "react-toastify";
import { resetPassword } from "@/app/api/auth";
import PasswordInput from "../_components/PasswordInput";
import { useSearchParams } from "next/navigation";

const ResetPasswordPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const password = watch("password");

  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();

  const token = searchParams.get("token");
  const userId = searchParams.get("userId");

  function submitForm(data) {
    setLoading(true);
    resetPassword(token, userId, data)
      .then(() => {
        toast.success("Password reset successfully", {
          autoClose: 1500,
        });
        reset();
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
          Reset Password ?
        </h1>
        <form
          className="space-y-4 md:space-y-6"
          onSubmit={handleSubmit(submitForm)}
        >
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
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
          </div>
          <p className="text-red-600 text-sm m-1">{errors.password?.message}</p>
          <div className="mb-5">
            <label
              htmlFor="confirm-password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              confirm password
            </label>
            <PasswordInput
              id="confirmpassword"
              {...register("confirmpassword", {
                // <--- must match everywhere
                required: "Confirm password is required",
                minLength: { value: 6, message: "Password too short" },
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
          </div>
          <p className="text-red-600 text-sm m-1">
            {errors.confirmpassword?.message}
          </p>
          <Button loading={loading} label="submit" />
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Please login to continue
            <Link
              href={LOGIN_ROUTE}
              className="font-medium text-secondary hover:underline  dark:text-secondary"
            >
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
