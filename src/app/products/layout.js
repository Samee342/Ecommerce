import React, { Children } from "react";

const ProductLayout = ({ children }) => {
  return (
    <div className="bg-slate-100 dark:bg-slate-800">
      <div className="container mx-auto px-4 py-5 min-h-screen  dark:bg-slate-800">
        {children}
      </div>
    </div>
  );
};

export default ProductLayout;
