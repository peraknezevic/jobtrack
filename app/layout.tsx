import "./globals.css"

import { Hanken_Grotesk } from "next/font/google"
import type { Metadata } from "next"
import { cn } from "@/lib/utils"

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "JobTrack",
  description: "Keep track of your job applications",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          hanken.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
