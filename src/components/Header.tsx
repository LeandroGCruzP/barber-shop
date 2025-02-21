'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { JSX } from 'react'
import { Routes } from '~/const/routes-const'
import { Cart } from './Cart'
import LinkBackIcon from './icons/link-back-icon'

interface HeaderProps {
  hasCart?: boolean
  linkBack?: Routes
  noHasLinkBack?: boolean
}

export function Header({
  hasCart = false,
  linkBack,
  noHasLinkBack = false,
}: HeaderProps) {
  const router = useRouter()

  function renderBackButton(): JSX.Element {
    if (noHasLinkBack) {
      return <div className="h-12" />
    }

    if (linkBack) {
      return (
        <Link
          href={linkBack}
          className="flex h-12 items-center outline-none transition hover:brightness-90 focus:brightness-90"
          aria-label="Come back to the previous page"
        >
          <LinkBackIcon className="rotate-90" width={35} height={35} />
        </Link>
      )
    }

    return (
      <button
        className="flex h-12 items-center outline-none transition hover:brightness-90 focus:brightness-90"
        onClick={() => router.back()}
        aria-label="Come back to the previous page"
      >
        <LinkBackIcon className="rotate-90" width={35} height={35} />
      </button>
    )
  }

  return (
    <header className="flex w-full items-center justify-between">
      {renderBackButton()}
      {hasCart && <Cart />}
    </header>
  )
}
