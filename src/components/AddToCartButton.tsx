'use client'

import toast, { Toaster } from "react-hot-toast"
import { useCart } from "~/hooks/CartContext"
import { MinusIcon } from "./icons/minus-icon"
import { PlusIcon } from "./icons/plus-icon"

interface Item {
  id: string
  name: string
  price: number
}

interface AddToCartButtonProps {
  item: Item
}

export default function AddToCartButton({ item }: AddToCartButtonProps) {
  const { addToCart, removeFromCart, cart } = useCart()

  const hasItemInCart = cart.some(cartItem => cartItem.id === item.id)

  function addItem () {
    toast.success(`${item.name} added to cart!`)

    addToCart({ ...item, quantity: 1 })
  }

  function removeItem () {
    toast.success(`${item.name} added to cart!`)

    removeFromCart(item.id)
  }

  return (
    <>
      {hasItemInCart ? (
        <button
          className="bg-red-500 p-4 rounded-xl"
          onClick={() => removeItem()}
        >
          <MinusIcon width={35} height={35} />
        </button>
      ) : (
        <button
          className="bg-primary p-4 rounded-xl"
          onClick={() => addItem()}
        >
          <PlusIcon width={35} height={35} />
        </button>
      )}

      <Toaster
        position="bottom-right"
      />
    </>
  )
}
