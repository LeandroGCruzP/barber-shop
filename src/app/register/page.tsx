'use client'

import Form from "next/form";
import Link from "next/link";
import { useState } from "react";
import { Divider } from "~/components/Divider";
import LinkBackIcon from "~/components/icons/link-back-icon";
import LinkIcon from "~/components/icons/link-icon ";
import { Routes } from "~/const/routes-const";

export default function Register() {
  const [inputType, setInputType] = useState<'password' | 'text'>("password")

  function onSubmit (event: FormData) {
    const data = {
      username: event.get('username'),
      email: event.get('email'),
      password: event.get('password'),
      repeatPassword: event.get('repeat-password')
    }

    alert(data.email)
  }

  return (
    <div className="bg-background h-screen flex flex-col justify-between py-2 px-4 gap-8">
      <header className="flex flex-col w-full gap-2">
        <Link
          href={Routes.LANDING}
          className="h-10 w-10 bg-background border-2 border-background rounded-full text-2xl flex items-center justify-center hover:brightness-90 focus:brightness-90 transition text-white text-shadow-md outline-none"
        >
          <LinkBackIcon className="rotate-90" width={35} height={35} />
        </Link>

        <div className="flex flex-col justify-start w-full gap-2 px-3 max-w-lg m-auto">
          <h1 className="text-5xl font-bold">
            Sign Up
          </h1>

          <p className="text-2xl">Create an account</p>
        </div>
      </header>

      <main className="px-3 w-full max-w-lg m-auto">
        <Form action={e => onSubmit(e)} className="flex flex-col gap-8  w-full">
          <div className="flex flex-col gap-4">
            <input
              name="username"
              placeholder="Username"
              // required
              autoFocus
              className="px-8 bg-background-hover h-16 border-2 border-secondary rounded-full text-2xl flex items-center justify-center hover:brightness-125 focus:brightness-125 transition text-white text-shadow-md outline-none"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              // required
              className="px-8 bg-background-hover h-16 border-2 border-secondary rounded-full text-2xl flex items-center justify-center hover:brightness-125 focus:brightness-125 transition text-white text-shadow-md outline-none"
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
            <input
              name="repeat-password"
              type={inputType}
              placeholder="Repeat Password"
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
            Continue
          </button>
        </Form>
      </main>

      <footer>
        <Divider />

        <div className="flex flex-col gap-2 justify-center items-center flex-1 p-8">
          <p className="text-lg">Already have an account</p>
          <Link href={Routes.LOGIN} className="text-lg flex items-center gap-1 font-semibold group hover:brightness-125 focus:brightness-125 transition outline-none">
            Login
            <LinkIcon width={15} height={15} fill="white" className="group-hover:animate-bounce group-focus:animate-bounce" />
          </Link>
        </div>
      </footer>
    </div>
  );
}
