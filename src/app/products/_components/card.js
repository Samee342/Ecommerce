import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import placeholder from "@/app/assets/images/placeholder.png";
import Link from "next/link";
import { PRODUCTS_ROUTE } from "../../constants/routes";
import AddToCart from "./AddToCart";

const Productcard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md dark:bg-slate-800 dark:text-white">
      <div className="relative overflow-hidden">
        <Link href={`${PRODUCTS_ROUTE}/${product._id}`}>
          <Image
            src={product.imageurls?.length ? product.imageurls[0] : placeholder}
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
              {product.price * 0.5}
            </span>
            <span className="line-through text-gray-500 text-sm">
              ${product.price}
            </span>
          </div>
          <AddToCart product={product} />
        </div>
      </div>
    </div>
  );
};

export default Productcard;
