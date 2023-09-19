import React from 'react';
// import offer from "../../../assets/images/Order now button small.svg"

const FoodDeliveryPimlico = () => {
    return (

    <div className="bg-white  ml-7    dark:bg-gray-900  ">
            <div className="flex   max-w-screen-xl   mx-auto lg:gap-8 xl:gap-0 lg:py-16 ">
                <div className=" mr-auto pl-10 place-self-center lg:col-span-6">
                    <h1 className="font-bebas  mb-4 text-[30px]  sm:text-[40px]  dark:text-white">FOOD DELIVERY IN PIMLICO</h1>
                    <p className='text-sm' >
                        Looking for food delivery in London? Not everybody knows or has the time to prepare tasty food.</p> <br />
                    <p className=' text-sm -mt-3' >When you want to get served like a king then food delivery from Pimlico Tandoori will be your best choice.</p> <br />
                    <p  className=' text-sm -mt-3'>Simply select “Delivery” at the checkout screen and we hope you’ll appreciate our food delivery service.</p>

                    <div>
                        <h1 className=" font-bebas mt-2 mb-4 text-[30px]  sm:text-[40px]  dark:text-white">DElIVERY FEE</h1>
                        <div>
                            <p className='text-sm mb-1'>🟢<span className='font-semibold pl-1'>Zone 1</span>, Min order - £20.00, Delivery Fee - £1.95</p>
                            <p className='text-sm'>🔴<span className='font-semibold pl-1'>Zone 2</span>,Min order - £20.00, Delivery Fee - £2.45</p>
                            <img src='/icons/Order now button small.svg' alt='' className=' mt-3 mb-10  ml-32 w-32' />
                        </div>
                    </div>
                </div>
                <div className="  pl-6 lg:mt-0  rounded-lg">
                    <img src="https://i.ibb.co/QrdzT8w/map-zone.jpg" alt="mockup" className=" lg:-mt-16  rounded" />
                </div>
            </div>
        </div>
    );
};

export default FoodDeliveryPimlico;