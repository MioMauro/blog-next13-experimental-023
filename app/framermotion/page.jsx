'use client'

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import Link from 'next/link';
import nextPic from '@/public/next.svg'
import vercelPic from '@/public/vercel.svg'
import tailwindlPic from '@/public/tailwind.png'


export default function FramerMotion() {
  return (      
    <div> 
      <div className='w-full flex justify-around bg-zinc-500'> 
      <div className="flex">
        <Image className="m-1 mr-2"
        src={tailwindlPic}
        alt="Next 13"
        width={15}
        height={15}
        >    
        </Image>  

        <Link href="/">  
            <h1 className='font-bold'> Next js 13 - Experimental</h1>        
        </Link>

        <Image className="m-1 ml-2"
        src={tailwindlPic}
        alt="Next 13"
        width={15}
        height={15}
        >    
        </Image> 
      </div>
      </div>  
    <AnimatePresence>
    <motion.div
      initial={{ opacity: 0, y: 25}}
      animate={{ opacity: 1, y: 0}}      
      exit={{ opacity: 0, y: 15}}
      transition={{ delay: 0.45}}
    > 
    
    <div className="flex flex-col m-auto mt-10 justify-center items-center">
      <h2 className="p-6">Amazing Framer Motion! (AnimatePresence)</h2>
      <Link href="https://beta.nextjs.org/docs/getting-started" target="_blank">
        <Image
        src={nextPic}
        alt="Next 13"
        width={200}
        height={200}
        >    
        </Image>  
      </Link>  
    </div>
<div>
<Image className="m-auto mt-20"
        src={vercelPic}
        alt="Next 13"
        width={600}
        height={600}
        >    
        </Image>  
</div>
  </motion.div>
  </AnimatePresence>
</div>
  )
}
