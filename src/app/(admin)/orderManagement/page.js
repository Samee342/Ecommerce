import React from "react";
import OrderTable from "./_components/table";
const OrderManagementPage = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-3 sm:py-5">
      <div className="px-4 mx-auto max-w-screen-2xl lg:px-12">
        <OrderTable />
      </div>
    </section>
  );
};

export default OrderManagementPage;
