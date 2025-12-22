import React, { Children } from "react";

const ProductLayout = ({ children }) => {
  return (
    <div className="bg-slate-200">
      <div className="container mx-auto px-4 py-5">{children}</div>
    </div>
  );
};

export default ProductLayout;
