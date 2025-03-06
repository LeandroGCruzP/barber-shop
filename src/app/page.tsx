'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '~/components/Button'
import LinkIcon from '~/components/icons/link-icon '
import { Routes } from '~/const/routes-const'

export default function Landing() {
  const routes = useRouter()

  function redirect(route: Routes) {
    routes.push(route)
  }

  return (
    <main className="flex min-h-[calc(100vh-8rem)] flex-col">
      <section className="flex flex-1 flex-col gap-4">
        <div className="m-auto flex h-[calc(100vh/2)] justify-center">
          <motion.div layoutId="splash-image">
            <Image
              src="/splash-icon.svg"
              width={250}
              height={250}
              alt="profile image"
              className="h-full w-full"
            />
          </motion.div>
        </div>

        <div className="m-auto flex w-full max-w-lg flex-col gap-4">
          <Button
            ariaLabel="login button"
            onClick={() => redirect(Routes.LOGIN)}
          >
            Login
          </Button>

          <Button
            ariaLabel="create account button"
            variant="outline"
            onClick={() => redirect(Routes.REGISTER)}
          >
            Create Account
          </Button>

          <div className="flex justify-center">
            <Link
              href={Routes.WITHOUT_REGISTER}
              className="group flex items-center gap-1 text-lg font-semibold outline-none transition hover:brightness-125 focus:brightness-125"
            >
              Access without register
              <LinkIcon
                width={15}
                height={15}
                fill="white"
                className="group-hover:animate-bounce group-focus:animate-bounce"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
