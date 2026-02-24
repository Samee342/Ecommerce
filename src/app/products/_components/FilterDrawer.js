"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const FilterDrawer = ({ showFilter, setshowFilter }) => {
  const [limit, setLimit] = useState(5);
  const [sort, setSort] = useState(JSON.stringify({ createdAt: 1 }));
  const [minprice, setminPrice] = useState(0);
  const [maxprice, setmaxPrice] = useState(100000000);

  const router = useRouter();

  function setFilter() {
    const params = new URLSearchParams();

    params.set("limit", limit);
    params.set("sort", sort);
    params.set("minprice", minprice);
    params.set("maxprice", maxprice);

    router.push(`?${params.toString()}`);
  }
  return (
    <div className={showFilter ? "block absolute" : "hidden"}>
      <div
        className="fixed top-20 left-0 h-screen w-full bg-black opacity-20 z-10"
        onClick={() => {
          setshowFilter(false);
        }}
      ></div>
      <div className="fixed top-20 left-0 z-20 min-h-screen bg-white px-4 pt-5 min-w-64 shadow">
        <h1 className="text-2xl font-medium">FilterProducts</h1>
        <div className="py-4">
          <div>
            <label
              htmlFor="limit"
              className="block mb-2.5 text-sm font-medium text-heading"
            >
              LIMIT
            </label>
            <select
              id="limit"
              className="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
              onChange={(e) => {
                setLimit(e.target.value);
              }}
            >
              <option value="5">5</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
            </select>
          </div>
        </div>

        <div className="py-3">
          <div>
            <label
              htmlFor="orderBy"
              className="block mb-2.5 text-sm font-medium text-heading"
            >
              order By
            </label>
            <select
              id="orderby"
              className="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
              onChange={(e) => {
                setSort(e.target.value);
              }}
            >
              <option value={JSON.stringify({ createdAt: -1 })}>Latest</option>
              <option value={JSON.stringify({ createdAt: 1 })}>Oldest</option>
              <option value={JSON.stringify({ price: 1 })}>
                Price:Low to High
              </option>
              <option value={JSON.stringify({ price: -1 })}>
                Price:High to Low
              </option>
              <option value={JSON.stringify({ name: 1 })}>Name:A to Z</option>
              <option value={JSON.stringify({ name: -1 })}>Name:z to A</option>
            </select>
          </div>
        </div>

        <h2>PRICE RANGE</h2>

        <div className="py-3">
          <label
            htmlFor="minprice"
            className="block mb-2.5 text-sm font-medium text-heading"
          >
            MINIMUM PRICE
          </label>
          <input
            type="number"
            id="minprice"
            className="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
            onChange={(e) => {
              setminPrice(e.target.value);
            }}
          />
        </div>

        <div className="py-3">
          <label
            htmlFor="maxprice"
            className="block mb-2.5 text-sm font-medium text-heading"
          >
            MAXIMUM PRICE
          </label>
          <input
            type="number"
            id="maxprice"
            className="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
            onChange={(e) => {
              setmaxPrice(e.target.value);
            }}
          />
        </div>

        <div className="py-4">
          <button
            type="button"
            className="text-heading bg-purple-800 box-border border border-transparent font-medium  text-sm px-4 py-2.5 "
            onClick={setFilter}
          >
            Apply Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterDrawer;
