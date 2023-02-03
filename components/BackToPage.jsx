'use client'

import Link from 'next/link';

export default function BackToPage(){
return (
    <div className='w-full flex justify-around bg-zinc-500'> 
        <Link href="/">      
            <h1 className='font-bold'>Next js 13 - Experimental</h1>        
        </Link> 
    </div>    
)
}
