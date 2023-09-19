import React from 'react';


const OpeningHours = () => {
    return (
        <div className='bg-gray-100 mt-5 '>
            <div className=" container mx-auto pt-10 px-5 py-2 lg:px-32 sm:col-span-1  ">
                <div>
                    <h1 className='text-center  font-bebas text-[30px]  grid place-items-center  sm:text-[40px]'>OPENING HOURS</h1>
                    <h2 className='text-center mt-4 font-medium '>Monday-Sunday</h2>
                   <div className='flex justify-center '>
                   <hr className=' mt-3 w-[30%]' />
                   </div>

                    <div className='pt-5 tab-border-2 font-medium'>

                        <div className=' flex justify-center gap-72'>
                            <h1 className=''>Lunch</h1>
                            <h1 className='lg:pl-24'>12.00-14.30</h1>
                        </div>
                        <div className='flex justify-center gap-72 m-2'>
                            <h1>Dinner</h1>
                            <h2 className=' lg:pl-24'>17.00-23.30</h2>
                        </div>
                        <hr  />
                    </div>
                    <div className=' flex  lg:pr-8 justify-center gap-8  pt-5'>
                    <div className=' text-xs '>
                            <img src='/icons/shopping-bag.svg' alt='' className='mb-1 ml-3 w-[20px]' />
                            <span className='lg:pl-12 '>Collection <br /> <span className=' lg:pl-12'>Takeout</span></span>

                        </div>
                        <div className='text-xs' >
                            <img src='/icons/delivery-icon-bike.svg' alt='' className='mb-1 ml-14  w-[20px]' />
                            <span className='pl-12  '>Delivery</span>
                        </div>
                        <div className='text-xs' >
                            <img src='/icons/table-order-icon.svg' alt='' className='mb-1 ml-14 lg:ml-14 w-[20px]' />
                            <span className='pl-10 lg:pl-10'>Dine-in pre <br /><span className='p-14 lg:pl-14'>oder</span></span>
                        </div>
                        <div className='text-xs' >
                            <img src='/icons/calendar_month.svg' alt='' className='mb-1 ml-4 w-[20px]' />
                            <span className=' lg:pl-10'>Book Table </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OpeningHours;