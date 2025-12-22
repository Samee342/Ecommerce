import React from "react";
import Image from "next/image";

import placeholder from "@/app/assets/images/placeholder.png";

const Loadingcard = () => {
  return (
    <div className="bg-white border border-gray-100 px-2 px-3 rounded-xl shadow-md py-3 px-4 m-2">
      <Image
        src={placeholder}
        className="rounded-t-lg w-full h-48 object-cover hover:scale-105 transition-all duration-100"
        alt=""
        height={300}
        width={300}
      />
      <div className="px-4 py-3">
        <div className="w-full bg-gray-700 h-5"></div>
        <div className=" bg-yellow-400 my-2 w-1/3 h-5 "></div>
        <div className="flex items-center  gap-2 rounded m-2">
          <span className=" bg-primary/40 px-3 w-1/2 h-5"></span>
          <span className=" bg-slate-200 px-3 w-1/3 h-5"></span>
        </div>
      </div>
    </div>
  );
};

const Productloader = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      <Loadingcard />
      <Loadingcard />

      <Loadingcard />

      <Loadingcard />

      <Loadingcard />

      <Loadingcard />
    </div>
  );
};

export default Productloader;
