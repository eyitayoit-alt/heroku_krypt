import React from "react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
const InputField = ({
  label,
  id,
  type,
  placeholder,
}: {
  label: string;
  id: string;
  type: string;
  placeholder: string;
}) => (
  <div className="flex flex-col mb-2">
    <label htmlFor={id} className="text-gray-500 font-bold">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      className="h-11 w-full p-2 border-2  rounded focus:outline-none"
      required
      placeholder={placeholder}
    />
  </div>
);

const PasswordField = ({
  label,
  id,
  isVisible,
  toggleVisibility,
}: {
  label: string;
  id: string;
  isVisible: boolean;
  toggleVisibility;
}) => {
  return (
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
          <EyeIcon
            className="w-5 h-5 mx-2 cursor-pointer"
            onClick={toggleVisibility}
          />
        ) : (
          <EyeSlashIcon
            className="w-5 h-5 mx-2 cursor-pointer"
            onClick={toggleVisibility}
          />
        )}
      </div>
      <span className="self-end">
                    <Link href="/forgot-password" className="text-blue-500 ">Reset password</Link>
        </span>
    </div>
  );
};
const ButtonIcon = ({
  label,
  icon,
  alt,
}: {
  label: string;
  icon: string;
  alt: string;
}) => {
  return (
    <button
      type="button"
      className="bg-gray-700 w-full h-12 rounded-md mb-2 flex items-center justify-center text-white hover:bg-gray-500"
    >
      <Image src={icon} alt={alt} className="mr-2" /> {label}
    </button>
  );
};

const SubmitButton =({label}:{label:string})=>{
    return(
        <button className="bg-blue-800 w-full h-12 rounded-md mb-4 hover:bg-blue-600 text-white">
            {label}
        </button>
    )

}
const ButtonPrimary =({label, style,src}:{label:string,style:string,src:string})=>{
  return(
      <button className={style}>
         <Link href={`/${src}`}> {label}</Link>
      </button>
  )

}
export { InputField, PasswordField, ButtonIcon, SubmitButton,ButtonPrimary };
