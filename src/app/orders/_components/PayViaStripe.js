import React, { useState } from "react";
import Modal from "@/app/components/Modal";
import { confirmPayment, payViaStripe } from "@/app/api/orders";
import { FaRegCreditCard } from "react-icons/fa";
import { loadStripe } from "@stripe/stripe-js";
import config from "@/app/config";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";
import { ORDERS_ROUTE } from "@/app/constants/routes";
import { ORDER_STATUS_CONFIRMED } from "@/app/constants/orderstatus";
import { toast } from "react-toastify";

const CheckoutForm = ({ order }) => {
  const [showModal, setshowModal] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  async function initPayment() {
    try {
      const response = await payViaStripe(order._id);

      const clientSecret = response.data?.client_secret;

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (result && result.paymentIntent.status == "succeeded") {
        await confirmPayment(order._id, { status: "completed" });
        toast.success("payment success", {
          autoClose: 2500,
          onClose: () => {
            router.push(`${ORDERS_ROUTE}?status=${ORDER_STATUS_CONFIRMED}`);
          },
        });
      }
    } catch {
      toast.error("payment failed", {
        autoClose: 2500,
      });
    } finally {
      setshowModal(false);
    }
  }

  return (
    <>
      <button
        onClick={() => setshowModal(true)}
        className="text-white bg-blue-700 hover:bg-blue-400 rounded-md flex items-center text-sm px-4 py-1 gap-2"
      >
        Card Payment
      </button>
      <Modal
        showModal={showModal}
        setshowModal={setshowModal}
        label={"Card Payment"}
        info={
          <div className="mt-5 mb-10 border p-1 border-gray-300 rounded-md">
            <CardElement />
          </div>
        }
        icon={
          <FaRegCreditCard className="mx-auto mb-4 text-primary w-12 h-12" />
        }
        confirmAction={
          <button
            onClick={initPayment}
            className="py-2.5 px-5 ms-3 text-sm font-medium text-white bg-blue-600 rounded-lg border border-red-200 hover:bg-blue-700"
          >
            Pay
          </button>
        }
      />
    </>
  );
};

const PayViaStripe = ({ order }) => {
  const stripePromise = loadStripe(config.stripeKey);
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm order={order} />
    </Elements>
  );
};

export default PayViaStripe;
