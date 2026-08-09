import React from "react";
import { FaImage } from "react-icons/fa";
import Image from "next/image";
import {
  ORDER_STATUS_SHIPPED,
  ORDER_STATUS_CONFIRMED,
  ORDER_STATUS_DELIEVERED,
  ORDER_STATUS_PENDING,
} from "@/app/constants/orderstatus";
import DeleteAction from "./DeleteAction";
import CashOnDelievery from "./CashOnDelievery";
import PayViaKhalti from "./PayViaKhalti";
import PayViaStripe from "./PayViaStripe";

const OrderStatusBadge = ({ status }) => {
  switch (status) {
    case ORDER_STATUS_CONFIRMED:
      return (
        <span className="bg-blue-400  text-white text-sm font-medium px-2 py-1 rounded">
          {status}
        </span>
      );

    case ORDER_STATUS_DELIEVERED:
      return (
        <span className="bg-blue-400  text-white text-sm font-medium px-2 py-1 rounded">
          {status}
        </span>
      );
    case ORDER_STATUS_SHIPPED:
      return (
        <span className="bg-orange-400   text-white text-sm font-medium px-2 py-1 rounded">
          {status}
        </span>
      );
    default:
      return (
        <span className="bg-red-400   text-white text-sm font-medium px-2 py-1 rounded">
          {status}
        </span>
      );
  }
};

const OrderCard = ({ order }) => {
  return (
    <div className="border border-gray-300 bg-white dark:bg-slate-800 dark:text-white rounded-lg  shadow-md">
      <div className="px-4 py-2">
        <div className="flex items-center justify-between">
          <h3 className="font-medium">OrderNumber:#{order.orderNumber}</h3>
          <OrderStatusBadge status={order.status} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-4">
          {order.orderItems.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-md px-4 py-2 "
            >
              <div className="flex items-center gap-4">
                {item.product?.imageurls ? (
                  <Image
                    src={item.product.imageurls[0]}
                    height={100}
                    width={100}
                    alt="no photo"
                    className="h-18 w-18 object-cover rounded-xl bg-slate-200"
                  />
                ) : (
                  <FaImage />
                )}

                <div>
                  <h4 className="text-lg font-medium text-gray-700 dark:text-white">
                    {item.product?.name}
                  </h4>
                  <p className="text-gray-600 dark:text-white ">
                    Rs.{item.product?.price}*{item.quantity}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 py-4 dark:bg-slate-800 dark:text-white justify-between items-center px-4 md:flex-row md:py-2 bg-gray-100">
        <p className="font-medium">Total Rs.{order.totalPrice}</p>
        {order.status == ORDER_STATUS_PENDING && (
          <div className="flex gap-2">
            <CashOnDelievery order={order} />
            <PayViaKhalti order={order} />
            <PayViaStripe order={order} />
            <DeleteAction order={order} />
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderCard;
