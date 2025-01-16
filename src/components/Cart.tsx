'use client'

import Link from "next/link";
import { Routes } from "~/const/routes-const";
import { useCart } from "~/hooks/CartContext";
import { CartIcon } from "./icons/cart-icon";

export function Cart () {
  const { cart } = useCart()

  const hasItemsInCart = cart.length > 0

  return (
    <Link
      href={Routes.CART}
      className="h-10 w-10 bg-background border-2 border-background rounded-full text-2xl flex items-center justify-center hover:brightness-90 focus:brightness-90 transition text-white text-shadow-md outline-none"
    >
      <div className="relative">
        <CartIcon width={35} height={35} />

        {hasItemsInCart && (
          <div className="absolute w-5 h-5 flex items-center justify-center bottom-0 p-[0.05rem] bg-red-500 rounded-full text-sm font-semibold">
            {cart.length}
          </div>
        )}
      </div>
    </Link>
  )
}
