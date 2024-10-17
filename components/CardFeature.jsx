import React from 'react'

export default function CardFeature({imagen,titulo,parrafo}) {
  return (
    <div className='w-96 h-52 hover:bg-slate-100 rounded-3xl px-10 text-center flex flex-col items-center gap-5'>
        <img src={imagen} alt="" className='w-28 '/>
        <div className='flex flex-col'>
            <h3 className='font-bold text-lg'>{titulo}</h3>
            <p className='text-sm '>{parrafo}</p>
        </div>
    </div>
  )
}
