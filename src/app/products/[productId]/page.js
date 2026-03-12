import React from "react";

async function getproductbyId(productId) {
  const res = await fetch(`http://localhost:5000/api/products/${productId}`);
  console.log("Status:", res.status);

  const text = await res.text();
  console.log("Response:", text);

  return JSON.parse(text);
}

const Productdetailpage = async ({ params, searchParams }) => {
  const { productId } = await params; // ✅ FIX
  console.log("productId:", productId);
  const query = searchParams;

  const product = await getproductbyId(productId);

  return (
    <div>
      <h1 className="text-3xl text-red-800"> product detail:{productId}</h1>
      <ul>
        <li>Name:{product?.name}</li>
        <li>Description:{product?.description}</li>
        <li>Brand:{product?.brand}</li>
      </ul>
    </div>
  );
};

export default Productdetailpage;
