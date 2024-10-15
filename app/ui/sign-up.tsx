"use client";
import React, { useState, useRef } from "react";
import { InputField,PasswordField, ButtonIcon, SubmitButton } from "./input";
import Link from "next/link";
import GoogleIcon from "../images/google.svg";

export default function SignUp() {
    const [isPasswordVisible, setPasswordVisibility] = useState(false);

    const togglePasswordVisibility = () => {
     
        setPasswordVisibility(!isPasswordVisible);
        
    };
    
    return (
        <div className="w-full max-w-md m-auto mt-4 p-6">
            <p className="text-center font-bold mb-4">Signup</p>
            
            <form className="bg-white shadow-md rounded border-2 px-8 py-6">
               <ButtonIcon label="Sign up with Google" icon={GoogleIcon} alt="Google Icon" />
               <p className="text-center text-gray-700 text-base">
            or
            </p>
                <InputField label="Username" id="username" type="text" placeholder="alex214" />
                <InputField label="Email" id="email" type="email" placeholder="willams@gmail.com" />
                <PasswordField
                    label="Password"
                    id="password"
                    isVisible={isPasswordVisible}
                    toggleVisibility={togglePasswordVisibility}
    
                />
                <InputField
                    label="Confirm Password"
                    id="confirm-password"
                    type="password"
                    placeholder="*******"
                />
                <div className="flex flex-row mb-2 space-x-1.5">
                    <input type="checkbox" name="agreement" className="border-2 rounded h-4" />
                    <span className="text-left text-base leading-4">
                        I confirm that I accept Krypt Terms and Conditions.
                    </span>
                </div>
                <SubmitButton label="Sign up" />
                <p className="text-center text-gray-700 text-base">
                    Have an account already? <Link href="/login" className="text-blue-500">Sign in here</Link>
                </p>
            </form>
        </div>
    );
}

