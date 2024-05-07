import VT from '../Assets/VTpass.svg'
import React from 'react'
import Paystack from '../Assets/Paystack.svg'
import wema from '../Assets/wema.svg'
import Image from "next/image";

function Partners() {
  return (
    <div className=' h-80 flex justify-center items-center mx-20'>
<div className=''>
    <h3 className='font-bold text-center tracking-[-2%] py-3'>Our Partners</h3>
    <div className='container space-x-24  flex justify-between items-center'>
<div>
    <Image src={VT} alt='vt-logo'/>
</div>
<div>
    <Image src={Paystack} alt='paystack-logo'/>
</div>
<div>
    <Image src={wema} alt='wema-logo'/>
</div>
    </div>
</div>
    </div>
  )
}

export default Partners