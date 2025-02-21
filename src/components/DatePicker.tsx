'use client'

import { RefObject, UIEvent, useEffect, useRef, useState } from 'react'

export default function DatePicker() {
  const currentDay = String(new Date().getDate()).padStart(2, '0')
  const currentMonthIndex = new Date().getMonth()
  const currentYear = new Date().getFullYear()

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  const [selectedMonth, setSelectedMonth] = useState<string>(
    months[currentMonthIndex],
  )
  const [selectedDay, setSelectedDay] = useState<string>(currentDay)
  const [selectedYear, setSelectedYear] = useState<string>(String(currentYear))

  const days = Array.from({ length: 31 }, (_, i) =>
    String(i + 1).padStart(2, '0'),
  )
  const years = Array.from({ length: 10 }, (_, i) => `${currentYear - i}`)

  const monthRef = useRef<HTMLDivElement | null>(null)
  const dayRef = useRef<HTMLDivElement | null>(null)
  const yearRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (monthRef.current) {
      monthRef.current.scrollTo({
        behavior: 'smooth',
        top: currentMonthIndex * 40,
      })
    }
    if (dayRef.current) {
      dayRef.current.scrollTo({
        behavior: 'smooth',
        top: (parseInt(currentDay, 10) - 1) * 40,
      })
    }
    if (yearRef.current) {
      yearRef.current.scrollTo({ behavior: 'smooth', top: 0 })
    }
  }, [currentMonthIndex, currentDay])

  const handleScroll =
    (setter: (value: string) => void, items: string[]) =>
    (event: UIEvent<HTMLDivElement>) => {
      const scrollTop = (event.target as HTMLDivElement).scrollTop
      const index = Math.round(scrollTop / 40) // Each item has 40px height

      if (items[index]) {
        setter(items[index])
      }
    }

  const renderColumn = (
    items: string[],
    selected: string,
    setter: (value: string) => void,
    ref: RefObject<HTMLDivElement>,
  ) => (
    <div
      ref={ref}
      className="h-[160px] overflow-y-scroll pr-2 text-center"
      onScroll={handleScroll(setter, items)}
    >
      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <div
            key={item}
            className={`flex h-10 items-center justify-center text-lg font-semibold ${
              selected === item ? 'scale-110 text-white' : 'text-gray-400'
            } transform transition`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <>
      <div className="flex items-center justify-center gap-8 rounded-md bg-gray-900 p-8">
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
