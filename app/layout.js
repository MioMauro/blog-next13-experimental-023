'use client'

import Navbar from '@/components/Navbar'
//import { ThemeProvider } from "@material-tailwind/react"
import '@/styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      
      <body>
      
      <Navbar/>
      
      {children}
      
      </body>
      
    </html>
  )
}
