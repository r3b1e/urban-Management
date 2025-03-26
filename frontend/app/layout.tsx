import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Toaster } from "@/components/ui/toaster"
import { ClientProviders } from "./client-providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mumbai Urban Management System",
  description: "Integrated platform for waste management, solar energy tracking, and flood monitoring",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ClientProviders>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Toaster />
          </div>
        </ClientProviders>
      </body>
    </html>
  )
}