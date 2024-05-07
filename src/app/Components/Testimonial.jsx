import React from 'react';
import Image from "next/image";
function TestimonialCard({ name, role, text, starIcon }) {
  return (
    <div className='bg-white rounded-xl shadow-xl shadow-[#EEEEEE]'>
      <div className='p-5 flex flex-col items-center justify-center'>
        <div className='h-14 w-14 bg-lightblue my-5 rounded-full'></div>
        <h2 className='text-darkGray font-semibold text-xl'>{name}</h2>
        <p className='text-lightGray py-2 text-sm'>{role}</p>
        <div className='text-center md:w-5/6 w-full my-5 text-customGray mx-auto'>
          {text}
        </div>
        <div className='flex justify-center items-center'>
          <Image src={starIcon} alt='star-icon' />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
