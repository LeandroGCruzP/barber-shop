'use client'

import Form from 'next/form'
import Link from 'next/link'
import { useState } from 'react'
import { Divider } from '~/components/Divider'
import { Header } from '~/components/Header'
import LinkIcon from '~/components/icons/link-icon '
import { Routes } from '~/const/routes-const'

export default function Register() {
  const [inputType, setInputType] = useState<'password' | 'text'>('password')

  function onSubmit(event: FormData) {
    const data = {
      email: event.get('email'),
      password: event.get('password'),
      repeatPassword: event.get('repeat-password'),
      username: event.get('username'),
    }

    alert(data.email)
  }

  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col">
      <Header linkBack={Routes.LANDING} />

      <section className="flex flex-1 flex-col gap-8">
        <div className="m-auto flex w-full max-w-lg flex-col justify-start gap-2 px-3">
          <h1 className="text-5xl font-bold">Register</h1>

          <p className="text-2xl">Create an account</p>
        </div>

        <Form
          action={(e) => onSubmit(e)}
          className="m-auto flex w-full max-w-lg flex-col gap-8"
        >
          <div className="flex flex-col gap-4">
            <input
              name="username"
              placeholder="Username"
              // required
              autoFocus
              className="flex h-16 items-center justify-center rounded-full border-2 border-secondary bg-background-hover px-8 text-2xl text-white outline-none transition text-shadow hover:brightness-125 focus:brightness-125"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              // required
              className="flex h-16 items-center justify-center rounded-full border-2 border-secondary bg-background-hover px-8 text-2xl text-white outline-none transition text-shadow hover:brightness-125 focus:brightness-125"
            />
            <input
              name="password"
              type={inputType}
              placeholder="Password"
              // required
              className="flex h-16 items-center justify-center rounded-full border-2 border-secondary bg-background-hover px-8 text-2xl text-white outline-none transition text-shadow hover:brightness-125 focus:brightness-125"
              onFocus={() => setInputType('text')}
              onBlur={() => setInputType('password')}
            />
            <input
              name="repeat-password"
              type={inputType}
              placeholder="Repeat Password"
              // required
              className="flex h-16 items-center justify-center rounded-full border-2 border-secondary bg-background-hover px-8 text-2xl text-white outline-none transition text-shadow hover:brightness-125 focus:brightness-125"
              onFocus={() => setInputType('text')}
              onBlur={() => setInputType('password')}
            />
          </div>

          <button
            type="submit"
            className="flex h-16 items-center justify-center rounded-full border-2 border-primary bg-primary px-16 text-2xl font-semibold text-white outline-none transition text-shadow hover:brightness-90 focus:brightness-90"
          >
            Create Account
          </button>
        </Form>

        <Divider />
      </section>

      <footer className="flex flex-col items-center justify-center pt-8">
        <p className="text-lg">Already have an account</p>
        <Link
          href={Routes.LOGIN}
          className="group flex items-center gap-1 text-lg font-semibold outline-none transition hover:brightness-125 focus:brightness-125"
        >
          Login
          <LinkIcon
            width={15}
            height={15}
            fill="white"
            className="group-hover:animate-bounce group-focus:animate-bounce"
          />
        </Link>
      </footer>
    </main>
  )
}
