import React from 'react'
import BotonMenu from './BotonMenu'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className='flex bg-white justify-between p-4 h-14'>
            <div className='flex gap-20 px-36 w-[636px]'>
                <div className='flex w-28 h-8 justify-center items-center mt-1'>
                    <img src="Logo.png" className='w-7 h-auto' alt="logo" />
                    <h2 className='font-extrabold text-lg 
                    bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-16 h-8 logo text-transparent'>Klean</h2>
                </div>
                <div className='flex gap-10 w-[465px] h-6 items-center justify-center mt-2'>
                    <Link href={'/'}><BotonMenu nombre={'Home'} /></Link>
                    <Link href={'/services'}>
                        <BotonMenu nombre={'Service'} />
                    </Link>
                    <Link href={'/features'}>
                    <BotonMenu nombre={'Features'} />
                    </Link>
                    <Link href={'/team'}><BotonMenu nombre={'Team'} />
                    </Link>
                    <Link href={'/projects'}>
                        <BotonMenu nombre={'Projects'} />
                    </Link>
                    <Link href={'/contact'}>
                        <BotonMenu nombre={'Contact'} />
                    </Link>
                </div>
            </div>
            <div className='flex gap-5 px-36'>
                <button className='text-sky-400'>Login</button>
                <button className='bg-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-20 
            logo text-transparent shadow-lg rounded-lg'>Sing Up</button>
            </div>

        </nav>
    )
}
