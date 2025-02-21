'use client'

import Link from 'next/link'
import { Routes } from '~/const/routes-const'
import { useCart } from '~/hooks/CartContext'
import { CartIcon } from './icons/cart-icon'

export function Cart() {
  const { cart } = useCart()

  const hasItemsInCart = cart.length > 0

  return (
    <Link
      href={Routes.CART}
      className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-background text-2xl text-white outline-none transition text-shadow-md hover:brightness-90 focus:brightness-90"
    >
      <div className="relative">
        <CartIcon width={35} height={35} />

        {hasItemsInCart && (
          <div className="absolute bottom-0 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 p-[0.05rem] text-sm font-semibold">
            {cart.length}
          </div>
        )}
      </div>
    </Link>
  )
}
