'use client'

import './blob.css'

import { FaApple } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

export default function BlobBtn(){
  return(
    <section className="pb-4 border-y-2 flex flex-col text-center">
      <h2 className=" p-4 italic font-bold text-lg"> Liquid effect on button</h2>
      <div className="button relative cursor-pointer">
        <i className="ibutton absolute flex">
          <FaApple/>
        </i>
        <div className="blurred relative">
            <span></span>
            <span></span>
        </div>
      </div>
      <div className="button relative cursor-pointer">
        <i className="ibutton absolute flex">
          <FaFacebookF/>
        </i>
        <div className="blurred relative">
          <span></span>
          <span></span>
        </div>
      </div>
      <svg className='absolute'>
        <defs>
        <filter id='hey'>
          <feGaussianBlur in='SourceGraphic'
          stdDeviation='10' result="name"/>
          <feColorMatrix in='name' mode='matrix'
          values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 30 -15"
                  result='aab'/>
          <faBlend in='SourceGraphic'
          in2='aab'/>
        </filter>
        </defs>
      </svg>
    </section>
  )
}