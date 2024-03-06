import Navigation from "@/components/navigation"
import "../styles/globals.css"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scrollToTop"
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
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
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5531401523745788" crossorigin="anonymous"></script>
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
