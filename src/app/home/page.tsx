'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '~/components/Button'
import { CardService } from '~/components/CardService'
import { Divider } from '~/components/Divider'
import { Header } from '~/components/Header'
import { Routes } from '~/const/routes-const'

export default function Home() {
  const router = useRouter()

  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col">
      <Header noHasLinkBack linkBack={Routes.HOME} hasCart />

      <section className="flex flex-1 flex-col gap-8">
        <div className="relative -top-4 flex flex-col items-center gap-2">
          <Image
            src="/profile.svg"
            width="200"
            height="200"
            alt="profile image"
          />

          <h1 className="text-5xl">Leandro</h1>
        </div>

        <Divider />

        <CardService
          id="1"
          name="Haircut"
          description="Edges, shapes and some cream for the skin."
          image="/haircut.svg"
          price={50}
        />

        <CardService
          id="2"
          name="Hairwashing"
          description="Edges, shapes and some cream for the skin."
          image="/hairwashing.svg"
          price={15}
          discount={50}
        />

        <CardService
          id="3"
          name="Beard Trimming"
          description="Edges, shapes and some cream for the skin."
          image="/beard_trimming.svg"
          price={40}
        />

        <Button
          onClick={() => router.push(Routes.CALENDAR)}
          ariaLabel="continue button"
        >
          Continue
        </Button>
      </section>
    </main>
  )
}
