import React from 'react'

import Image from "next/image";
import HeroImage from "../Assets/Visuals.svg"; 
import rocket from '../Assets/Rocket.svg'
function Download() {
  return (
    <div className='my-8 bg-white rounded-xl'>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-8'>
<div className='flex justify-center items-center'> 
<div>
                        <Image src={HeroImage} alt='hero' />
                    </div>
</div>
<div className='flex justify-center items-center'>
    <div className='text-customGray  '>
        <h2 className='font-bold text-4xl w-5/6 tracking-[-2.5%] leading-[50px]'>Download the BilmaPay App to get started</h2>
        <p className='py-5 text-xl '>You can download the BilmaPay mobile app on Google Playstore to get started and enjoy benefits and discounts. Hurry!</p>
        <button className='bg-customGreen shadow-lg my-5  font-semibold space-x-2 rounded-full px-10 py-4 text-white flex items-center'>
      <Image src={rocket} alt="Logo" />
      <p>Download App</p>
      </button>
    </div>
</div>
        </div>
    </div>
  )
}

export default Download