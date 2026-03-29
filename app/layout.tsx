import type { Metadata } from 'next'
import { ClerkProvider, Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import { IBM_Plex_Serif, Mona_Sans } from 'next/font/google'

import './globals.css'
import Navbar from '@/components/Navbar'

const ibmplexserif = IBM_Plex_Serif({
  variable: "--font-ibmplexserif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

const monasans = Mona_Sans({
  variable: "--font-monasans",
  subsets: ["latin"],
  display: "swap",
})


export const metadata: Metadata = {
  title: 'Voxlio',
  description: 'Transform your books into interactive AI conversations. Upload PDFs,and chat with you books using voice.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${ibmplexserif.variable} ${monasans.variable} relative font-sans antialiased`}>
        <ClerkProvider>
          <header className="flex justify-end items-center p-4 gap-4 h-16">
            <Show when="signed-out">
              <SignInButton />
              <SignUpButton>
                <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </header>
          {children}
        </ClerkProvider>
        <Navbar></Navbar>
      </body>
    </html>
  )
}