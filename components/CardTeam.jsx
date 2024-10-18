import React from 'react'

export default function CardTeam({ imagen, nombre,cargo }) {
    return (
        
            <div className='w-72 h-[450px] rounded-3xl py-5 text-center flex flex-col items-center gap-5 ease-in duration-300 hover:scale-105'>
                <img src={imagen} alt="" className='w-52 h-auto ' />
                <div className='flex flex-col '>
                    <h3 className='font-bold'>{nombre}</h3>
                    <p>{cargo}</p>
                </div>
            </div>
        
    )
}
