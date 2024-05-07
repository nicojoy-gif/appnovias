import React from 'react'

import apple from '../Assets/apple.svg'
import google from '../Assets/google.svg'
import Image from "next/image";
import logoImage from "../Assets/logoimg.svg"; 
import fb from '../Assets/Fb.svg'
import tw from '../Assets/Tw.svg'
import ins from '../Assets/In.svg'
import Linked from '../Assets/Ln.svg'
function Footer() {
  return (
    <div>
        <div className='py-5 bg-white rounded-xl'>
<div className='grid md:grid-cols-3 p-8 grid-cols-1'>
<div className='col-span-2'>
<div>
    <div>
    <div className="flex items-center">
        <Image src={logoImage} alt="Logo" className='h-9'/>
        
      </div>
      <div className='my-5 flex items-center font-medium space-x-6'>
        <p>Features</p>
        <p>About</p>
        <div className='flex items-center space-x-2'><p>Careers</p><p className='text-customOrange bg-[#FFECE5] rounded-xl px-3 py-1 '>We’re hiring!</p></div>
        <p>Blog</p>
        <p>Contact</p>
      </div>
      <div className='flex pt-8 items-center space-x-6'>
      <Image src={fb} alt="facebook" className='h-6'/>
      <Image src={tw} alt="twitter" className='h-6'/>
      <Image src={ins} alt="instagram" className='h-6'/>
      <Image src={Linked} alt="linkedin" className='h-6'/>
      </div>
    </div>
</div>
</div>
<div>
    <div>
        <p className='font-medium text-[#344054] text-sm py-2'>Download the app</p>
        <div className='flex items-center space-x-4'>
                    <div>
                        <Image src={apple} alt='apple' className='h-10 w-full' />
                    </div>
                    <div>
                        <Image src={google} alt='google' className='h-10 w-full' />
                    </div>
                   

                    </div>
                    <div className='pt-14 flex px-6 items-center space-x-6'>
                        <p className='text-sm'>Terms of Service</p>
                        <p className='text-sm'>Privacy Policy</p>
                    </div>
    </div>
</div>
</div>
        </div>
    </div>
  )
}

export default Footer