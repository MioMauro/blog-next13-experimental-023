'use client'
import Link from "next/link";
import { motion } from "framer-motion";
import BackToPage from "@/components/BackToPage";

export default function FramerEffect(){
  return(
    <div>       
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:0.70, ease:"easeOut"}}
      className="text-green-700 absolute top-0 left-0 w-full px-16 lg:px-48"
      >
      <BackToPage/>
      <ul>
        <Link href={"/framertransition"}>
        <li>Back to FramerTransition</li></Link>
      </ul>
        <div className="my-96">
          <h1 className="text-6xl text-center lg:text-right lg:text-9xl">EFFECT</h1>
        </div>
      <motion.div       
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:2, ease:"easeOut"}}
        className="flex justify-between"
        >        
        <div>
          <h2>Design</h2>
          <h2>Company</h2>
          <h2>2023</h2>
        </div>

        <div>
          <h3>This is very funny</h3>
          <h3>This is very funny and smiling</h3>
          <h3>Keep in touch</h3>
        </div>
        </motion.div>
      </motion.div>    
    </div>
  )
}