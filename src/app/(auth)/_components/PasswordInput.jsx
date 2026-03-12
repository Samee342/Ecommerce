import React, { useState, forwardRef } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const PasswordInput = forwardRef((props, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <input
        ref={ref}
        type={showPassword ? "text" : "password"}
        placeholder="••••••••"
        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue dark:focus:border-blue"
        {...props}
      />
      <button
        type="button"
        className="absolute top-3 right-2 pt-0.5 px-1"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
      </button>
    </div>
  );
});

export default PasswordInput;
