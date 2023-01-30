'use client'

import Link from 'next/link';
import React from 'react'
import { FcSearch } from 'react-icons/fc';
import { FcMenu } from 'react-icons/fc';

const Navbar = () => {
return (
    <div className='w-full flex justify-around border-b'>
    <div className='flex gap-2 p-2'>
        <Link href='/'>
            <h2 className='font-bold'>Next-Experimental</h2>
        </Link>
    </div>

    <div>
    <ul className='flex gap-6 p-2'>
        <Link href="/blog" className='hover:font-bold'>BLOG</Link>  
        <Link href="/about" className='hover:font-bold'>ABOUT</Link>
        <Link href="/contact" className='hover:font-bold'>CONTACT</Link>
    </ul>
    </div>

    <div className='flex gap-2 p-2'>
    <Link href="/login" >
    Log In
    </Link> 

    <Link href="/signup" >
    <button>Sign Up</button>
    </Link>

    <Link href="/create" >
    <button>Create</button> 
    </Link>
    </div>

    <div className='flex gap-2 p-2'>
        <FcSearch className='cursor-pointer'/>
        <FcMenu className='cursor-pointer'/>
    </div>

    </div>   
)
}

export default Navbar