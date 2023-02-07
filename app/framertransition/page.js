'use client'

import Link from "next/link";
import { motion } from "framer-motion";
import BackToPage from "@/components/BackToPage";

export default function FramerPageTransition(){
  return(
    <div className="">
    <BackToPage/>
    <motion.div
initial={{opacity:0}}
animate={{opacity:1}}
transition={{duration:0.75, ease:"easeOut"}}
>    
    <div className="mt-8 text-center w-full text-2xl font-medium ">
      <ul>        
        <Link href={"/framertransition/framereffect"} className="">
          <li className="italic text-center">Click to see Framer Effect</li>
        </Link>
      </ul>      
    </div>    
    </motion.div>
  </div>
  )
}