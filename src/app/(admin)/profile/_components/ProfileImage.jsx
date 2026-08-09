import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import Image from "next/image";
import { updateProfileImage } from "@/app/api/users";
import { useDispatch } from "react-redux";
import { updateUser } from "@/app/redux/auth/authSlice";
import { toast } from "react-toastify";
import Spinner from "@/app/components/Spinner";

const ProfileImage = ({ user }) => {
  const [profileImage, setProfileImage] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  function updateImage() {
    setLoading(true);
    const formdata = new FormData();

    formdata.append("Image", profileImage);

    updateProfileImage(user._id, formdata)
      .then((response) => {
        dispatch(updateUser(response.data.profileImageURL));
        console.log(response);
        setProfileImage(null);
      })
      .catch((error) => {
        toast.error(error.response.data, { autoClose: 1500 });
      })
      .finally(setLoading(false));
  }

  return (
    <div className="flex flex-col  md:flex-row items-center gap-5">
      {user?.profileImageURL ? (
        <Image
          src={user.profileImageURL}
          alt="no image"
          height={64}
          width={64}
          className="h-10 w-10 rounded-full object-cover border border-gray-200 p-1"
        />
      ) : (
        <FaUser className="h-16 p-3 w-16 rounded-full bg-gray-200 text-gray-700" />
      )}

      <div className="flex flex-col md:flex-row items-start gap-2">
        <input
          type="file"
          accept=".png,.jpg,.jpeg"
          required
          className="border border-gray-300 hover:text-blue-700 rounded-md px-1 py-2"
          onChange={(e) => {
            const file = e.target.files[0];
            setProfileImage(file);
          }}
        />
        <button
          onClick={updateImage}
          className="bg-primary text-white py-1 px-4 rounded-md w-full md:w-max flex items-center gap-2"
        >
          Update Image
          {loading && <Spinner className="h-4 w-4 fill-primary" />}
        </button>
      </div>
    </div>
  );
};

export default ProfileImage;
