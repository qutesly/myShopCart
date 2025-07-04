import { Heart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const FavoriteButton = () => {
  return (
    <Link href={"/cart"} className="relative">
      <Heart className="w-5 h-5 hover:text-shop_light_green hoverEffect" />
      <span className="absolute -top-1.5 -right-2 bg-shop_dark_green p-2 h-3.5 w-3.5 text-white text-xs font-semibold flex items-center justify-center rounded-full">
        0
      </span>
    </Link>
  )
}

export default FavoriteButton