"use client"

import { inventory } from "@/data/inventory"
import { useState } from "react"
import Link from "next/link"
import BackToPage from "@/components/BackToPage"

console.log(inventory)

export default function MapFirstMethod(){

    const [item] = useState([...inventory])

    return (        
        <div className="m-auto">
        <Link href="/">
            <BackToPage/>
        </Link>
        <div>
                <h1>PRIMO METODO</h1>
            </div>
            <p className="font-bold">.Map, Primo Metodo</p>
        <div>
        {item && item.map((i) => {
        return(
            <div key="index" className="grid-cols-6 grid-rows-6">
                <div>{i.title}</div>
                <div>{i.year}</div>
                
            </div>
        )
    })}
    </div>
        </div>
    )
}