"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "@/app/redux/auth/authAction";
import Button from "@/app/components/Button";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProfileImage from "./_components/ProfileImage";

const ProfilePage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user, error, loading } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    if (user) {
      reset({
        name: user.name,
        email: user.email,
        phone: user.phone,
        city: user.address?.city,
        province: user.address?.province,
      });
    }
  }, [user, reset]);

  async function submitForm(data) {
    try {
      dispatch(
        updateUserProfile({
          name: data.name,
          phone: data.phone,
          address: {
            city: data.city,
            province: data.province,
          },
        }),
      );
      toast.success("Profile updated successfully!");
    } catch (err) {
      // Show error toast
      toast.error(err?.message || "Failed to update profile.");
    }
  }

  return (
    //<div className=" dark:bg-gray-900">
    <div className="container mx-auto px-4 py-5 max-w-5xl  ">
      <h1 className="text-3xl font-semibold mb-3 text-gray-600 dark:text-white">
        Your Profile
      </h1>
      <div className="p-6 space-y-4 md:space-y-6 rounded-2xl sm:p-8 dark:bg-slate-600 border-gray-200 ">
        <ProfileImage user={user} />
        <form className=" mx-auto " onSubmit={handleSubmit(submitForm)}>
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
              disabled
              className="shadow-xs disabled:bg-gray-200 disabled:text-gray-700 border border-gray-300 text-gray-900 text-sm  block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
              {...register("email")}
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
              className="shadow-xs  border border-gray-300 text-gray-900 text-sm  block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
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
              className="shadow-xs  border border-gray-300 text-gray-900 text-sm  block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
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
              className="shadow-xs  border border-gray-300 text-gray-900 text-sm  block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
              {...register("province", {
                required: "province is required.",
              })}
            >
              <option value="" disabled>
                Select Province
              </option>

              <option value="bagmati">Bagmati</option>
              <option value="gandaki">Gandaki</option>
              <option value="karnali">Karnali</option>
              <option value="lumbini">Lumbini</option>
              <option value="koshi">Koshi</option>
              <option value="madesh">Madesh</option>
              <option value="sudurpaschim">SudurPaschim</option>
            </select>
            <p className="text-red-600 text-sm m-1">
              {errors.province?.message}
            </p>
          </div>

          <Button label="update user" loading={loading} />
        </form>
      </div>
    </div>
    //</div>
  );
};

export default ProfilePage;
