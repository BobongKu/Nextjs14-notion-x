import Navigation from "@/components/navigation"
import "../styles/globals.css"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scrollToTop"
import { Analytics } from "@vercel/analytics/react"
import Script from "next/script"

export const metadata = {
  title: 'Bobong blog',
  description: `Bobong's INFOSEC Blog`,
  icons:{
    icon: "/favicon.ico"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5531401523745788" crossOrigin="anonymous"></Script>
        <meta name="google-adsense-account" content="ca-pub-5531401523745788"/>
      </head>
      <body className="bg-black">
        <Navigation/>
        {children}
        <ScrollToTop/>
        <Analytics/>
        <Footer/>
      </body>
    </html>
  )
}
