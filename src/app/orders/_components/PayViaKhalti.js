import React from "react";
import Image from "next/image";
import khaltiIcon from "@/app/assets/images/khalti.png";
import { payViaKhalti } from "@/app/api/orders";
import { toast } from "react-toastify";

const PayViaKhalti = ({ order }) => {
  function initOrderPayment() {
    payViaKhalti(order._id)
      .then((response) => {
        const data = response.data;

        window.location.href = data.payment_url;
      })
      .catch((error) => {
        toast.error(error.response.data, { autoClose: 1500 });
      });
  }

  return (
    <button
      onClick={initOrderPayment}
      className="text-white bg-purple-700 hover:bg-purple-400 rounded-md flex items-center text-sm px-4 py-1 gap-2"
    >
      <Image
        src={khaltiIcon}
        height={50}
        width={100}
        alt=""
        className="h-5 w-auto"
      />
      Khalti
    </button>
  );
};

export default PayViaKhalti;
