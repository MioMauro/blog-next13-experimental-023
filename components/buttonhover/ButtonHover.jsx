'use client'

import './hover.css'

export default function ButtonHover(){
  return(
    <section className="w-full h-40 pb-4 border-y-2 flex flex-col text-center items-center">
      <h2 className=" p-4 italic font-bold text-lg">Button Hover</h2>
      <div className='effect cursor-pointer'>
        <p><span>H</span>ome</p>        
      </div>
    </section>
  )
}