import React, { useEffect, useState } from "react";
import { GrUpdate } from "react-icons/gr";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { getProductsCount } from "@/app/api/products";

const Pagination = ({ page, setPage }) => {
  const [pages, setPages] = useState([]);

  async function getCount() {
    const response = await getProductsCount();

    const totalItem = response.data;
    const totalPage = Math.ceil(totalItem / 3);

    const pageNumbers = [];
    for (let i = 1; i <= totalPage; i++) {
      pageNumbers.push(i.toString());
    }
    setPages(pageNumbers);
  }
  useEffect(() => {
    getCount();
  }, []);
  return (
    <nav
      className="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0"
      aria-label="Table navigation"
    >
      <ul className="inline-flex items-stretch -space-x-px">
        <li>
          <button className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <span className="sr-only">Previous</span>
            <BiLeftArrowAlt className="w-5 h-5" />
          </button>
        </li>
        {pages.map((page) => (
          <li key={page}>
            <button className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              {page}
            </button>
          </li>
        ))}

        <li>
          <button className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <span className="sr-only">Next</span>
            <BiRightArrowAlt className="w-5 h-5" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
