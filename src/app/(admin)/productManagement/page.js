import React from "react";
import ProductTable from "./_components/Table.js";
import { getproducts } from "@/app/api/products";

const ProductManagementPage = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-3 sm:py-5">
      <div className="px-4 mx-auto max-w-screen-2xl lg:px-12">
        <ProductTable />
      </div>
    </section>
  );
};

export default ProductManagementPage;
