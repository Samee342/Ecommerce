"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";

const CartButton = () => {
  const router = useRouter();
  const { products } = useSelector((state) => state.cart);

  return (
    <button
      onClick={() => router.push("/products/cart")}
      className="relative p-2 md:p-3 text-2xl md:text-3xl text-gray-800 dark:text-white hover:text-primary transition-colors"
    >
      {/* Badge */}
      {products.length > 0 && (
        <span className="absolute -top-1 -right-1 md:-top-2 md:-right-2 flex items-center justify-center bg-red-500 text-white text-[0.65rem] md:text-[0.75rem] font-bold rounded-full h-4 w-4 md:h-5 md:w-5">
          {products.length}
        </span>
      )}

      {/* Cart Icon */}
      <MdAddShoppingCart className="w-6 h-6 md:w-7 md:h-7" />
    </button>
  );
};

export default CartButton;
