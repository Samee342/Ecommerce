import React from "react";
import { BsExclamationCircle } from "react-icons/bs";
import Modal from "@/app/components/Modal.jsx";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";

import { deleteproduct } from "@/app/api/products";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { refreshList } from "@/app/redux/product/productSlice";

const DeleteButtonPage = ({ id }) => {
  const [showModal, setshowModal] = useState(false);
  const dispatch = useDispatch();

  function confirmDelete() {
    deleteproduct(id)
      .then(
        () => {
          dispatch(refreshList(true));
          toast.success("product deleted successfully");
        },
        {
          autoClose: 1500,
        },
      )
      .catch((error) => toast.error(error.response?.data), { autoClose: 1500 })
      .finally(() => setshowModal(false));
  }

  return (
    <>
      <button onClick={() => setshowModal(true)} className="text-red-600">
        <FaTrash />
      </button>

      <Modal
        showModal={showModal}
        setshowModal={setshowModal}
        icon={
          <BsExclamationCircle className="mx-auto mb-4 text-red-600 w-12 h-12 " />
        }
        label={"Are you sure you want to delete this product ?"}
        confirmButton={
          <button
            data-modal-hide="popup-modal"
            type="button"
            onClick={confirmDelete}
            className="text-white bg-red-600 box-border border border-red-400 hover:bg-red-700 focus:ring-4 focus:ring-danger-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
          >
            Yes, I&apos;m sure
          </button>
        }
      />
    </>
  );
};

export default DeleteButtonPage;
