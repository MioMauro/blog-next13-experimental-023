'use client'

import Navbar from '@/components/Navbar'
import '@/styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />      
      <body className='bg-gradient-to-r from-green-500 to-blue-300'>      
            <Navbar/>      
      {children}       
      </body>      
    </html>
  )
}
