'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '~/components/Button'
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
        </div>
      </section>
    </main>
  )
}
