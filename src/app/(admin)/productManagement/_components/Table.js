"use client";
import React, { useEffect } from "react";
import { FaCogs, FaPencilAlt, FaPlus, FaUpload } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { format } from "date-fns";
import Image from "next/image";
import placeholder from "@/app/assets/images/placeholder.png";
import Link from "next/link";
import { PRODUCT_MANAGEMENT_ROUTE } from "@/app/constants/routes";
import { useState } from "react";
import DeleteButtonPage from "./DeleteButton";
import { useDispatch, useSelector } from "react-redux";
import { getproducts } from "@/app/api/products";
import Spinner from "@/app/components/Spinner";
import { refreshList } from "@/app/redux/product/productSlice";
import { HiArrowsUpDown } from "react-icons/hi2";

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState(-1);

  const dispatch = useDispatch();
  const refresh = useSelector((state) => state.product.refresh);
  useEffect(() => {
    setLoading(true);
    let query = "";

    if (sortBy)
      query = query + "sort=" + JSON.stringify({ [sortBy]: sortOrder });

    //console.log(query);

    getproducts(query)
      .then((response) => setProducts(response.data))
      .finally(() => {
        setLoading(false);
        dispatch(refreshList(false));
      });
  }, [refresh, dispatch, sortBy, sortOrder]);

  return (
    <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
      <div className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
        <div className="flex items-center flex-1 space-x-4">
          <h5>
            <span className="text-gray-500">All Products:</span>
            <span className="dark:text-white">123456</span>
          </h5>
          <h5>
            <span className="text-gray-500">Total sales:</span>
            <span className="dark:text-white">$88.4k</span>
          </h5>
        </div>
        <div className="flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3">
          <Link
            href={`${PRODUCT_MANAGEMENT_ROUTE}/add`}
            className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-secondary hover:bg-secondary/80  dark:bg-secondary dark:hover:bg-secondary/90"
          >
            <FaPlus className="h-3.5 w-3.5 mr-2" />
            Add new product
          </Link>

          <button
            type="button"
            className="flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            <FaUpload className="w-4 h-4 mr-2" />
            Export
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-3">
                SN
              </th>
              <th
                scope="col"
                className="px-4 py-3"
                onClick={() => {
                  setSortBy("price");
                  setSortOrder(sortOrder == 1 ? -1 : 1);
                }}
              >
                Product
              </th>
              <th
                scope="col"
                className="px-4 py-3"
                onClick={() => {
                  setSortBy("price");
                  setSortOrder(sortOrder == 1 ? -1 : 1);
                }}
              >
                Brand
              </th>
              <th scope="col" className="px-4 py-3">
                Category
              </th>
              <th
                scope="col"
                className="px-4 py-3"
                onClick={() => {
                  setSortBy("price");
                  setSortOrder(sortOrder == 1 ? -1 : 1);
                }}
              >
                Price
              </th>
              <th
                scope="col"
                className="px-4 py-3"
                onClick={() => {
                  setSortBy("stock");
                  setSortOrder(sortOrder == 1 ? -1 : 1);
                }}
              >
                Stock
              </th>
              <th
                //scope="col"
                className="px-4 py-3 "
                onClick={() => {
                  setSortBy("createdAt");
                  setSortOrder(sortOrder == 1 ? -1 : 1);
                }}
              >
                CreatedAt
                <HiArrowsUpDown />
              </th>
              <th scope="col" className="px-4 py-3">
                <FaCogs />
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <td colSpan={8} className="p-8 text-center">
                <div className="py-8 flex justify-center w-full">
                  <Spinner className="w-10 h-10 fill-primary" />
                </div>
              </td>
            ) : (
              products.map((product, index) => (
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
                    <Image
                      height={32}
                      width={32}
                      src={product.imageurls[0] ?? placeholder}
                      alt={product.name}
                      className="w-8 h-8 mr-3 object-cover"
                    />

                    {product.name}
                  </th>
                  <td className="px-4 py-2">
                    <span className="bg-slate-200 text-primary text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                      {product.brand}
                    </span>
                  </td>
                  <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div className="flex items-center">{product.category}</div>
                  </td>
                  <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {product.price}
                  </td>
                  <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {product.stock > 10 ? (
                      <div className="inline-block h-4 w-4 mr-2 bg-green-600 rounded-full" />
                    ) : product.stock > 3 ? (
                      <div className="inline-block h-4 w-4 mr-2 bg-yellow-600 rounded-full" />
                    ) : (
                      <div className="inline-block h-4 w-4 mr-2 bg-red-600 rounded-full" />
                    )}
                    {product.stock}
                  </td>
                  <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div className="flex items-center">
                      <span className="ml-1 text-gray-500 dark:text-gray-400">
                        {format(product.createdAt, "dd MMM,yyyy")}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div className="flex items-center gap-2">
                      <Link
                        href={`${PRODUCT_MANAGEMENT_ROUTE}/edit/${product._id}`}
                      >
                        <FaPencilAlt />
                      </Link>
                      <DeleteButtonPage id={product._id} />
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <nav
        className="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0"
        aria-label="Table navigation"
      >
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Showing
          <span className="font-semibold text-gray-900 dark:text-white">
            1-10
          </span>
          of
          <span className="font-semibold text-gray-900 dark:text-white">
            1000
          </span>
        </span>
        <ul className="inline-flex items-stretch -space-x-px">
          <li>
            <a
              href="#"
              className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Previous</span>
              <BiLeftArrowAlt className="w-5 h-5" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              className="z-10 flex items-center justify-center px-3 py-2 text-sm leading-tight border text-primary bg-primary-50 border-primary-300 hover:bg-primary hover:text-primary dark:border-gray-700 dark:bg-gray-700 dark:text-white"
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              ...
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              100
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Next</span>
              <BiRightArrowAlt className="w-5 h-5" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ProductTable;
