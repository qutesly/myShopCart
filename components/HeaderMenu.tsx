"use client";

import { headerData } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const HeaderMenu = () => {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex items-center  w-1/3 gap-7 capitalize text-sm font-semibold text-lightColor">
      {headerData.map((item) => (
        <Link
          href={item?.href}
          key={item?.title}
          className={`hover:text-shop_light_green relative group hoverEffect ${
            pathname === item?.href && "text-shop_light_green"
          }`}
        >
          {item?.title}
          <span
            className={`absolute -bottom-0.5 w-0 bg-shop_light_green left-1/2 h-0.5 group-hover:w-1/2 hoverEffect group-hover:left-0 ${
              pathname === item?.href && "w-1/2"
            }`}
          />
          <span
            className={`absolute -bottom-0.5 w-0 bg-shop_light_green right-1/2 h-0.5 group-hover:w-1/2 hoverEffect group-hover:right-0 ${
              pathname === item?.href && "w-1/2"
            }`}
          />
        </Link>
      ))}
    </div>
  );
};

export default HeaderMenu;
