'use client'

import { Divider } from "~/components/Divider"
import { Header } from "~/components/Header"
import { SimpleCardService } from "~/components/SimpleCardService"
import { useCart } from "~/hooks/CartContext"

export default function Cart() {
  const { cart, total } = useCart()

  const hasItemsInCart = cart.length > 0

  return (
    <main className="flex flex-col min-h-[calc(100vh-4rem)]">
      <Header />

      <section className="flex flex-col gap-8 flex-1">
        {!hasItemsInCart ? (
          <p className="m-auto">Your cart is empty</p>
        ) : (
          <div className="mt-8 flex flex-col justify-between flex-1">
            <div className="flex flex-col gap-8">
              {cart.map((item) => (
                <SimpleCardService
                  key={`${item.id} - ${item.name}`}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                />
              ))}
            </div>

            <div className="flex flex-col gap-8">
              <Divider />

              <div className="flex justify-between text-xl w-full">
                <p>R$</p>
                <p>{total.toFixed(2)}</p>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  )
}

