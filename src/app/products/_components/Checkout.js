import { createOrder } from "@/app/api/orders";
import Spinner from "@/app/components/Spinner";
import { ORDERS_ROUTE } from "@/app/constants/routes";
import { clearCart } from "@/app/redux/cart/cartSlice";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Checkout = ({ products, totalPrice }) => {
  const [loading, setLoading] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const router = useRouter();
  const dispatch = useDispatch();

  function checkoutOrder() {
    setLoading(true);
    createOrder({
      orderItems: products.map((product) => ({
        product: product._id,
        quantity: product.quantity,
      })),
      totalPrice,
      shippingAddress: user.address,
    })
      .then(() => {
        (toast.success("order created successfully"), { autoclose: 1500 });
        router.push(ORDERS_ROUTE);
        dispatch(clearCart());
      })
      .catch((error) => toast.error(error.response.data), { autoclose: 1500 })
      .finally(() => setLoading(false));
  }
  return (
    <button
      onClick={checkoutOrder}
      className="bg-secondary text-white px-4 py-1 rounded  border-black hover:bg-secondary/90 disabled:bg-secondary/80 disabled:cursor-not-allowed"
      disabled={loading || products.length === 0}
    >
      Checkout | Rs.{totalPrice}
      {loading && <Spinner className="w-4 h-4 fill-secondary" />}
    </button>
  );
};

export default Checkout;
