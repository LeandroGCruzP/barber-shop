'use client'

import { useCart } from "~/hooks/CartContext"
import { TrashIcon } from "./icons/trash-icon"

interface CardServiceProps {
  id: string
  name: string
  price: number
}

export function SimpleCardService ({ id, name, price }: CardServiceProps) {
  const { removeFromCart } = useCart()

  return (
    <div className="flex gap-4">
      <div className="relative flex bg-slate-100 gap-4 items-center rounded-2xl p-4 flex-1">
        <div className="flex justify-between w-full gap-1 text-xl text-black">
          <span>{name}</span>
          <span>R$ {price.toFixed(2)}</span>
        </div>
      </div>

      <button
        onClick={() => removeFromCart(id)}
        className="p-4 bg-red-600 rounded-2xl hover:brightness-125 focus:brightness-125 transition outline-none"
      >
        <TrashIcon width={27} height={27} />
      </button>
    </div>
  )
}
