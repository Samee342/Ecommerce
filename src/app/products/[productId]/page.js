import React from "react";

async function getproductbyId(productId) {
  const res = await fetch(`http://localhost:5000/api/products/${productId}`);
  const product = await res.json();
  return product;
}

const Productdetailpage = async ({ params, searchparams }) => {
  const productId = (await params).productId;
  const query = await searchparams;

  const product = await getproductbyId(productId);

  return (
    <div>
      <h1 className="text-3xl text-red-800"> product detail:{productId}</h1>
      <ul>
        <li>Name:{product?.title}</li>
        <li>Description:{product?.description}</li>
        <li>Brand:{product?.brand}</li>
      </ul>
    </div>
  );
};

export default Productdetailpage;
