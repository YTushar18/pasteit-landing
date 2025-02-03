import Image from "next/image"
import Link from "next/link"

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon512-olPerYhqJhjnS75Ldxk8TwGH3FhZm2.png"
        alt="PasteIt Logo"
        width={32}
        height={32}
        className="dark:invert"
      />
      <span className="font-bold text-xl">PasteIt</span>
    </Link>
  )
}

