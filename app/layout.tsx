import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
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
    <html lang="pt-BR" className={geist.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
