import React from "react";
import ProductTable from "./_components/Table.js";

const ProductManagementPage = () => {
  return (
    <div className="px-4 mt-10 mx-auto dark:text-white text:3xl pb-4 font-medium max-w-screen-2xl lg:px-12">
      <h1 className="text-4xl dark:text-white font-medium pb-3">
        Product Management
      </h1>
      <ProductTable />
    </div>
  );
};

export default ProductManagementPage;
