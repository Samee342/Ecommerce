import Productcard from "./_components/card";
import { getproducts } from "../api/products";
import SearchBar from "./_components/SearchBar";
import FilterButton from "./_components/FilterButton";

const Products = async ({ searchParams }) => {
  const response = await getproducts(await searchParams);

  const products = response.data;
  //console.log(response);
  return (
    <>
      <div className="flex item-center justify-between dark:text-white">
        <h1 className="text-2xl font-bold py-5 mb-5">Popular Products</h1>
        <div className="mb-5 flex items-center justify-between gap-2">
          <SearchBar />
          <FilterButton />
        </div>
      </div>
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
