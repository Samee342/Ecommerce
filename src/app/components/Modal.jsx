"use client";
import React from "react";
import { IoMdClose } from "react-icons/io";

const Modal = ({
  showModal,
  setshowModal,
  label,
  icon,
  confirmButton,
  info,
  confirmAction,
}) => {
  function closeModal() {
    setshowModal(false);
  }

  return (
    <div className={showModal ? "" : "hidden"}>
      <button className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
        Toggle modal
      </button>
      <div
        id="popup-modal"
        tabIndex={-1}
        className="  fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full min-h-screen"
      >
        <div className="bg-black fixed top-0 left-0 right-0 bottom-0 opacity-20"></div>

        <div className="relative min-w-md bg-white border border-gray-300 rounded-base shadow-sm p-4 md:p-6">
          <button
            className="absolute top-3 end-2.5 text-body bg-transparent hover:bg-neutral-tertiary hover:text-heading rounded-base text-sm w-9 h-9 ms-auto inline-flex justify-center items-center"
            onClick={closeModal}
          >
            <IoMdClose className="w-5 h-5" />
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-4 md:p-5 text-center">
            {icon}
            <h3 className="mb-6 text-body">{label}</h3>
            {info}
            <div className="flex items-center space-x-4 justify-center">
              {confirmButton}
              {confirmAction}

              <button
                onClick={closeModal}
                className="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
              >
                No, cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
