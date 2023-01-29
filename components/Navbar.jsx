'use client'

import Link from 'next/link';
import React from 'react'
import { FcSearch } from 'react-icons/fc';
import { FcMenu } from 'react-icons/fc';

const Navbar = () => {
return (
    <div className='w-full bg-slate-500 flex justify-around'>
    <div className='flex gap-2 p-2'>
        <h2 className='logo'>Next-Experimental</h2>
    </div>

    <div>
    <ul className='flex gap-2 p-2'>
        <Link href="/blog" >BLOG</Link>  
        <Link href="/about" >ABOUT</Link>
        <Link href="/career" >CAREER</Link>
    </ul>
    </div>

    <div className='flex gap-2 p-2'>
    <Link href="/login" >
    Log in
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