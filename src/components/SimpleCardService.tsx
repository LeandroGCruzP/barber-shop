'use client'

import { useCart } from '~/hooks/CartContext'
import { TrashIcon } from './icons/trash-icon'

interface CardServiceProps {
  id: string
  name: string
  price: number
}

export function SimpleCardService({ id, name, price }: CardServiceProps) {
  const { removeFromCart } = useCart()

  return (
    <div className="flex gap-4">
      <div className="relative flex flex-1 items-center gap-4 rounded-2xl bg-slate-100 p-4">
        <div className="flex w-full justify-between gap-1 text-xl text-black">
          <span>{name}</span>
          <span>R$ {price.toFixed(2)}</span>
        </div>
      </div>

      <button
        onClick={() => removeFromCart(id)}
        className="rounded-2xl bg-red-600 p-4 outline-none transition hover:brightness-125 focus:brightness-125"
      >
        <TrashIcon width={27} height={27} />
      </button>
    </div>
  )
}
