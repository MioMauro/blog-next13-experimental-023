'use client'

import "./liquidbg.css"

export default function LiquidBg(){
  return(<>
    <section className="liquid-container">
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="border"></div>
    <div className="border"></div>
    </section>
    <svg>
      <defs>
        <filter id='well'>
          <feGaussianBlur in='SourceGraphic'
          stdDeviation='10'/>
          <feColorMatrix in='name' mode='matrix'
                  values='1 0 0 0 0
                          0 1 0 0 0
                          0 0 1 0 0
                          0 0 0 30 -15'/>
          <faBlend in='SourceGraphic' />              
        </filter>
      </defs>
    </svg>
    </>
  )
}