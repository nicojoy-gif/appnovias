import React from 'react'

import star from "../Assets/star.svg"; 
import TestimonialCard from './Testimonial';
function Stories() {
  return (
    <div>
        <div>
        <div className='text-customGray text-center '>
        <h2 className='font-bold text-4xl w-5/6 tracking-[-2.5%] leading-[50px]'>Real  Stories From Satisfied Customers</h2>
        
        <p className='py-5 text-xl '>See how BilmaPay is making an Impact</p>
       </div>
       <div className='my-8 grid lg:grid-cols-3 grid-cols-2 gap-12'>
       <TestimonialCard
        name="Obi Pascal"
        role="Fullstack Developer @JCK"
        text="“BilmaPay has made making payments seamless for me, i pay my bills with ease and with a less stressful and complex manner, the speed in proccessing payment is a life saver. Highly Recommend!"
        starIcon={star} 
      />
       <TestimonialCard
        name="Austine Makaveli"
        role="Sportbet Analyst @Freelancer"
        text='“BilmaPay has been a game changer for me. The swift deposit and withdrawal process have helped me make payments and deposits faster and with more consistency. Great job!"'
        starIcon={star} 
      />
       <TestimonialCard
        name="Abdul Dauda"
        role="Trader @Wuse Market"
        text='"BilmaPay has become a part of my business process. Whether I am receiving payment from a new customer or need to receive payment from an existing one, this app has everything I need to get the job done quickly and efficiently."'
        starIcon={star} 
      />
       </div>
        </div>

    </div>
  )
}

export default Stories