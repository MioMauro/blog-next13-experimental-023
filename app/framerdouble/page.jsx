'use client'

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import tailwindlPic from '@/public/tailwind.png'
import nebulosa from "@/public/nebulosa.png"

export default function FramerDouble(){
  return(
<div className="">

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
      
    <motion.div
      initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
    >
    <div className=" flex justify-center gap-4 mt-8">
      <div>
      <Image className="rounded-lg"
      src={nebulosa} alt="placeholder" priority/>
      </div>

      <div>
      <Image className="rounded-lg"
      src={nebulosa} alt="placeholder" priority/>
      </div>

      <div>
      <Image className="rounded-lg"
      src={nebulosa} alt="placeholder" priority/>
      </div>
      </div>
  </motion.div>
    
  <motion.div
      initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
    >
    <div className=" flex justify-center gap-4 mt-8">
      <div>
      <Image className="rounded-lg"
      src={nebulosa} alt="placeholder" priority/>
      </div>
      <div>
      <Image className="rounded-lg"
      src={nebulosa} alt="placeholder" priority/>
      </div>
      <div>
      <Image className="rounded-lg"
      src={nebulosa} alt="placeholder" priority/>
      </div>
      </div>
  </motion.div>
</div>
  )
}