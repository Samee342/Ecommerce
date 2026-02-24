"use client";
import { PRODUCTS_ROUTE } from "@/app/constants/routes";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { useSearchParams } from "next/navigation";

const SearchBar = () => {
  const [productName, setproductName] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();

  function searchProducts(e) {
    if (e.key != "Enter") return;

    const params = new URLSearchParams(searchParams.toString());
    params.set("name", productName);
    router.push(`?${params.toString()}`);
  }
  function clearSearch() {
    setproductName("");

    router.push(PRODUCTS_ROUTE);
  }

  return (
    <div className="relative">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <FaMagnifyingGlass className="w-4 h-4 text-gray-500 dark:text-gray-200 text-body" />
      </div>
      <input
        type="search"
        id="search"
        className="block w-full p-2 ps-10 text-sm  text-gray-600  border border-gray-300 bg-gray-100 rounded-base  shadow-xs "
        placeholder="Search"
        onChange={(e) => setproductName(e.target.value)}
        onKeyDown={searchProducts}
        value={productName}
      />
      <div className="absolute top-0 right-3">
        {productName != "" && (
          <button className="text-red-500 w-4 h-4 p-1" onClick={clearSearch}>
            <MdClose />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
