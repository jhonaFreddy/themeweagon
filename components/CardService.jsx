import React from 'react'

export default function CardService({imagen,titulo,parrafo, classname}) {
  return (
    <div className={`w-72 h-[450px] hover:bg-slate-100 rounded-3xl p-10 text-center flex flex-col items-center border gap-5 ${classname}`}>
        <img src={imagen} alt="" className='w-32 '/>
        <div className='flex flex-col gap-10'>
            <h3 className='font-bold'>{titulo}</h3>
            <p>{parrafo}</p>
            <button className='flex text-blue-400'>Learn More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>
</button>
        </div>
    </div>
  )
}
