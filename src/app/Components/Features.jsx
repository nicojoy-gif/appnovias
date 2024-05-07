import React from 'react'
import Image from "next/image";
import BillImage from "../Assets/bill.svg"; 
import FeatureCard from './FeatureCard';
import Television from '../Assets/television.svg'
import Airtime from '../Assets/airtime.svg'
function Features() {
  return (
    <div>
        <div className='flex flex-col justify-center items-center'>
           
    <h3 className='font-bold text-center tracking-[-2%] py-3'>Features</h3>
    <p className='py-5 text-customGray text-4xl'>Why you should use BilmaPay</p>
        </div>
        <div className='mx-12 space-y-6 my-6'>
        <FeatureCard
  title='Buy Power - Nepa Light!'
  description='Pay once and we will manage the subsequent payment for you.'
  imageUrl={BillImage}
  imageAlt='Bill Image'
  imageFirst={true} 
/>


<FeatureCard
  title='Airtime and Data Recharge'
  description='Earn points and rewards for airtime recharge and data subscription payment using the BilmaPay app.'
  imageUrl={Airtime}
  imageAlt='Airtime'
  imageFirst={false} 
/>
<FeatureCard
  title='Cable TV Subscription'
  description='Utilize our app for payment of your Cable and Tv subscription such as Dstv, Gotv, Startimes and many others. Hurry Now!'
  imageUrl={Television}
  imageAlt='Television'
  imageFirst={true} 
/>

        </div>
    </div>
  )
}

export default Features