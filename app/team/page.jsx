import CardTeam from '@/components/CardTeam'
import React from 'react'

export default function page() {
    return (
        <div>
            <div className="relative z-10 flex flex-col items-center text-center p-2 ">
                <h1 className="text-4xl font-bold">
                    Our team
                </h1>
                <h2 className="mt-4 text-base font-normal w-[90%] sm:w-[558px]">
                    People from various origins, cultures, and personalities make up our team. This blend makes it a powerful team
                </h2>
            </div>
            <div className='flex gap-5 justify-center'>
                <CardTeam
                    imagen='./teamimages/image1.png'
                    nombre='John Adams'
                    cargo='CEO' />
                <CardTeam
                    imagen='./teamimages/image2.png'
                    nombre='Carrey Johnson'
                    cargo='Senior Developer' />
                <CardTeam
                    imagen='./teamimages/image3.png'
                    nombre='Ray Marie'
                    cargo='Developer' />
                <CardTeam
                    imagen='./teamimages/image4.png'
                    nombre='Austin Min'
                    cargo='Designer' />
            </div>
            <div className='flex justify-center'>
            <button className='border-2 text-gray-500 p-2 rounded-lg hover:bg-gray-200 text-sm font-medium'>
                View Full Team
            </button>
            </div>




        </div>
    )
}
