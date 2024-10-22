"use client";
import React, { useState, ChangeEvent } from "react";
import { ButtonPrimary } from "./input";

// VerifyEmail component
const VerifyEmail: React.FC = () => {
  const [code, setCode] = useState<string[]>(Array(4).fill(""));

  // Function to handle input change
  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number): void => {
    const { value } = e.target;
    if (/^\d*$/.test(value)) { // Allow only numeric input
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
    }
  };

  return (
    <div className="max-w-xs lg:max-w-sm m-auto mt-6 p-6">
      <p className="text-center font-bold mb-6">Verify Email</p>
      <form className="bg-white shadow-md rounded border-2 px-8 py-8">
        <div className="flex justify-between space-x-2 mb-6">
          {code.map((digit, index) => (
            <input
              key={index}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e, index)}
              className="w-10 h-10 text-center border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          ))}
        </div>
        <ButtonPrimary
          label="Verify Email"
          style="w-full h-12 bg-blue-800 hover:bg-blue-600 text-white font-semibold rounded-md transition duration-300"
          src=""
        />
      </form>
    </div>
  );
};

export default VerifyEmail;
