import { cn } from "@/lib/utils";
import React from "react";

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

const Title = ({ children, className }: TextProps) => {
  return (
    <div
      className={cn(
        "text-2xl font-bold text-shop_dark_green capitalize tracking-wide font-sans",
        className
      )}
    >
      {children}
    </div>
  );
};

const SubTitle = ({ children, className }: TextProps) => {
  return (
    <div className={cn("font-semibold text-gray-900 font-sans", className)}>
      {children}
    </div>
  );
};

const SubText = ({ children, className }: TextProps) => {
  return <p className={cn("text-gray-600 text-sm", className)}>{children}</p>;
};

export { Title, SubTitle, SubText };
