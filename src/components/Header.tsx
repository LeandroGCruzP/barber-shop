'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { JSX } from 'react'
import { Routes } from '~/const/routes-const'
import { Cart } from './Cart'
import LinkBackIcon from './icons/link-back-icon'

interface HeaderProps {
  linkBack?: Routes
  hasCart?: boolean
  noHasLinkBack?: boolean
}

export function Header({ noHasLinkBack = false, linkBack, hasCart = false }: HeaderProps) {
  const router = useRouter()

  function renderBackButton(): JSX.Element {
    if (noHasLinkBack) {
      return <div className="h-12" />
    }

    if (linkBack) {
      return (
        <Link
          href={linkBack}
          className="h-12 flex items-center hover:brightness-90 focus:brightness-90 transition outline-none"
          aria-label="Come back to the previous page"
        >
          <LinkBackIcon className="rotate-90" width={35} height={35} />
        </Link>
      )
    }

    return (
      <button
        className="h-12 flex items-center hover:brightness-90 focus:brightness-90 transition outline-none"
        onClick={() => router.back()}
        aria-label="Come back to the previous page"
      >
        <LinkBackIcon className="rotate-90" width={35} height={35} />
      </button>
    )
  }

  return (
    <header className="flex items-center justify-between w-full">
      {renderBackButton()}
      {hasCart && <Cart />}
    </header>
  )
}
