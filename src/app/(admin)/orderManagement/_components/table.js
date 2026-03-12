"use client";
import React, { useEffect } from "react";
import { FaCogs } from "react-icons/fa";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { format } from "date-fns";
import { useState } from "react";
import Spinner from "@/app/components/Spinner";
import { getOrders } from "@/app/api/orders";
import { RxDotFilled } from "react-icons/rx";
import {
  ORDER_STATUS_CONFIRMED,
  ORDER_STATUS_DELIEVERED,
  ORDER_STATUS_PENDING,
  ORDER_STATUS_SHIPPED,
} from "@/app/constants/orderstatus";
import Action from "./Action";

const OrderTable = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState(-1);

  useEffect(() => {
    setLoading(true);
    getOrders()
      .then((response) => setOrders(response.data))
      .finally(() => {
        setLoading(false);
      });
  }, [sortBy, sortOrder]);

  return (
    <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
      <div className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
        <div className="flex items-center flex-1 space-x-4">
          <h5>
            <span className="text-gray-500">All Products:</span>
            <span className="dark:text-white">{orders?.length}</span>
          </h5>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-3">
                SN
              </th>
              <th scope="col" className="px-4 py-3">
                user
              </th>
              <th scope="col" className="px-4 py-3">
                Order Number
              </th>

              <th scope="col" className="px-4 py-3">
                Order items
              </th>

              <th scope="col" className="px-4 py-3">
                Total Price
              </th>
              <th scope="col" className="px-4 py-3">
                Status
              </th>
              <th scope="col" className="px-4 py-3 ">
                CreatedAt
              </th>
              <th scope="col" className="px-4 py-3">
                <FaCogs />
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={8} className="p-8 text-center">
                  <div className="py-8 flex justify-center w-full">
                    <Spinner className="w-10 h-10 fill-primary" />
                  </div>
                </td>
              </tr>
            ) : (
              orders.map((order, index) => (
                <tr
                  key={index}
                  className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <td className="w-4 px-4 py-3">
                    <div className="flex items-center">{index + 1}.</div>
                  </td>
                  <th
                    scope="row"
                    className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {order.user?.name}
                  </th>
                  <td className="px-4 py-2">
                    <span className="bg-slate-200  text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                      {order.orderNumber}
                    </span>
                  </td>
                  <td className="px-4 py-2 font-medium text-gray-900 dark:text-white">
                    <div className="flex flex-col">
                      {order.orderItems?.map((item, index) => (
                        <div key={index} className="flex items-center">
                          <RxDotFilled />
                          <span className="font-medium text-d px-1">
                            {item.product.name}
                          </span>
                          ({item.quantity})
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {order.totalPrice}
                  </td>
                  <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {order.status == ORDER_STATUS_DELIEVERED && (
                      <div className="inline-block h-4 w-4 mr-2 bg-green-500 rounded-full" />
                    )}
                    {order.status == ORDER_STATUS_CONFIRMED && (
                      <div className="inline-block h-4 w-4 mr-2 bg-orange-500 rounded-full" />
                    )}
                    {order.status == ORDER_STATUS_SHIPPED && (
                      <div className="inline-block h-4 w-4 mr-2 bg-blue-700 rounded-full" />
                    )}
                    {order.status == ORDER_STATUS_PENDING && (
                      <div className="inline-block h-4 w-4 mr-2 bg-red-500 rounded-full" />
                    )}
                    {order.status}
                  </td>
                  <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div className="flex items-center">
                      <span className="ml-1 text-gray-500 dark:text-gray-400">
                        {format(order.createdAt, "dd MMM,yyyy")}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <Action id={order._id} orderStatus={order.status} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderTable;
