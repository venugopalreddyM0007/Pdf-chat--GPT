import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Image from 'next/image';
 
function Header() {
  return (
    <header style={{ position: "absolute", display: "flex", justifyContent: "space-between", padding: 10, width: '100%' }}>
      <div className="items-end block gap-3 md:flex">
        <Image src="/logo.png" alt="PDF Chat logo" width="100" height="75" />
        <span className="author">Built by <a href='https://www.linkedin.com/in/manuru-venu-gopal-reddyfrontenddeveloper/' target='_blank'>VenuGopalReddy</a> </span>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <SignedIn>
          <UserButton appearance={{baseTheme: dark}} afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
            <button className="text-blue-300 border border-blue-500 hover:text-white hover:bg-[#2d06ff4a] py-2 px-4 rounded-3xl transition duration-300 ease-in-out">Sign in</button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button className="px-4 py-2 transition duration-300 ease-in-out bg-white rounded-3xl">Sign up</button>
          </SignUpButton>
        </SignedOut>
      </div>
    </header>
  );
}

export const metadata: Metadata = {
  title: 'PDF Chat',
  description: 'Chat with your PDFs using AI! - A Codebender Project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark
      }}
    >
      <html lang="en">
        <body>
          <Header />
          {children}
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  )
}