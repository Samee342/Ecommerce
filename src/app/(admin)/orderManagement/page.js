import React from "react";
import OrderTable from "./_components/table";
const OrderManagementPage = () => {
  return (
    <div className="px-4 mt-10 text:3xl dark:text-white pb-4 font-medium mx-auto max-w-screen-2xl lg:px-12">
      <h1 className="text-4xl dark:text-white font-medium pb-3">
        Order Management
      </h1>
      <OrderTable />
    </div>
  );
};

export default OrderManagementPage;
