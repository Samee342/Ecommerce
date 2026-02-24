"use client";
import React, { useState } from "react";
import { MdOutlineFilterAlt } from "react-icons/md";
import FilterDrawer from "./FilterDrawer";

const FilterButton = () => {
  const [showFilter, setshowFilter] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setshowFilter(!showFilter);
        }}
        className="bg-secondary px-4 py-1 gap-1 text-white  rounded-md flex items-center  hover:bg-secondary/80"
      >
        filter <MdOutlineFilterAlt />
      </button>

      <FilterDrawer showFilter={showFilter} setshowFilter={setshowFilter} />
    </>
  );
};

export default FilterButton;
