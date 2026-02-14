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
      className="flex items-center gap-2 mb-2  cursor-pointer text-gray-700 dark:text-gray-300 "
      onClick={onclickBack}
    >
      <TiArrowLeft />
      <span>Back</span>
    </button>
  );
};

export default BackButton;
