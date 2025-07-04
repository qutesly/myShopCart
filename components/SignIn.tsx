import { SignInButton } from "@clerk/nextjs";
import React from "react";

const SignIn = () => {
  return (
   <SignInButton mode="modal">
     <button className="text-sm font-semibold text-lightColor hover:text-darkColor hoverEffect cursor-pointer">
      Login
    </button>
   </SignInButton>
  );
};

export default SignIn;
