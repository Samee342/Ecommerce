"use client";

import axios from "axios";
import config from "../config";
const authtoken = localStorage.getItem("authtoken");

async function getAllUsers() {
  return await axios.get(`${config.apiURL}/api/users`, {
    headers: {
      Authorization: `Bearer ${authtoken}`,
    },
  });
}

export { getAllUsers };
