import React from "react";

async function getproductbyId(productId) {
  const res = await fetch(`http://localhost:5000/api/products/${productId}`);

  const text = await res.text();

  return JSON.parse(text);
}

const Productdetailpage = async ({ params, searchParams }) => {
  const { productId } = await params; // ✅ FIX
  const query = searchParams;

  const product = await getproductbyId(productId);

  return (
    <div className="dark:text-white">
      <h1 className="text-3xl text-red-800 mb-5 dark:text-slate-300">
        product detail:{productId}
      </h1>
      <ul>
        <li className="mb-2">Name : {product?.name}</li>
        <li>Brand : {product?.brand}</li>

        <li className="mt-2">Description: {product?.description}</li>
      </ul>
    </div>
  );
};

export default Productdetailpage;
