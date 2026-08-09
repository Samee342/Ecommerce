"use client";
import React, { useEffect, useState } from "react";
import Card from "./_components.js/Card";
import { getOrderStatusCount, getTopSellingProducts } from "@/app/api/orders";
import Chart from "./_components.js/Chart";
import OrderStatusChart from "./_components.js/OrderStatusChart";

const DashboardPage = () => {
  const [chartData, setChartData] = useState([]);
  const [statusData, setStatusData] = useState([]);

  useEffect(() => {
    const getChartData = async () => {
      const res = await getTopSellingProducts();
      setChartData(res.data.data);
    };
    getChartData();
  }, []);

  useEffect(() => {
    const getStatusData = async () => {
      const response = await getOrderStatusCount();
      setStatusData(response.data.data);
      console.log(response.data.data);
    };
    getStatusData();
  }, []);

  return (
    <div className="px-4 mx-auto max-w-screen-2xl lg:px-12">
      <h1 className="text-4xl dark:text-white font-medium mb-3 mt-10">
        Dashboard
      </h1>
      <Card />
      <div className="grid lg:grid-cols-2 gap-5">
        <Chart data={chartData} />
        <OrderStatusChart data={statusData} />
      </div>
    </div>
  );
};

export default DashboardPage;
