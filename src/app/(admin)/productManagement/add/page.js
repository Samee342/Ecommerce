import React from "react";
import Form from "../_components/Form";
import BackButton from "@/app/components/BackButton";

const addProduct = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <BackButton />
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Add a new product
        </h2>
        <Form />
      </div>
    </section>
  );
};

export default addProduct;
