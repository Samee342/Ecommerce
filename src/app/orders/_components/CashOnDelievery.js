import { updateOrder } from "@/app/api/orders";
import { ORDER_STATUS_CONFIRMED } from "@/app/constants/orderstatus";
import { ORDERS_ROUTE } from "@/app/constants/routes";
import { useRouter } from "next/navigation";
import React from "react";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { toast } from "react-toastify";

const CashOnDelievery = ({ order }) => {
  const router = useRouter();
  function confirmOrder() {
    updateOrder(order._id, {
      status: ORDER_STATUS_CONFIRMED,
    })
      .then(() => {
        toast.success("order confirmed successfully", { autoclose: 1500 });
        router.push(`${ORDERS_ROUTE}?status=${ORDER_STATUS_CONFIRMED}`);
      })
      .catch((error) => {
        toast.error(error.response?.data, { autoClose: 1000 });
      });
  }
  return (
    <button
      onClick={confirmOrder}
      className="bg-green-700 hover:bg-green-600 px-4 flex py-1 text-sm rounded text-white"
    >
      <LiaMoneyBillWaveSolid />
      <p className="px-1 text-sm"> CashOnDelievery</p>
    </button>
  );
};

export default CashOnDelievery;
