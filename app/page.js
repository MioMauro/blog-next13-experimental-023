//"use client"

import React from 'react'
import { Inter } from '@next/font/google'
import { Red_Hat_Text } from '@next/font/google'
import Card from '@/components/Card'


const inter = Inter({ 
  subsets: ['latin'],
  weight: ['700', '600'],
})
const redHat = Red_Hat_Text({
  subsets: ['latin'],
  weight: ['700', '600'],
})


export default function Home() {
  return (    
    <Card/>
    ) 
}

{/* comment here

<div className='m-auto h-screen 
                    w-5/6 bg-gradient-to-r from-blue-400 to-green-300
                    rounded-lg'>        
    </div>

*/} 
