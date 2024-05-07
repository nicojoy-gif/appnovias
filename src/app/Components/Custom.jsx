import React from 'react';

function CustomComponent({ count, text }) {
  return (
    <div className='h-44 w-72 flex-col text-customGray shadow-lg bg-white border-b-4 border-customGreen rounded-t-xl flex justify-center items-center'>
      <h3 className='font-bold text-4xl'>{count}</h3>
      <p className='py-3'>{text}</p>
    </div>
  );
}

export default CustomComponent;
