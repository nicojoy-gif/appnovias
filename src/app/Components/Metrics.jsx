import React from 'react'
import CustomComponent from './Custom'

function Metrics() {
  return (
    <div className='h-96 my-8 flex justify-center items-center flex-col'>
      <div className='text-center'>
        <h2 className='font-bold text-4xl '>Our Metrics Tells the Story</h2>
        <p className='py-5'>Our metrics gives you the inside scoop on our success</p>
      </div>
      <div className='mt-7 grid lg:grid-cols-4 md:grid-cols-2 gap-10 grid-cols-1'>
      <CustomComponent count="1k+" text="People Used" />
      <CustomComponent count="1.1k+" text="App Downloads" />
      <CustomComponent count="12k+" text="Daily Utility Bills Processed" />
      <CustomComponent count="15k+" text="Total Utility Bills Processed" />
      </div>
    </div>
  )
}

export default Metrics