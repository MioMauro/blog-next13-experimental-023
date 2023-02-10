"use client"

import './iconhover.css'
import { FaEarlybirds } from "react-icons/fa";

export default function IconHover(){
  return(
    <section className="pb-4 border-y-2 flex flex-col text-center items-center">
      <h2 className='p-4 italic font-bold text-lg'>Icon Effect</h2>
    <div className='box'>
      <div className='btn'><i className='text-3xl z-10'><FaEarlybirds/></i></div>
    </div>
    </section>
  )
}