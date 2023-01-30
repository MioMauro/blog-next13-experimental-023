'use client'

import React from 'react'
import Image from 'next/image'
import food1 from "../public/food1.jpg";
import EditButton from './EditButton';


const Card = (props) => {
return (
    <div className='mt-6 ml-6'>        
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
    <Image    
        src={food1}
        alt="Mountains static image"
        placeholder="blur"
        className="rounded"
    />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        
        <div>
            <EditButton/>
        </div>
    </div>
</div>
    </div>
)
}

export default Card