import React from 'react';
import Image from 'next/image';
import arrow from '../Assets/arrow.svg'
const FeatureCard = ({ title, description, imageUrl, imageAlt, imageFirst }) => {
  return (
    <div className='bg-white rounded-xl shadow-blue'>
      <div className={`flex px-8 py-5 justify-between w-full ${imageFirst ? 'flex-row-reverse ' : ''}`}>
        <div className='flex justify-center items-center'>
          <Image src={imageUrl} alt={imageAlt} />
        </div>
        <div className='flex justify-center items-center'>
          <div className={`${imageFirst ? '' : 'flex mr-3 flex-col '}`}>
            <h3 className='font-bold text-3xl tracking-tight'>{title}</h3>
            <p className='py-3 text-2xl text-customGray w-5/6'>{description}</p>
            <div className='text-xl flex space-x-2 items-center text-customGreen'>
              <p>Learn More</p>
              <Image src={arrow} alt='arrow' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
