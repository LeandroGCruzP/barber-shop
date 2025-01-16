import { Header } from "~/components/Header";
import { Routes } from "~/const/routes-const";

export default function Calendar () {
  return (
    <main className="flex flex-col min-h-[calc(100vh-4rem)]">
      <Header linkBack={Routes.HOME} hasCart />

      <section className="flex flex-col gap-8 flex-1">
        <span className="m-auto">Calendar</span>
      </section>
    </main>
  )
}
