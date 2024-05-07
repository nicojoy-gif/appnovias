import React from 'react'
import Image from "next/image";
import logoImage from "../Assets/logo.svg"; 
import rocket from '../Assets/Rocket.svg'
export default function Nav() {
  return (
    <div>
        <div className='flex justify-between items-center '>
        <div className="flex items-center">
        <Image src={logoImage} alt="Logo" className='h-9'/>
        <p className='font-bold tracking-tight text-lg'>BilmaPay</p>
      </div>
      <div className='flex justify-center items-center'>
      <div className='flex justify-center space-x-12 items-center'>
      <p className='text-customGreen font-semibold'>About Us</p>
      <p className='text-customGreen font-semibold'>Contact</p>
      <button className='text-customGreen font-semibold bg-white rounded-full border border-customGreen px-10 py-4'>How it works</button>
     
      </div>
      <button className='bg-customOrange mx-5 font-semibold space-x-2 rounded-full px-10 py-4 text-white flex items-center'>
      <Image src={rocket} alt="Logo" />
      <p>Download App</p>
      </button>
      </div>
        </div>
    </div>
  )
}
