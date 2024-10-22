"use client";
import React, { useState } from "react";
import { InputField, PasswordField,  SubmitButton } from "./input";
import Link from "next/link";
import GoogleIcon from "../images/google.svg";
import { signin } from "../lib/action";
import Image from "next/image";

const SignIn:React.FC=()=>{
    return (
        <div className="mb-4">
      <form
        action={signin}
      >
        <button className="bg-gray-700 w-full h-12 rounded-md mb-2 flex items-center justify-center text-white hover:bg-gray-500" type="submit"><Image src={GoogleIcon} alt="Google Image" /> Signin with Google</button>
      </form>
      </div>
    )
  } 
  
// Login component
const Login: React.FC = () => {
  const [isPasswordVisible, setPasswordVisibility] = useState<boolean>(false);

  const togglePasswordVisibility = (): void => {
    setPasswordVisibility(!isPasswordVisible);
  };

  return (
    <div className="w-full max-w-md m-auto mt-4 p-6">
      <p className="text-center font-bold mb-4">Login</p>
      <div className="px-8 mb-2">
      <SignIn />
      </div>
      <form className="bg-white shadow-md rounded border-2 px-8 py-6 mb-2">
    
        <p className="text-center text-gray-700 text-base">or</p>
        <InputField label="Username" id="username" type="text" placeholder="alex214" />
        <PasswordField
          label="Password"
          id="password"
          isVisible={isPasswordVisible}
          toggleVisibility={togglePasswordVisibility}
        />
        <div className="flex flex-row mb-2 space-x-1.5">
          <input type="checkbox" name="agreement" className="border-2 rounded h-4" />
          <span className="text-base leading-4">Keep me signed in.</span>
        </div>
        <SubmitButton label="Sign in" />
        <p className="text-center text-gray-700 text-base">
          Don&apos;t have an account?{" "}
          <Link href="/Signup" className="text-blue-500">
            Sign up here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
