'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '~/components/Button'

export default function Landing() {
  return (
    <main className="flex flex-col min-h-[calc(100vh-4rem)]">
      <section className="flex flex-col gap-8 flex-1">
        <div className="flex justify-center m-auto">
          <motion.div layoutId="splash-image">
            <Image
              src="/splash-icon.svg"
              width={250}
              height={250}
              alt="profile image"
            />
          </motion.div>
        </div>

        <main className="flex flex-col gap-8 w-full max-w-lg m-auto">
          {/* <Link
            href={Routes.LOGIN}
            className="font-semibold px-16 h-16 bg-primary border-2 border-primary rounded-full text-2xl flex items-center justify-center hover:brightness-90 focus:brightness-90 transition text-white text-shadow-md"
          >
            Login
          </Link> */}

          {/* <Link
            href={Routes.REGISTER}
            className="font-semibold px-16 h-16 border-2 border-secondary rounded-full text-2xl flex items-center justify-center hover:brightness-125 focus:brightness-125 transition text-white text-shadow-md outline-none"
          >
            Create Account
          </Link> */}

          <Button>Login</Button>
          <Button variant="outline">Create Account</Button>
        </main>
      </section>
    </main>
  )
}
