import React, { useState } from "react";
import Modal from "@/app/components/Modal";
import { BsBox2 } from "react-icons/bs";
import { FaPencilAlt } from "react-icons/fa";
import { updateOrder } from "@/app/api/orders";
import { toast } from "react-toastify";
import {
  ORDER_STATUS_CONFIRMED,
  ORDER_STATUS_DELIEVERED,
  ORDER_STATUS_PENDING,
  ORDER_STATUS_SHIPPED,
} from "@/app/constants/orderstatus";

const Action = ({ id, orderStatus }) => {
  const [showModal, setshowModal] = useState(false);
  const [status, setStatus] = useState(orderStatus);

  function updateOrderStatus() {
    updateOrder(id, { status })
      .then(() => {
        toast.success(`Status updated:${status}`, { autoClose: 1500 });
      })
      .catch((error) => {
        toast.error("Status updated failed", { autoClose: 1500 });
      })
      .finally(() => {
        setshowModal(false);
      });
  }

  return (
    <div className="flex items-center gap-2">
      <button onClick={() => setshowModal(true)}>
        <FaPencilAlt />
      </button>
      <Modal
        icon={
          <BsBox2 className="text-4xl text-blue-500  rounded-md h-12 w-12 mx-auto mb-4" />
        }
        showModal={showModal}
        setshowModal={setshowModal}
        label={"Update Order Status"}
        info={
          <div className="pb-5">
            <select
              className="border border-gray-300 rounded-md px-8 py-1"
              onChange={(e) => setStatus(e.target.value)}
              defaultValue={orderStatus}
            >
              <option value={ORDER_STATUS_PENDING}>PENDING</option>
              <option value={ORDER_STATUS_DELIEVERED}>DELIEVERED</option>
              <option value={ORDER_STATUS_SHIPPED}>SHIPPED</option>
              <option value={ORDER_STATUS_CONFIRMED}>CONFIRMED</option>
            </select>
          </div>
        }
        confirmAction={
          <button
            onClick={updateOrderStatus}
            className="bg-green-700 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-green-400"
          >
            Update
          </button>
        }
      />
    </div>
  );
};

export default Action;
