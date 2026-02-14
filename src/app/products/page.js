import Productcard from "../_components/card";
import { getproducts } from "../api/products";

const Products = async () => {
  const response = await getproducts();

  const products = response.data;
  //console.log(response);
  return (
    <>
      <h1 className="text-2xl font-bold py-5 mb-5">Popular Products</h1>
      <div className="min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {products.map((product) => (
            <Productcard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Products;
