import React from "react";
import UsersTable from "./_components/Table";

const UserManagementPage = () => {
  return (
    <div className="px-4 mt-10 mx-auto max-w-screen-2xl text:3xl pb-4 dark:text-white font-medium lg:px-12">
      <h1 className="text-4xl dark:text-white font-medium pb-3">
        User Management
      </h1>
      <UsersTable />
    </div>
  );
};

export default UserManagementPage;
