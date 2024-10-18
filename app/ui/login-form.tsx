"use client";
import React, { useState, useRef } from "react";
import { InputField,PasswordField,ButtonIcon,SubmitButton } from "./input";
import Link from "next/link";
import GoogleIcon from "../images/google.svg";

export default function Login() {
    const [isPasswordVisible, setPasswordVisibility] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisibility(!isPasswordVisible);
       
    };

    return (
        <div className="w-full max-w-md m-auto mt-4 p-6">
            <p className="text-center font-bold mb-4">Login</p>
            <form className="bg-white shadow-md rounded border-2 px-8 py-6 mb-2">
               <ButtonIcon label="Sign in with Google" icon={GoogleIcon} alt="Google Icon" />
               <p className="text-center text-gray-700 text-base">
            or
            </p>
                <InputField label="Username" id="username" type="text" placeholder="alex214" />
                
                <PasswordField
                    label="Password"
                    id="password"
                    isVisible={isPasswordVisible}
                    toggleVisibility={togglePasswordVisibility}
                />
                
                <div className="flex flex-row  mb-2 space-x-1.5">
                    <input type="checkbox" name="agreement" className="border-2 rounded h-4" />
                    <span className="text-base leading-4">
                        Keep me signed in.
                    </span>
                    
                </div>
                <SubmitButton label="Sign in"  />
                <p className="text-center text-gray-700 text-base">
                    Don't have an account? <Link href="/Signup" className="text-blue-500">Sign up here</Link>
                </p>
            </form>

        </div>
    );
}

