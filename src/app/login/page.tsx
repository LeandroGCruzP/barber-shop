'use client'

import { motion } from 'framer-motion'
import Form from 'next/form'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Button } from '~/components/Button'
import { Header } from '~/components/Header'
import { Routes } from '~/const/routes-const'

export default function Login() {
  const router = useRouter()

  const [inputType, setInputType] = useState<'password' | 'text'>('password')

  function onSubmit(event: FormData) {
    const data = {
      email: event.get('email'),
      password: event.get('password'),
    }

    console.log(`user ${data.email} logged in`)

    router.push('/home')
  }

  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col">
      <Header linkBack={Routes.LANDING} />

      <section className="flex flex-1 flex-col gap-8">
        <div className="-top-4 flex justify-center">
          <motion.div layoutId="splash-image">
            <Image
              src="/splash-icon.svg"
              width={200}
              height={200}
              alt="profile image"
            />
          </motion.div>
        </div>

        <Form
          action={(e) => onSubmit(e)}
          className="m-auto flex w-full max-w-lg flex-col gap-8"
        >
          <div className="flex flex-col gap-4">
            <input
              name="email"
              type="email"
              placeholder="Email"
              // required
              className="flex h-16 items-center justify-center rounded-full border-2 border-secondary bg-background-hover px-8 text-2xl text-white outline-none transition text-shadow-md hover:brightness-125 focus:brightness-125"
              autoFocus
            />
            <input
              name="password"
              type={inputType}
              placeholder="Password"
              // required
              className="flex h-16 items-center justify-center rounded-full border-2 border-secondary bg-background-hover px-8 text-2xl text-white outline-none transition text-shadow-md hover:brightness-125 focus:brightness-125"
              onFocus={() => setInputType('text')}
              onBlur={() => setInputType('password')}
            />
          </div>

          <button
            type="submit"
            className="flex h-16 items-center justify-center rounded-full border-2 border-primary bg-primary px-16 text-2xl font-semibold text-white outline-none transition text-shadow-md hover:brightness-90 focus:brightness-90"
          >
            Sign In
          </button>
          <Button text="Sign In" />
        </Form>
      </section>
    </main>
  )
}
