'use client'

import { motion } from 'framer-motion'
import Form from 'next/form'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '~/components/Button'
import { Header } from '~/components/Header'
import { Routes } from '~/const/routes-const'

export default function Login() {
  const router = useRouter()

  function onSubmit(event: FormData) {
    const data = {
      name: event.get('name'),
      phone: event.get('phone'),
    }

    console.log(`user ${data.name} logged in`)

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
              name="name"
              placeholder="Name"
              // required
              className="flex h-16 items-center justify-center rounded-full border-2 border-secondary bg-background-hover px-8 text-2xl text-white outline-none transition text-shadow hover:brightness-125 focus:brightness-125"
              autoFocus
            />
            <input
              name="phone"
              placeholder="Phone"
              // required
              className="flex h-16 items-center justify-center rounded-full border-2 border-secondary bg-background-hover px-8 text-2xl text-white outline-none transition text-shadow hover:brightness-125 focus:brightness-125"
            />
          </div>

          <Button ariaLabel="sign in label" type="submit">
            Continue
          </Button>
        </Form>
      </section>
    </main>
  )
}
