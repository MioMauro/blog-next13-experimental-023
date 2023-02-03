"use client"

import Link from "next/link"
import BackToPage from "@/components/BackToPage"
import { inventoryDue } from "@/data/inventoryDue"
import { useState } from "react" 

export default function MapMethodTwo() {
    const [item, setItem] = useState({inventoryDue})
    console.log(inventoryDue)

    return(
        <div>
            <Link href="/">
            <BackToPage/>
            </Link>
            <div>
                <h1>SECONDO METODO</h1>
            </div>
            <section>
                {item.inventoryDue.books && item.inventoryDue.books.map((i, index) => {
                    return(
                        <div key={index}>{i.author}</div>
                    )
                })}
            </section>

            <section>
                {item.inventoryDue.books && item.inventoryDue.books.map((i, index) => {
                    if(i.year > 2010) {
                        return(
                            <div key={index}>{i.title}</div>
                        )
                    }
                    return(
                        <div key={index}>{i.author.year}</div>
                    )
                })}
            </section>
        </div>
    )
}