import React from "react";
import Form from "../../_components/Form";
import { getproductById } from "@/app/api/products";
import BackButton from "@/app/components/BackButton";

const editproduct = async ({ params }) => {
  const id = (await params).id;
  const response = await getproductById(id);
  const product = response.data;
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <BackButton />
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Edit a product
        </h2>
        <Form product={product} isEditing={true} />
      </div>
    </section>
  );
};

export default editproduct;
