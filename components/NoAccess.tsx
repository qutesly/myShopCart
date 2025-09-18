import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

const NoAccess = ({
  details = "Log in to view your cart items and checkout. Don't miss out on your favorite products.",
}: {
  details?: string;
}) => {
  return (
    <div className="flex items-center justify-center py-12 md:py-32 p-4 bg-gray-100">
      <Card className="w-full max-w-md p-5">
        <CardHeader className="flex flex-col items-center">
          <Logo />
          <CardTitle className="text-2xl font-bold text-center">
            Welcome Back!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center ">{details}</p>
          <SignInButton mode="modal">
            <Button className="w-full">Sign in</Button>
          </SignInButton>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <div className="text-sm text-muted-foreground text-center">Don&rsquo;t have an account?</div>
          <SignUpButton mode="modal">
            <Button variant="outline" className="w-full" size="lg">Create an account</Button>
          </SignUpButton>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NoAccess;
