"use client"

import './btnbubbles.css'

export default function IconHover(){
  return(
    <section className="pb-4 border-y-2 flex flex-col text-center items-center">
      <h2 className='p-4 italic font-bold text-lg'>Button Bubbles</h2>
    <div className='box-bubbles'>
      <div className='btn-bubbles'>
        <p className='text-bubbles'><span className='span-bubbles'>Home</span></p>
        <figure></figure>
        <figure></figure>
        <figure></figure>
        <figure></figure>
      </div>
    </div>
    </section>
  )
}