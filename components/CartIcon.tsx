"use client";

import useStore from "@/store";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import React from "react";

const CartIcon = () => {
  const { items } = useStore();
  return (
    <Link href={"/cart"} className="relative">
      <ShoppingBag className="w-5 h-5 hover:text-shop_light_green hoverEffect" />
      <span className="absolute -top-1.5 -right-2 bg-shop_dark_green p-2 h-3.5 w-3.5 text-white text-xs font-semibold flex items-center justify-center rounded-full">
        {items?.length ? items?.length : 0}
      </span>
    </Link>
  );
};

export default CartIcon;
