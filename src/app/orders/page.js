"use client";
import React, { useEffect, useState } from "react";
import { getOrdersByUser } from "@/app/api/orders";
import Spinner from "@/app/components/Spinner";
import OrderCard from "./_components/Card";
import {
  ORDER_STATUS_CONFIRMED,
  ORDER_STATUS_DELIEVERED,
  ORDER_STATUS_PENDING,
  ORDER_STATUS_SHIPPED,
} from "@/app/constants/orderstatus.js";
import { useRouter, useSearchParams } from "next/navigation";
import { ORDERS_ROUTE } from "../constants/routes";

const orderStatuses = [
  ORDER_STATUS_CONFIRMED,
  ORDER_STATUS_DELIEVERED,
  ORDER_STATUS_PENDING,
  ORDER_STATUS_SHIPPED,
];

const OrderPage = () => {
  const searchParams = useSearchParams();
  const statusParams = searchParams?.get("status") || ORDER_STATUS_PENDING;
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    console.log("Fetching orders for status:", statusParams);

    setLoading(true); // start loading

    getOrdersByUser(statusParams)
      .then((response) => setOrders(response.data))
      .finally(() => setLoading(false));
  }, [statusParams]);

  if (loading)
    return (
      <div className="py-10 flex justify-center">
        <Spinner className="w-10 h-10 fill-secondary" />
      </div>
    );

  return (
    <section className="py-10 dark:bg-slate-800 dark:text-white">
      <h1 className="text-3xl font-semibold mb-3">Order Items</h1>
      <div className="grid grid-cols-4 my-4 border-b border-gray-200">
        {orderStatuses.map((orderStatus) => (
          <button
            key={orderStatus}
            className={
              orderStatus.toLowerCase() === statusParams?.toLowerCase()
                ? "text-primary bg-primary/10 py-2 rounded"
                : ""
            }
            onClick={() => router.push(`${ORDERS_ROUTE}?status=${orderStatus}`)}
          >
            {orderStatus}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="py-10 flex justify-center">
          <Spinner className="w-10 h-10 fill-secondary" />
        </div>
      ) : orders.length === 0 ? (
        <div className="text-center py-10 text-gray-500">No Order Found</div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {orders.map((order, index) => (
            <OrderCard key={index} order={order} />
          ))}
        </div>
      )}
    </section>
  );
};

export default OrderPage;
