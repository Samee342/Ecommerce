"use client";
import { createproducts, updateproduct } from "@/app/api/products";
import Button from "@/app/components/Button";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { toast } from "react-toastify";

const ProductForm = ({ product, isEditing = false }) => {
  const [loading, setloading] = useState(false);
  const [localImageUrls, setLocalImageUrls] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    values: product,
  });

  function prepareFromData(data) {
    const formdata = new FormData();

    formdata.append("name", data.name);
    formdata.append("brand", data.brand);
    formdata.append("price", data.price);
    formdata.append("category", data.category);
    formdata.append("stock", data.stock ?? 2);

    if (data.description) formdata.append("description", data.description);
    if (productImages.length > 0) {
      productImages.map((image) => {
        formdata.append("images", image);
      });
    }

    return formdata;
  }

  async function submitFrom(data) {
    setloading(true);
    const input = prepareFromData(data);
    try {
      if (isEditing) {
        await updateproduct(product._id, input);
        toast.success("Product updated successfully", { autoClose: 1500 });
        return;
      }

      await createproducts(input);

      reset();
      toast.success("Product created successfully", { autoClose: 1500 });
      console.log(data);
    } catch (error) {
      toast.error(error.response?.data, { autoClose: 1200 });
    } finally {
      setloading(false);
      setLocalImageUrls([]);
      setProductImages([]);
    }
  }
  return (
    <form onSubmit={handleSubmit(submitFrom)}>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <div className="sm:col-span-2">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-600 focus:border-secondary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-secondary dark:focus:border-secondary"
            placeholder="Type product name"
            {...register("name", { required: "Product name is required" })}
          />
          <p className="text-red-500 text-sm pt-1.5">{errors.name?.message}</p>
        </div>
        <div className="w-full">
          <label
            htmlFor="brand"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Brand
          </label>
          <input
            type="text"
            id="brand"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-600 focus:border-secondary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-secondary dark:focus:border-secondary"
            placeholder="Product brand"
            {...register("brand", { required: "Product brand is required" })}
          />
          <p className="text-red-500 text-sm pt-1.5">{errors.brand?.message}</p>
        </div>
        <div className="w-full">
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-600 focus:border-secondary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-secondary dark:focus:border-secondary"
            placeholder="Rs.2999"
            {...register("price", { required: "Price is required" })}
          />
          <p className="text-red-500 text-sm pt-1.5">{errors.price?.message}</p>
        </div>

        <div className="w-full">
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Category
          </label>
          <input
            type="text"
            id="category"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-600 focus:border-secondary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-secondary dark:focus:border-secondary"
            placeholder="Product category"
            {...register("category", {
              required: "Product category is required",
            })}
          />
          <p className="text-red-500 text-sm pt-1.5">
            {errors.category?.message}
          </p>
        </div>

        <div>
          <label
            htmlFor="stock"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Stock
          </label>
          <input
            type="number"
            id="stock"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-600 focus:border-secondary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-secondary dark:focus:border-secondary"
            placeholder={12}
            {...register("stock")}
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <textarea
            id="description"
            rows={8}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-secondary focus:border-secondary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-secondary dark:focus:border-secondary"
            placeholder="Your description here"
            defaultValue={""}
            {...register("description")}
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="image"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Upload Image
          </label>
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 bg-neutral-secondary-medium border border-dashed border-default-strong rounded-base cursor-pointer hover:bg-neutral-tertiary-medium"
            >
              <div className="flex flex-col items-center justify-center text-body pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h3a3 3 0 0 0 0-6h-.025a5.56 5.56 0 0 0 .025-.5A5.5 5.5 0 0 0 7.207 9.021C7.137 9.017 7.071 9 7 9a4 4 0 1 0 0 8h2.167M12 19v-9m0 0-2 2m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                multiple
                accept=".png,.jpg,.jpeg"
                onChange={(event) => {
                  const files = [];
                  const urls = [];

                  Array.from(event.target.files).map((file) => {
                    files.push(file);
                    urls.push(URL.createObjectURL(file));
                  });
                  setLocalImageUrls(urls);
                  setProductImages(files);
                }}
              />
            </label>
          </div>
        </div>
        {localImageUrls.length > 0 && (
          <div className="flex item-center gap-3 py-3">
            {localImageUrls.map((url, index) => (
              <Image
                key={index}
                height={50}
                width={50}
                alt=""
                src={url}
                className="h-16 w-16 object-cover p-2 bg-slate-300"
              />
            ))}
          </div>
        )}
      </div>
      <Button
        label={isEditing ? "Edit Product" : "Add Product"}
        loading={loading}
        className="inline-flex items-center gap-1 px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-secondary rounded-lg focus:ring-4 focus:ring-secondary-200 dark:focus:ring-secondary-900 hover:bg-primary/50"
      />
    </form>
  );
};

export default ProductForm;
