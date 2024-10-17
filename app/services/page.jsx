import CardService from '@/components/CardService'
import React from 'react'

export default function Services() {
    return (
        <div className="relative w-full h-screen bg-gray-50 flex flex-col gap-10">
           
            <div className="absolute top-0 left-0 w-36 h-40 mt-20 ml-40 bg-no-repeat bg-center" style={{ backgroundImage: `url('servicesimages/illustration1.png')`, backgroundSize: 'contain' }}>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center p-2">
                <h1 className="text-4xl font-bold">
                    Service
                </h1>
                <h2 className="mt-4 text-base font-normal w-[90%] sm:w-[558px]">
                    We offer youth with chances for career development in their practice. We also support a wide range of services to ensure client satisfaction.
                </h2>
            </div>
            <div className='flex gap-10 justify-center'>
                <CardService 
                    classname = {'bg-blue'}
                    imagen='/servicesimages/icon1.png'
                    titulo = 'Send Texts Instantly'
                    parrafo = 'Financial planning, forecasting and adjusting rapidly with customer demands and budgets.'
                    
                />
                <CardService 
                    classname = {'bg-slate-50'}
                    imagen='/servicesimages/icon2.png'
                    titulo = 'Better Organized'
                    parrafo = 'Latest technology and experienced guidance, trained HR specialists to keep updated.'
                />
                <CardService 
                    className = {'bg-transparent'}
                    imagen='/servicesimages/icon3.png'
                    titulo = 'Analytical Statistics'
                    parrafo = 'Messages, real-time reminders, memos, and many more will keep your team in sync.'
                />
            </div>
        </div>
    )
}
