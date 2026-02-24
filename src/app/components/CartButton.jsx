"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";

const CartButton = () => {
  const router = useRouter();

  const { products } = useSelector((state) => state.cart);

  return (
    <button onClick={() => router.push("/products/cart")}>
      <span className="absolute top-6 right-32 text-white bg-red-500 text-[0.75rem] rounded-full h-4 w-4">
        {products.length}
      </span>
      <MdAddShoppingCart />
    </button>
  );
};

export default CartButton;
