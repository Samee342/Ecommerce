import React, { useState } from "react";
import Modal from "@/app/components/Modal";
import { BsExclamationCircle } from "react-icons/bs";
import { deleteOrder } from "@/app/api/orders";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const DeleteAction = ({ order }) => {
  const [showModal, setshowModal] = useState(false);
  const router = useRouter();

  function removeOrder() {
    deleteOrder(order._id)
      .then(() => {
        toast.success("order deleted successfully", { autoclose: 1500 });
        router.refresh();
      })
      .catch((error) => {
        toast.error(error.response?.data, { autoClose: 1000 });
      })
      .finally(() => {
        setshowModal(false);
      });
  }

  return (
    <>
      <button
        onClick={() => setshowModal(true)}
        className="text-white bg-red-600 hover:bg-red-700 rounded px-4 py-1 text-sm"
      >
        Delete
      </button>
      <Modal
        showModal={showModal}
        setshowModal={setshowModal}
        label={"Are you sure you want to remove this order ?"}
        confirmButton={
          <button
            data-modal-hide="popup-modal"
            type="button"
            icon={
              <BsExclamationCircle className="mx-auto mb-4 text-red-600 w-12 h-12 " />
            }
            onClick={removeOrder}
            className="text-body  bg-red-600 text-white  border border-default-medium  dark:text-red-500 shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 "
          >
            yes!I am sure.
          </button>
        }
      />
    </>
  );
};

export default DeleteAction;
