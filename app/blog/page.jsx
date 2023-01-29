'use client'

import BackToPage from '@/components/BackToPage'
import Link from 'next/link'
import React from 'react'


const blogPage = () => {    
return (    
    <div>
        <Link href="/">
            <BackToPage/>
        </Link>
    </div>
)
}

export default blogPage