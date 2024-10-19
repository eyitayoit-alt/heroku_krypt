"use client";
import React from "react";
import { InputField,SubmitButton } from "./input";
import Link from "next/link";


const ForgotPassword:React.FC = ()=>{
    
    return (
        <div className="w-full max-w-md m-auto mt-4 p-6">
            <p className="text-center font-bold mb-4">Forgot password</p>
            <form className="bg-white shadow-md rounded border-2 px-8 py-6">
            <p className="text-justify font-normal mb-4 leading-4">Enter the email address registered with your account to receive a password reset link</p>
                <InputField label="Email" id="email" type="text" placeholder="" />
                <SubmitButton label="Submit"  />
                <p className="text-left text-gray-700 text-base">
                    Did not get an email? <Link href=" " className="text-blue-500">Resend Email</Link>
                </p>
            </form>
        </div>
    );
}

export default ForgotPassword;