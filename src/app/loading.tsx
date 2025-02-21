import Image from 'next/image'

export default function Loading() {
  return (
    <main className="flex h-[calc(100vh-4rem)] items-center justify-center">
      <Image
        src="/splash-icon.svg"
        width="150"
        height="150"
        alt="profile image"
        className="animate-bounce"
      />
    </main>
  )
}
