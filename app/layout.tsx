import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import Script from "next/script"
import "./globals.css"

import { Inter } from "next/font/google"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Diagnóstico de IA | BIMachine",
  description:
    "Diagnóstico gratuito e personalizado que mapeia seus processos, identifica gargalos reais e mostra onde IA gera ROI mensurável na sua operação.",
  keywords: ["IA", "Inteligência Artificial", "BIMachine", "Diagnóstico", "ROI", "Automação"],
  authors: [{ name: "BIMachine" }],
  openGraph: {
    title: "Diagnóstico de IA | BIMachine",
    description: "Descubra onde aplicar IA antes de gastar. Diagnóstico gratuito e personalizado.",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
        <Script
          src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/307950ac-65fa-4ff2-a638-0fb53d62dea2-loader.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
