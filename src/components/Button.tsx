import clsx from 'clsx'
import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  ariaLabel: string
  children: ReactNode
  variant?: 'outline' | 'primary'
}

export function Button({
  ariaLabel,
  children,
  variant = 'primary',
  ...props
}: ButtonProps) {
  const baseStyles =
    'rounded-full w-full text-white text-2xl font-semibold text-shadow px-16 h-16 outline-none whitespace-nowrap transition-all hover:brightness-125 focus:brightness-125'
  const buttonVariants = {
    outline: 'border-2 border-secondary',
    primary: 'bg-primary',
  }

  return (
    <button
      className={clsx(baseStyles, buttonVariants[variant])}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  )
}
