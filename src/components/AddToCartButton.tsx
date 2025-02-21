'use client'

import toast, { Toaster } from 'react-hot-toast'
import { useCart } from '~/hooks/CartContext'
import { MinusIcon } from './icons/minus-icon'
import { PlusIcon } from './icons/plus-icon'

interface Item {
  id: string
  name: string
  price: number
}

interface AddToCartButtonProps {
  item: Item
}

export default function AddToCartButton({ item }: AddToCartButtonProps) {
  const { addToCart, cart, removeFromCart } = useCart()

  const hasItemInCart = cart.some((cartItem) => cartItem.id === item.id)

  function addItem() {
    toast.success(`${item.name} added to cart!`)

    addToCart({ ...item, quantity: 1 })
  }

  function removeItem() {
    toast.success(`${item.name} added to cart!`)

    removeFromCart(item.id)
  }

  return (
    <>
      {hasItemInCart ? (
        <button
          className="flex flex-1 justify-center rounded-xl bg-red-500 p-2 md:p-4"
          onClick={() => removeItem()}
        >
          <MinusIcon width={35} height={35} />
        </button>
      ) : (
        <button
          className="flex flex-1 justify-center rounded-xl bg-primary p-2 md:p-4"
          onClick={() => addItem()}
        >
          <PlusIcon width={35} height={35} />
        </button>
      )}

      <Toaster position="bottom-right" />
    </>
  )
}
