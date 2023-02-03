'use client'

import SendMailForm from '@/components/SendMailForm'
import BackToPage from '@/components/BackToPage'
import Link from 'next/link'

export default function LoginPage(){
  return (      
        <div className='h-screen w-full flexjustify-center'>
          <div>
          <Link href="/">
            <BackToPage />
          </Link>
        </div>

          <div className='m-auto mt-28 w-2/4 rounded-3xl'>                      
            <SendMailForm />
          </div>
        </div>    
  )
  }
