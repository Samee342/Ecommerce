"use client";
import React, { useEffect } from "react";
import { FaCogs } from "react-icons/fa";
import { format } from "date-fns";
import { useState } from "react";
import Spinner from "@/app/components/Spinner";
import { getAllUsers } from "@/app/api/users";
import Action from "./Action";
const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllUsers()
      .then((response) => setUsers(response.data))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
      <div className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
        <div className="flex items-center flex-1 space-x-4">
          <h5>
            <span className="text-gray-500">All Users:</span>
            <span className="dark:text-white">{users?.length}</span>
          </h5>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <td scope="col" className="px-4 py-3">
                SN
              </td>
              <td scope="col" className="px-4 py-3">
                User name
              </td>
              <td scope="col" className="px-4 py-3">
                Email
              </td>

              <td scope="col" className="px-4 py-3">
                Phone
              </td>

              <td scope="col" className="px-4 py-3">
                Roles
              </td>
              <td scope="col" className="px-4 py-3">
                createdAt
              </td>

              <td scope="col" className="px-4 py-3">
                <FaCogs />
              </td>
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
              users.map((user, index) => (
                <tr
                  key={index}
                  className="border-b dark:bg-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <td className="w-4 px-4 py-3">
                    <div className="flex items-center">{index + 1}.</div>
                  </td>
                  <th
                    scope="row"
                    className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {user.name}
                  </th>
                  <td className="px-4 py-2">
                    <span className="  text-sm font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                      {user.email}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="  text-sm font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                      {user.phone}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="  text-sm font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                      {user.roles.map((role) => (
                        <span
                          key={role}
                          className="px-1 ml-1 text-xs bg-secondary/10 text-primary border rounded-md border-secondary/30"
                        >
                          {role}
                        </span>
                      ))}
                    </span>
                  </td>
                  <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div className="flex items-center">
                      <span className="ml-1 text-gray-500 dark:text-gray-400">
                        {format(new Date(user.CreatedAt), "dd MMM, yyyy")}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <Action id={user._id} userRoles={user.roles} />
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

export default UsersTable;
