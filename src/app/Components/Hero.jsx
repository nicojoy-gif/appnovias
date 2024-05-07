import React from 'react'

import Image from "next/image";
import HeroImage from "../Assets/Visuals.svg"; 
import rocket from '../Assets/Rocket.svg'
import apple from '../Assets/apple.svg'
import google from '../Assets/google.svg'
function Hero() {
  return (
    <div className='mt-8'>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-10'>
            <div className=' flex justify-center  flex-col'>
                <div className='text-customGray lg:w-5/6 w-full '>
                    <h3 className='font-bold text-7xl  leading-[100px] tracking-[-2.5%] '>Earn money plus points while paying your bills</h3>
                    <p className='py-3 text-xl leading-8'>Earn real cash and  points while using BilmaPay for Airtime, Data, Cable TV Subscription  and Paying for your Utility Bills.</p>
                </div>
                <div className='flex mt-6 items-center space-x-4'>
                <button className='bg-customOrange  font-semibold space-x-2 rounded-full px-10 py-4 text-white flex items-center'>
      <Image src={rocket} alt="Logo" />
      <p>Download App</p>
      </button>
                <button className='text-customGreen font-semibold bg-white rounded-full border border-customGreen px-10 py-4'>How it works</button>
               
                </div>
            </div>



            <div className='flex justify-center items-center'>
                <div className='flex flex-col'>
                    <div>
                        <Image src={HeroImage} alt='hero' />
                    </div>
                    <div className='flex justify-center space-x-4 items-center'>
                    <div>
                        <Image src={apple} alt='apple' className='h-16' />
                    </div>
                    <div>
                        <Image src={google} alt='google' className='h-16' />
                    </div>
                   

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero