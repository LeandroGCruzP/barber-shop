'use client'

import { motion } from 'framer-motion';
import Form from "next/form";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Header } from "~/components/Header";
import { Routes } from "~/const/routes-const";

export default function Login() {
  const router = useRouter()

  const [inputType, setInputType] = useState<'password' | 'text'>("password")

  function onSubmit (event: FormData) {
    const data = {
      email: event.get('email'),
      password: event.get('password')
    }

    alert(data.email)

    router.push('/home')
  }

  return (
    <main className="flex flex-col min-h-[calc(100vh-4rem)]">
      <Header linkBack={Routes.LANDING} />

      <section className="flex flex-col gap-8 flex-1">
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

        <Form action={e => onSubmit(e)} className="flex flex-col gap-8 w-full max-w-lg m-auto">
          <div className="flex flex-col gap-4">
            <input
              name="email"
              type="email"
              placeholder="Email"
              // required
              className="px-8 bg-background-hover h-16 border-2 border-secondary rounded-full text-2xl flex items-center justify-center hover:brightness-125 focus:brightness-125 transition text-white text-shadow-md outline-none"
              autoFocus
            />
            <input
              name="password"
              type={inputType}
              placeholder="Password"
              // required
              className="px-8 bg-background-hover h-16 border-2 border-secondary rounded-full text-2xl flex items-center justify-center hover:brightness-125 focus:brightness-125 transition text-white text-shadow-md outline-none"
              onFocus={() => setInputType("text")}
              onBlur={() => setInputType("password")}
            />
          </div>

          <button
            type="submit"
            className="font-semibold px-16 h-16 bg-primary border-2 border-primary rounded-full text-2xl flex items-center justify-center hover:brightness-90 focus:brightness-90 transition text-white text-shadow-md outline-none"
          >
            Sign In
          </button>
        </Form>
      </section>
    </main>
  );
}
