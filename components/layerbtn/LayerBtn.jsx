"use client"

import './layer.css'
import { FaBuffer } from "react-icons/fa";

export default function BlobBtn(){
  return(
    <section className="pb-4 border-y-2 flex flex-col text-center items-center">
      <h2 className='p-4 italic font-bold text-lg'>Layer Effect</h2>
    <div className='icon cursor-pointer'>
    <span></span>
    <span></span>
    <span><i><FaBuffer/></i></span>
    <span></span>      
    </div>
    </section>
  )
}