'use client'

import Link from "next/link";
import { motion } from "framer-motion";
import BackToPage from "@/components/BackToPage";

export default function FramerEffect(){
  return(
    <div className=""> 
    <BackToPage/>      
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:0.90, ease:"easeOut"}}
      className="text-green-700"
      >
      
      <ul className="p-4 text-yellow-50">
        <Link href={"/framertransition"}>
        <li>Back</li></Link>
      </ul>
        <div className="w-full  m-auto flex justify-center ">
          <h1 className="text-6xl inline-block text-center mt-20 mb-20 font-extrabold p-6 border bg-slate-100">EFFECT</h1>
        </div>
      <motion.div       
        initial={{opacity:0}}
        animate={{opacity:70}}
        transition={{duration:3, ease:"easeOut"}}
        className="flex justify-around italic font-bold"
        >        
        <div>
          <h2>Design</h2>
          <h2>Company</h2>
          <h2>2023</h2>
        </div>
        <div>
          <h3>This is very funny</h3>
          <h3>I like code</h3>
          <h3>Keep in touch</h3>
        </div>
        </motion.div>
      </motion.div>    
    </div>
  )
}