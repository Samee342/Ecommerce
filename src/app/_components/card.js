import React from "react";
import Image from "next/image";
import product from "../products/page.js";
import { MdAddShoppingCart } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import placeholder from "@/app/assets/images/placeholder.png";
import Link from "next/link";
import { PRODUCTS_ROUTE } from "../constants/routes";

const Productcard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="relative overflow-hidden">
        <Link href={`${PRODUCTS_ROUTE}/${product.id}`}>
          <Image
            src={product.imageurls?.[0] ?? placeholder}
            className="rounded-t-lg w-full h-48 object-cover hover:scale-105 transition-all duration-100"
            alt={product.name}
            height={300}
            width={300}
          />
          <span className="absolute top-2 left-2 bg-red-500 text-white rounded-full text-xs py-3 px-1">
            -20%
          </span>
        </Link>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-xl hover:text-primary">
          <Link href={`${PRODUCTS_ROUTE}/${product._id}`}>{product.name}</Link>
        </h3>
        <div className="text-yellow-500 text-xs py-2 flex items-center">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />

          <span className="text-gray-500 px-1">(265)</span>
        </div>
        <div className="flex justify-between">
          <div>
            <span className="text-primary font-bold mr-1 text-lg">
              ${product.name}
            </span>
            <span className="line-through text-gray-500 text-sm">
              ${product.price}
            </span>
          </div>
          <button className="text-primary">
            <MdAddShoppingCart />
          </button>
        </div>
      </div>
    </div>

    // <div className="shadow rounded-xl border-gray-200 mx-2 py-3 px-2">
    //   <h1 className="text-2xl bold">{product.title}</h1>
    //   <div className="flex items-center gap-2">
    //     <span className="text-sm bg-green-400 px-2 ">{product.brand}</span>
    //     <span className="text-sm bg-blue-500 px-2">{product.category}</span>
    //   </div>
    //   <p className="text-lg">Rs.{product.price}</p>
    //   <button className="border rounded-xl text-md text-white bg-blue-800 shadow py-2 px-2">
    //     ADD to Cart+
    //   </button>
    // </div>
  );
};

export default Productcard;
