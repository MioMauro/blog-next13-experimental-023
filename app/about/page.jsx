'use client'

import React from 'react'
import Link from 'next/link'
import BackToPage from '@/components/BackToPage' 

const aboutPage = () => {
  return (
    <div>
        <Link href="/">
            <BackToPage/>
        </Link>
    </div>
  )
}

export default aboutPage