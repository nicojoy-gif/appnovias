"use client"
import React, { useState } from 'react';
import Faqs from '../Assets/Faq.svg';
import arrowUp from '../Assets/up.svg';
import arrowDown from '../Assets/chevron-down.svg';
import Image from "next/image";
function Faq() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const faqItems = [
    {
      question: 'Who can use BilmaPay?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.'
    },
    {
      question: 'Why Use BilmaPay?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.'
    },
    {
      question: 'What Makes Us Different?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.'
    }
   
  ];

  return (
    <div className='my-8'>
      <div>
        <h2 className='font-bold text-center text-4xl tracking-[-2.5%] text-customGray leading-[50px]'>Frequently Asked Questions</h2>
        <div className='my-8'>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-8'>
           <div className='flex justify-center items-center'>
<div>
  <Image src={Faqs} alt='faqs' />
</div>
           </div>
            <div className='flex flex-col items-center justify-center'>
            {faqItems.map((item, index) => (
              <div key={index} className=' bg-white border w-full my-5 shadow-lg shadow-lightGrey border-lightGrey p-4 rounded-md'>
                <div className='flex justify-between items-center h-10 cursor-pointer' onClick={() => setSelectedQuestion(selectedQuestion === index ? null : index)}>
                  <p className='text-xl text-textGray'>{item.question}</p>
                  {selectedQuestion === index ? (
                    <Image src={arrowUp} alt='arrow-up' width={20} height={20} />
                  ) : (
                    <Image src={arrowDown} alt='arrow-down' width={20} height={20} />
                  )}
                </div>
                {selectedQuestion === index && <p className='mt-2 text-textGradient'>{item.answer}</p>}
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
