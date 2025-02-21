import DatePicker from '~/components/DatePicker'
import { Header } from '~/components/Header'
import { Routes } from '~/const/routes-const'

export default function Calendar() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col">
      <Header linkBack={Routes.HOME} hasCart />

      <section className="flex flex-1 flex-col gap-8">
        <span className="m-auto">Calendar</span>

        <DatePicker />
      </section>
    </main>
  )
}
