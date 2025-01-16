import Image from "next/image";

export default function Loading () {
  return (
    <main className="flex items-center justify-center h-screen">
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
