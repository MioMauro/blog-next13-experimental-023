'use client'

import Link from "next/link";
import { motion } from "framer-motion";
import BackToPage from "@/components/BackToPage";

export default function FramerPageTransition(){
  return(
    <>
    <motion.div
initial={{opacity:0}}
animate={{opacity:1}}
transition={{duration:0.75, ease:"easeOut"}}
className="text-blue-700  bg-slate-500 "
>
    <BackToPage/>
    <div className="text-2xl font-medium">
      <ul className="flex gap-12">        
        <Link href={"/framertransition/framereffect"}>
        <li>Click to see Framer Effect</li></Link>
      </ul>      
    </div>
    </motion.div>
    </>
  )
}