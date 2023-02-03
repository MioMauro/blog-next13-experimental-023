'use client'
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import Link from 'next/link';
import nextPic from '@/public/next.svg'

export default function FramerMotion() {
  return (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0, y: 15}}
      animate={{ opacity: 1, y: 0}}
      exist={{ opacity: 0, y: 15}}
      transition={{ delay: 0.25}}
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
    </motion.div>
  </AnimatePresence>
  )
}
