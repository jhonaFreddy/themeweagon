import CardFeature from '@/components/CardFeature'
import React from 'react'

export default function page() {
    return (
        <div className='flex flex-col gap-5 p-5'>
            <div className="relative z-10 flex flex-col items-center text-center p-2 ">
                <h1 className="text-4xl font-bold">
                    Features
                </h1>
                <h2 className="mt-4 text-base font-normal w-[90%] sm:w-[558px]">
                    We provide a number of excellent features that will undoubtedly improve the user experience. We also provide a better support system
                </h2>
            </div>
            <div className='flex flex-wrap gap-10 items-center justify-center'>
            <CardFeature 
            imagen='featuresimages/icon1.png'
            titulo='Encrypted Mail'
            parrafo='A process of encrypting email communications'/>
            <CardFeature 
            imagen='featuresimages/icon2.png'
            titulo='Display Sharing'
            parrafo='With other participants, you may share your screen'/>
            <CardFeature 
            imagen='featuresimages/icon3.png'
            titulo='Private Notebook'
            parrafo='Private Notebook is an application that is protected'/>
            <CardFeature 
            imagen='featuresimages/icon4.png'
            titulo='App App Assistance'
            parrafo='App Assistant is quickly and effectively ran the system'/>
            <CardFeature 
            imagen='featuresimages/icon5.png'
            titulo='Multiple Printing'
            parrafo='Our canvas prints are crafted on top-notch canvas.'/>
            <CardFeature 
            imagen='featuresimages/icon6.png'
            titulo='Free Sketch'
            parrafo='Our canvas prints are crafted on top-notch canvas.'/>
        
            </div>
            </div>
    )
}
