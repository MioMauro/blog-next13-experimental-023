import Link from 'next/link';
import { FcSearch } from 'react-icons/fc';
import { FcMenu } from 'react-icons/fc';

const routes = [
    { name: "Home", path: "/"},
    { name: "About", path: "/about"},
    { name: "Contact", path: "/contact"},
    { name: "Log In", path: "/login"},
    { name: "Sig Up", path: "/signup"}, 
]

const mapRoutes = [
    { name: "Map-method-1", path: "/mapprimo"}, 
    { name: "Map-method-2", path: "/mapsecondo"},
    { name: "Map-method-3", path: "/mapterzo"},
    { name: "Map-method-Axios", path: "/axios"},
]

const mapRoutess = [
    { name: "Framer Motion", path: "/framermotion"},
    { name: "Framer Galaxy", path: "/framergalaxy"},
    { name: "Framer Double", path: "/framerdouble"},
    { name: "Transition Page", path: "/framertransition"}, 
]

export default function Navbar() {
    return(
    <header>
        <div className='w-full flex justify-around border-b p-4'> 
    <Link href="/">      
        <h1 className='font-bold'>Next js 13 - Experimental</h1>        
    </Link> 
        </div>

        <div className="flex p-2 border-b gap-6 justify-around">
            {routes.map(r =>
            <Link className="hover:font-bold" key={r.index} href={r.path}>
                {r.name}
            </Link>
            )}
                <div className='flex gap-4 p-2'>
                    <FcSearch className='cursor-pointer'/>
                    <FcMenu className='cursor-pointer'/>
                </div>
        </div>

        <nav>
            <div className="flex p-2 border-b gap-6 justify-center">
                {mapRoutes.map(r =>
                <Link className="hover:font-bold" key={r.index} href={r.path}>
                {r.name}
                </Link>
                )}            
            </div>
        </nav>
        
        <div className="flex p-2 border-b gap-6 justify-center">
            {mapRoutess.map(r =>
            <Link className="hover:font-bold" key={r.index} href={r.path}>
            {r.name}
            </Link>
            )}            
        </div>
    </header>        
    )
}
