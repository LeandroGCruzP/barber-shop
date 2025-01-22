'use client'

import { RefObject, UIEvent, useEffect, useRef, useState } from "react"

export default function DatePicker() {
  const currentDay = String(new Date().getDate()).padStart(2, "0")
  const currentMonthIndex = new Date().getMonth()
  const currentYear = new Date().getFullYear()

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  const [selectedMonth, setSelectedMonth] = useState<string>(months[currentMonthIndex])
  const [selectedDay, setSelectedDay] = useState<string>(currentDay)
  const [selectedYear, setSelectedYear] = useState<string>(String(currentYear))

  const days = Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, "0"))
  const years = Array.from({ length: 10 }, (_, i) => `${currentYear - i}`)

  const monthRef = useRef<HTMLDivElement | null>(null)
  const dayRef = useRef<HTMLDivElement | null>(null)
  const yearRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (monthRef.current) {
      monthRef.current.scrollTo({ top: currentMonthIndex * 40, behavior: "smooth" })
    }
    if (dayRef.current) {
      dayRef.current.scrollTo({ top: (parseInt(currentDay, 10) - 1) * 40, behavior: "smooth" })
    }
    if (yearRef.current) {
      yearRef.current.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [currentMonthIndex, currentDay])

  const handleScroll = (setter: (value: string) => void, items: string[]) => (event: UIEvent<HTMLDivElement>) => {
    const scrollTop = (event.target as HTMLDivElement).scrollTop
    const index = Math.round(scrollTop / 40) // Each item has 40px height

    if (items[index]) {
      setter(items[index])
    }
  }

  const renderColumn = (items: string[], selected: string, setter: (value: string) => void, ref: RefObject<HTMLDivElement>) => (
    <div
      ref={ref}
      className="overflow-y-scroll text-center h-[160px] pr-2"
      onScroll={handleScroll(setter, items)}
    >
      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <div
            key={item}
            className={`text-lg font-semibold h-10 flex items-center justify-center ${
              selected === item ? "text-white scale-110" : "text-gray-400"
            } transition transform`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <>
      <div className="flex gap-8 items-center justify-center bg-gray-900 p-8 rounded-md">
        {renderColumn(months, selectedMonth, setSelectedMonth, monthRef)}
        {renderColumn(days, selectedDay, setSelectedDay, dayRef)}
        {renderColumn(years, selectedYear, setSelectedYear, yearRef)}
      </div>

      <div className="flex gap-2">
        <span>{selectedDay}</span>
        <span>{selectedMonth}</span>
        <span>{selectedYear}</span>
      </div>
    </>
  )
}
