"use client";
import { MdAddShoppingCart } from "react-icons/md";
import { addToCart } from "@/app/redux/cart/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
const AddToCart = ({ product }) => {
  const dispatch = useDispatch();

  function addProductToCart() {
    //console.log("clicked");
    delete product.description;

    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart.`, {
      autoClose: 750,
    });
  }

  return (
    <button
      className="text-primary dark:text-secondary"
      onClick={addProductToCart}
    >
      <MdAddShoppingCart />
    </button>
  );
};

export default AddToCart;
