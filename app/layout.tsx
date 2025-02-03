import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PasteIt - Your Ultimate Copy-Paste Manager",
  description: "Store multiple copied text snippets, autofill forms, and reorder your clipboard with drag & drop.",
  icons: {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon512-olPerYhqJhjnS75Ldxk8TwGH3FhZm2.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

