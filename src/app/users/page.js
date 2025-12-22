"use client";
import { getAllUsers } from "../api/users";
const userPage = () => {
  getAllUsers()
    .then((response) => console.log(response))
    .catch((error) => console.log(error));

  return <div>User page</div>;
};
export default userPage;
