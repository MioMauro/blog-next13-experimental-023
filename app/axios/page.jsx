'use client'

import axios from 'axios'
import { useState } from 'react';


export default function AxiosPage() {

    const [data, setData] = useState()

    var apiKey = 'dd5439f84f9d439499ffe4b306f6994d';
    var type = 'tesla'
    var date = '2023-01-02'
    var sortBy = 'publishedAt'


    const url = `https://newsapi.org/v2/everything?q=tesla&from=2023-01-02&sortBy=publishedAt&apiKey=dd5439f84f9d439499ffe4b306f6994d`;
    const GrabNews = () => {
        axios.get(url)
        .then((response) => {
            console.clear()
            setData(response.data)
            console.log(response.data)
        }).catch(err => {
            console.log(err)
        })
    }
    
    return (
    <>
    <h1>axios</h1>
    <button className='border p-1 rounded
    bg-black text-white font-semibold'
    onClick={() => GrabNews()}>Grab Info
    </button>

    {data && data.articles.map((d, index) => {
            return(
                <div key={index}>
                <div>{d.author}</div>
                <div>{d.title}</div>
                <div></div>
                <div></div>
                </div>
            )
        })
    }
    </>
    )
}