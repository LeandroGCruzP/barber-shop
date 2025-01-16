import { HTMLAttributes } from "react"

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text: string
}

export function Button ({ text, ...rest }: ButtonProps) {
  return (
    <button
      className="rounded-2xl w-full bg-secondary text-2xl text-white font-semibold text-shadow-md px-16 h-16 transition hover:brightness-90 focus:brightness-90 outline-none"
      {...rest}
    >
      {text}
    </button>
  )
}
