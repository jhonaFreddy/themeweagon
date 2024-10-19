import React from 'react'

export default function BotonMenu({ nombre }) {
    return (
        <button className='flex w-16 h-6 text-gray-500 items-center gap-2 text-base text-center '>
            {nombre}
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
            </div>
            
        </button>
    )
}
