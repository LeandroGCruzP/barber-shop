'use client'

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
}

interface CartContextType {
  addToCart: (item: CartItem) => void
  cart: CartItem[]
  clearCart: () => void
  removeFromCart: (id: string) => void
  total: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart')

    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  function addToCart(item: CartItem): void {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.id === item.id)
      if (existingItem) {
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i,
        )
      }
      return [...prevCart, item]
    })
  }

  function removeFromCart(id: string): void {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
  }

  function clearCart(): void {
    setCart([])
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{ addToCart, cart, clearCart, removeFromCart, total }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) throw new Error('useCart must be used within a CartProvider')

  return context
}
