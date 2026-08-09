import React, { useState } from "react";
import Modal from "@/app/components/Modal";
import { BsBox2 } from "react-icons/bs";
import { FaPencilAlt, FaRegUserCircle } from "react-icons/fa";
import { updateUserRoles } from "@/app/api/users";
import { toast } from "react-toastify";

const Action = ({ id, userRoles }) => {
  const [showModal, setshowModal] = useState(false);
  const [roles, setRoles] = useState(userRoles);

  function updateRole(role) {
    let updatedRoles = roles;

    if (updatedRoles.includes(role)) {
      updatedRoles = updatedRoles.filter((item) => item != role);
    } else {
      updatedRoles.push(role);
    }
    setRoles(updatedRoles);
  }

  function updateRole() {
    updateUserRoles(id, { roles })
      .then(() => {
        toast.success(`user updated successfully`, { autoClose: 1500 });
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
          <FaRegUserCircle className="text-4xl text-blue-500  rounded-md h-12 w-12 mx-auto mb-4" />
        }
        showModal={showModal}
        setshowModal={setshowModal}
        label={"Update user Roles"}
        info={
          <div className="pb-5 flex items-center justify-center gap-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="admin"
                className="m-1"
                default={roles.includes("ADMIN")}
                onClick={() => updateRole("ADMIN")}
              />
              <label htmlFor="admin">ADMIN</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="merchant"
                className="mr-1"
                default={roles.includes("MERCHANT")}
                onClick={() => updateRole("MERCHANT")}
              />
              <label htmlFor="merchant">MERCHANT</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="user"
                className="mr-1"
                default={roles.includes("USER")}
                onClick={() => updateRole("USER")}
                disabled
              />
              <label htmlFor="user">USER</label>
            </div>
          </div>
        }
        confirmAction={
          <button
            onClick={updateRole}
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
