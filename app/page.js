import React from 'react'
import { Inter } from '@next/font/google'
import { Red_Hat_Text } from '@next/font/google'
import Navbar from '@/components/Navbar'
import BlobBtn from '@/components/blobbtn/BlobBtn'
import LayerBtn from '@/components/layerbtn/LayerBtn'
import ButtonHover from '@/components/buttonhover/ButtonHover'
import IconHover from '@/components/iconhover/IconHover'
import BtnBubbles from '@/components/btnbubbles/BtnBubbles'
import LiquidBg from '@/components/liquidbg/LiquidBg'


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
    <>
    <Navbar/>    
    <BlobBtn/>
    <LayerBtn/>
    <ButtonHover/>
    <IconHover/>
    <BtnBubbles/>
    <LiquidBg/>
    </> 
    ) 
}

{/* comment here

<div className='m-auto h-screen 
                    w-5/6 bg-gradient-to-r from-blue-400 to-green-300
                    rounded-lg'>        
    </div>

*/} 
