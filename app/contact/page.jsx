import SendMailForm from '@/components/SendMailForm'
import BackToPage from '@/components/BackToPage'
import Link from 'next/link'

export default function LoginPage(){
  return (      
        <div className='h-screen w-full flex items-center justify-center'>
          <div>
          <Link href="/">
            <BackToPage />
          </Link>            
            <SendMailForm />
          </div>
        </div>    
  )
  }