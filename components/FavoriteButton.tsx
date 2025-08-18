import { Product } from "@/sanity.types";
import { Heart } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props {
  showProduct?: boolean;
  product?: Product | null | undefined;
}

const FavoriteButton = ({ showProduct = false, product }: Props) => {
  return (
    <>
      {!showProduct ? (
        <Link href={"/wishlist"} className="relative">
          <Heart className="w-5 h-5 hover:text-shop_light_green hoverEffect" />
          <span className="absolute -top-1.5 -right-2 bg-shop_dark_green p-2 h-3.5 w-3.5 text-white text-xs font-semibold flex items-center justify-center rounded-full">
            0
          </span>
        </Link>
      ) : (
        <button className="group relative hover:text-shop_light_green border border-shop_light_green/80 hover:border-shop_light_green p-1.5 rounded-sm hoverEffect">
          <Heart className="w-5 h-5 text-shop_light_green/80 group-hover:text-shop_light_green mt-.5 hoverEffect" />
        </button>
      )}
    </>
  );
};

export default FavoriteButton;
