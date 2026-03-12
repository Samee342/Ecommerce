import Modal from "@/app/components/Modal";
import { removeFromCart } from "@/app/redux/cart/cartSlice";
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { BsExclamationCircle } from "react-icons/bs";

const RemoveFromCart = ({ product }) => {
  const dispatch = useDispatch();
  const [showModal, setshowModal] = useState(false);

  function remove() {
    dispatch(removeFromCart(product));
    setshowModal(false);
  }

  return (
    <>
      <button
        className="font-medium text-red-600 dark:text-red-500"
        onClick={() => setshowModal(true)}
      >
        <FaTrash />
      </button>
      <Modal
        showModal={showModal}
        setshowModal={setshowModal}
        label={"Are you sure you want to delete this product ?"}
        confirmButton={
          <button
            data-modal-hide="popup-modal"
            type="button"
            icon={
              <BsExclamationCircle className="mx-auto mb-4 text-red-600 w-12 h-12 " />
            }
            onClick={remove}
            className="text-body  bg-red-600 text-white  border border-default-medium  dark:text-red-500 shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 "
          >
            yes!I am sure.
          </button>
        }
      />
    </>
  );
};

export default RemoveFromCart;
