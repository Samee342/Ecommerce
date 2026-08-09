"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { TiArrowLeft } from "react-icons/ti";

const BackButton = () => {
  const router = useRouter();

  function onclickBack() {
    router.back();
  }
  return (
    <button
      className="flex items-center gap-2 mb-4 bg-secondary px-2 py-1.5 rounded  cursor-pointer text-white dark:text-gray-300 "
      onClick={onclickBack}
    >
      <TiArrowLeft />
      <span>Back</span>
    </button>
  );
};

export default BackButton;
