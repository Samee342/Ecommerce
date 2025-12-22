"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/userPreference/userPreferenceSlice";
import { AiOutlineSun, AiOutlineMoon } from "react-icons/ai";

const ToogleTheme = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.userPreference);
  return (
    <button
      onClick={() => {
        dispatch(toggleTheme());
      }}
    >
      {theme == "light" ? <AiOutlineSun /> : <AiOutlineMoon />}
    </button>
  );
};

export default ToogleTheme;
