import React from "react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";

// Type definitions for the component props
interface InputFieldProps {
  label: string;
  id: string;
  type: string;
  placeholder: string;
}

interface PasswordFieldProps {
  label: string;
  id: string;
  isVisible: boolean;
  toggleVisibility: () => void;
}

interface ButtonIconProps {
  label: string;
  icon: string;
  alt: string;
}

interface SubmitButtonProps {
  label: string;
}

interface ButtonPrimaryProps {
  label: string;
  style: string;
  src: string;
}

// InputField component
const InputField: React.FC<InputFieldProps> = ({ label, id, type, placeholder }) => (
  <div className="flex flex-col mb-2">
    <label htmlFor={id} className="text-gray-500 font-bold">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      className="h-11 w-full p-2 border-2 rounded focus:outline-none"
      required
      placeholder={placeholder}
    />
  </div>
);

// PasswordField component
const PasswordField: React.FC<PasswordFieldProps> = ({ label, id, isVisible, toggleVisibility }) => (
  <div className="flex flex-col mb-2">
    <label htmlFor={id} className="text-gray-500 font-bold">
      {label}
    </label>
    <div className="flex items-center border-2 rounded">
      <input
        type={isVisible ? "text" : "password"}
        id={id}
        name={id}
        className="h-11 w-full p-2 rounded focus:outline-none"
        required
        placeholder="*******"
      />
      {isVisible ? (
        <EyeIcon className="w-5 h-5 mx-2 cursor-pointer" onClick={toggleVisibility} />
      ) : (
        <EyeSlashIcon className="w-5 h-5 mx-2 cursor-pointer" onClick={toggleVisibility} />
      )}
    </div>
    <span className="self-end">
      <Link href="/forgot-password" className="text-blue-500">Reset password</Link>
    </span>
  </div>
);

// ButtonIcon component
const ButtonIcon: React.FC<ButtonIconProps> = ({ label, icon, alt }) => (
  <button
    type="button"
    className="bg-gray-700 w-full h-12 rounded-md mb-2 flex items-center justify-center text-white hover:bg-gray-500"
  >
    <Image src={icon} alt={alt} className="mr-2" /> {label}
  </button>
);

// SubmitButton component
const SubmitButton: React.FC<SubmitButtonProps> = ({ label }) => (
  <button className="bg-blue-800 w-full h-12 rounded-md mb-4 hover:bg-blue-600 text-white">
    {label}
  </button>
);

// ButtonPrimary component
const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ label, style, src }) => (
  <button className={style}>
    <Link href={`/${src}`}>{label}</Link>
  </button>
);

// Exporting components
export { InputField, PasswordField, ButtonIcon, SubmitButton, ButtonPrimary };
