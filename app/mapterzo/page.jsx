"use client"

import Link from "next/link"
import BackToPage from "@/components/BackToPage"
import films from "@/data/inventoryTre.json"
import { useState } from "react"

export default function MapMethodThree(){

const [data, setData] = useState([...films])

    return(
    <div>
        <div>
            <Link href="/">
            <BackToPage/>
            </Link>
        </div>
            <div>
                <h1>TERZO METODO</h1>
            </div>            
                {data && data.map((i, index) => {
                    return(
                        <div key={index}>{i.author}</div>
                    )
                })}
            
    </div>
)
}