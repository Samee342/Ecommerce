"use client";
import Link from "next/link";
import React from "react";
import { MdSettings } from "react-icons/md";
import { useSelector } from "react-redux";
import Image from "next/image";
import placeholder from "@/app/assets/images/placeholder.png";

const cartPage = () => {
  const { products } = useSelector((state) => state.cart);

  return (
    <section className="py-4 mx-4  bg-white dark:bg-slate-800">
      <h2 className="text-3xl font-medium text-gray-800 dark:text-gray-200 mb-5 ml-2">
        Your cart items
      </h2>
      <div className="relative overflow-x-auto my-3 mx-10 bg-neutral-primary-soft shadow-xs rounded-base border border-default dark:border-white">
        <table className="w-full text-sm text-left rtl:text-right dark:text-white text-body">
          <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
            <tr>
              <th scope="col" className="px-6 py-3 font-medium">
                Product name
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Brand
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Category
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Price
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                <MdSettings />
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr
                key={index}
                className="bg-neutral-primary border-b border-default"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src={
                        product.imageurls?.length
                          ? product.imageurls[0]
                          : placeholder
                      }
                      height={32}
                      width={32}
                      alt="no image"
                      className="h-8 w-8 rounded object-cover"
                    />
                  </div>
                  {product.name}
                </th>
                <td className="px-6 py-4">{product.brand}</td>
                <td className="px-6 py-4">{product.category}</td>
                <td className="px-6 py-4">Rs.{product.price}</td>
                <td className="px-6 py-4">{product.quantity}</td>

                <td className="px-6 py-4">
                  <Link href={"#"}>Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default cartPage;
