import Image from "next/image";
import Link from "next/link";
import { Routes } from "~/const/routes-const";

export default function Landing() {
  return (
    <div className="bg-background h-screen flex flex-col items-center py-2 px-4 justify-center">
      <Image
        src="/splash-icon.svg"
        width="250"
        height="250"
        alt="profile image"
        className="mb-16 h-1/2"
      />

      <main className="flex flex-col gap-8 px-3 max-w-lg w-full">
        <Link
          href={Routes.LOGIN}
          className="font-semibold px-16 h-16 bg-primary border-2 border-primary rounded-full text-2xl flex items-center justify-center hover:brightness-90 focus:brightness-90 transition text-white text-shadow-md"
        >
          Login
        </Link>

        <Link
          href={Routes.REGISTER}
          className="font-semibold px-16 h-16 border-2 border-secondary rounded-full text-2xl flex items-center justify-center hover:brightness-125 focus:brightness-125 transition text-white text-shadow-md outline-none"
        >
          Signup
        </Link>
      </main>
    </div>
  );
}
