import FoodDeliveryPimlico from '@/component/FoodDeliveryPimlico/FoodDeliveryPimlico';
import Footer from '@/component/Footer'
// import Gallery from '@/component/Gallery'
import Header from '@/component/Header'
import OpeningHours from '@/component/OpeningHours/OpeningHours';
import Ourstory from '@/component/OurStory/Ourstory';
import Sidebar from '@/component/Sidebar'
import { useEffect, useState } from 'react';


export default function Home() {
  const [isCollpsed, setIsCollpsed] = useState(false);

  return (
    <main>
      <Header setIsCollpsed={setIsCollpsed} />
      <Sidebar isCollpsed={isCollpsed} setIsCollpsed={setIsCollpsed} />
      <Ourstory></Ourstory>
      <OpeningHours></OpeningHours>
      <FoodDeliveryPimlico></FoodDeliveryPimlico>

      <div className='bg-[#FFF3E6] -mt-9 sm:bg-transparent'>
        <div className={`px-[105px] 2xl:px-[85px] xl:px-[70px] 2lg:px-[65px] lg:px-[50px] md:px-[40px] sm:px-[17px] py-[27px] sm:py-0 mt-[34px] lg:my-[16px] relative`}>
          <div className='flex justify-between items-center lg:flex-col sm:items-start py-[27px] sm:px-[15px] sm:pt-[30px] sm:pb-[56px] sm:bg-[#FFF3E6]'>
            <div className='max-w-[515px] xl:max-w-[400px] text-center sm:text-left'>
              <div className='text-[24px] md:text-[20px] sm:text-[16px] leading-[28px] text-[#344054] font-inter'>Never miss an offer -  sign up for our promos plus enjoy <span className='font-[700]'>20% off</span> your first order</div>
            </div>
            <div className='ml-[20px] lg:ml-0 lg:mt-[20px]'>
              <div className='flex items-center xl:flex-col xl:items-start'>
                <div className='flex items-center xl:w-full'>
                  <div className='xl:w-1/2'>
                    <input type="text" placeholder='First name' className='xl:w-full w-[190px] rounded-[5px] outline-none p-[12px_18px] placeholder:text-[#838E9E]' />
                  </div>
                  <div className='ml-[12px]'>
                    <input type="text" placeholder='Last name' className='xl:w-full w-[190px] rounded-[5px] outline-none p-[12px_18px] placeholder:text-[#838E9E]' />
                  </div>
                </div>
                <div className='ml-[12px] xl:ml-0 xl:mt-[12px] xl:w-full'>
                  <input type="text" placeholder='Email Address' className='xl:w-full w-[190px] rounded-[5px] outline-none p-[12px_18px] placeholder:text-[#838E9E]' />
                </div>
                <div className='ml-[12px] xl:ml-0 xl:mt-[20px] self-center sm:w-full'>
                  <button className='bg-[#136E2B] sm:w-full w-[138px] whitespace-pre text-white h-[48px] px-[20px] rounded-[5px]'>Sign up now</button>
                </div>
              </div>
            </div>
          </div>
          <div className='absolute bottom-5  right-[105px] font-inter text-[#838E9E] text-[12px]'>
            Read our <span className='underline cursor-pointer'>privacy policy</span>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </main>
  )
}
