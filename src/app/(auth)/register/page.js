"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { EMAIL_REGEX } from "@/app/constants/regex";
import PasswordInput from "../_components/PasswordInput";
import { useRouter } from "next/navigation";
import { HOME_ROUTE, LOGIN_ROUTE } from "@/app/constants/routes";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "@/app/redux/auth/authAction";
import Button from "@/app/components/Button";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const router = useRouter();
  const { user, error, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  async function submitForm(data) {
    dispatch(
      registerUser({
        name: data.name,
        email: data.email,
        phone: data.phone,
        password: data.password,
        confirmpassword: data.confirmpassword,
        address: {
          city: data.city,
          province: data.province,
        },
      }),
    );

    //   localStorage.setItem("authtoken", response.data?.authtoken);
    // } catch (error)
    // }
  }

  useEffect(() => {
    if (error) {
      toast.error(error, {
        autoClose: 1000,
      });
      return;
    }
    if (user) router.push(HOME_ROUTE);
  }, [user, router, error]);
  return (
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Create your account
      </h1>
      <form className="max-w-sm mx-auto " onSubmit={handleSubmit(submitForm)}>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your name
          </label>
          <input
            type="name"
            id="name"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm  block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
            placeholder="name"
            {...register("name", {
              required: "name is required.",
              pattern: {
                value: "text",
                message: "Invalid name",
              },
            })}
          />
          <p className="text-red-600 text-sm m-1">{errors.name?.message}</p>
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm  block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
            placeholder="name@flowbite.com"
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
        <div className="mb-5">
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            phone Number
          </label>
          <input
            type="phone"
            id="phone"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm  block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
            placeholder="987654302"
            {...register("phone", {
              required: "phone is required.",
              pattern: {
                value: "number",
                message: "Invalid phone number",
              },
            })}
          />
          <p className="text-red-600 text-sm m-1">{errors.phone?.message}</p>
        </div>
        <div className="mb-5">
          <label
            htmlFor="city"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your city
          </label>
          <input
            type="city"
            id="city"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm  block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
            placeholder="koshi"
            {...register("city", {
              required: "city is required.",
            })}
          />
          <p className="text-red-600 text-sm m-1">{errors.city?.message}</p>
        </div>

        <div className="mb-5">
          <label
            htmlFor="province"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Province
          </label>
          <select
            id="province"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm  block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
            {...register("province", {
              required: "province is required.",
            })}
            defaultValue=""
          >
            <option value="" disabled>
              Select Province
            </option>

            <option value="Bagmati">Bagmati</option>
            <option value="Gandaki">Gandaki</option>
            <option value="Karnali">Karnali</option>
            <option value="Lumbini">Lumbini</option>
            <option value="Koshi">Koshi</option>
            <option value="Madesh">Madesh</option>
            <option value="SudurPaschim">SudurPaschim</option>
          </select>
          <p className="text-red-600 text-sm m-1">{errors.province?.message}</p>
        </div>

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
              required: "confirm-Password is required",

              minLength: {
                value: 6,
                message: "Password length must be greater than 6",
              },
              validate: (value) => {
                value === password || "password do not match";
              },
            })}
          />
        </div>
        <p className="text-red-600 text-sm m-1">
          {errors.confirmpassword?.message}
        </p>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              defaultValue
              className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            />
          </div>
          <label
            htmlFor="terms"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the&nbsp;
            <Link
              href="#"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </Link>
          </label>
        </div>
        <Button
          label="Register new account"
          loading={loading}
          className=" gap-1 px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-secondary rounded-lg focus:ring-4 focus:ring-secondary-200 dark:focus:ring-secondary-900 hover:bg-primary/50"
        />
      </form>
    </div>
  );
};

export default Register;
