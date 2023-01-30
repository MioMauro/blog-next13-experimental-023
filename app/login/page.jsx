'use client'

import React from 'react'
import Link from 'next/link'
import BackToPage from '@/components/BackToPage' 

const loginPage = () => {
return (
    <div>
        <Link href="/">
            <BackToPage/>
        </Link>
    </div>
)
}

export default loginPage