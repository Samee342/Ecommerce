"use client";
import { getOrders } from "@/app/api/orders";
import { getProductsCount } from "@/app/api/products";
import { getAllUsers } from "@/app/api/users";
import React, { useEffect, useState } from "react";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { CiBoxList } from "react-icons/ci";
import {
  ORDER_MANAGEMENT_ROUTE,
  PRODUCT_MANAGEMENT_ROUTE,
  USER_MANAGEMENT_ROUTE,
} from "@/app/constants/routes";
import Link from "next/link";

const Card = () => {
  const [products, setProducts] = useState();
  const [users, setUsers] = useState();
  const [orders, setOrders] = useState();

  const AllData = async () => {
    try {
      const products = await getProductsCount();
      setProducts(products.data);

      const orders = await getOrders();
      setOrders(orders.data.length);
      const users = await getAllUsers();
      setUsers(users.data.length);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    AllData();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-5 p-5 mt-8 mb-5  md-h-35">
      <Link href={PRODUCT_MANAGEMENT_ROUTE}>
        <div className="flex flex-col items-center gap-4 bg-green-200 hover:bg-green-300 rounded-lg shadow-md px-8 py-5">
          <MdProductionQuantityLimits className="text-4xl text-primary font-bold" />
          <h3 className="text-3xl mb-3 text-slate-800 font-bold">
            Total Products
          </h3>
          <p className="text-slate-900 font-extrabold">{products}</p>
        </div>
      </Link>
      <Link href={USER_MANAGEMENT_ROUTE}>
        <div className="flex flex-col items-center gap-4 bg-green-200  hover:bg-green-300 rounded-lg shadow-md px-8 py-5">
          <FaUserPlus className="text-4xl text-blue-700 font-bold" />
          <h3 className="text-3xl mb-3 text-slate-800 font-bold">
            Total Users
          </h3>
          <p className="text-slate-900 font-extrabold">{users}</p>
        </div>
      </Link>

      <Link href={ORDER_MANAGEMENT_ROUTE}>
        <div className="flex flex-col items-center gap-4 bg-green-200 hover:bg-green-300 rounded-lg shadow-md px-8 py-5">
          <CiBoxList className="text-4xl text-yellow-700 font-bold" />
          <h3 className="text-3xl mb-3 text-slate-800 font-bold">
            Total Orders
          </h3>
          <p className="text-slate-900 font-extrabold">{orders}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
