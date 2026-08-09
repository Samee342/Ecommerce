"use client";

import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const STATUS_COLORS = {
  pending: "#ef4444",
  confirmed: "#f59e0b",
  shipped: "#3b82f6",
  delieverd: "#228B22",
};

const STATUS_NAMES = {
  pending: "Pending",
  confirmed: "Confirmed",
  shipped: "Shipped",
  delieverd: "Delivered",
};

const OrderStatusChart = ({ data = [] }) => {
  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <h2 className="mb-1 text-2xl font-bold text-gray-900 dark:text-white">
        Order Status
      </h2>

      <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
        Distribution of orders by status
      </p>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="count"
              nameKey="status"
              cx="50%"
              cy="50%"
              outerRadius={100}
              stroke="none"
            >
              {data.map((entry) => {
                const status = entry.status?.toLowerCase();

                return (
                  <Cell
                    key={status}
                    fill={STATUS_COLORS[status] || "#9ca3af"}
                    stroke="none"
                  />
                );
              })}
            </Pie>

            <Tooltip />

            <Legend
              verticalAlign="bottom"
              align="center"
              iconType="circle"
              formatter={(value) => {
                const status = value?.toLowerCase();

                return STATUS_NAMES[status] || value;
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default OrderStatusChart;
