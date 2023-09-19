import React from 'react';

const Ourstory = () => {
    return (
        <div>
            <div className='sm:text-sm text-center mt-28'>
                <p>Welcome to Pimlico Tandoori, a family-run restaurant located in the heart of Pimlico, London. We have been <br /> serving delicious, authentic Indian cuisine since 1975, and we are proud to be one of the oldest Indian <br /> restaurants in the area. <br /></p>
                <p className='mt-5'>
                    Our menu features a wide range of dishes, from classic curries to tandoori specialties, all made with the <br /> freshest ingredients and traditional Indian spices. We also offer a variety of vegetarian and vegan options, as <br /> well as gluten-free dishes.</p>
                    <div className='sm:display-none` ml-44'>
                    <hr className='  mt-14 w-[90%]' />
                    </div>
            </div>
          






            <div className="bg-white ml-10 mr-10   dark:bg-gray-900  ">
                <div className="flex  max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 ">
                    <div className="  pl-5 lg:mt-0   rounded-lg">
                        <img src="/image/img-aboutus.png" alt="mockup" className=" lg:-mt-16 w-[500px] rounded-lg" />
                    </div>
                    <div className=" mr-auto pl-10 place-self-center lg:col-span-6">
                        <h1 className=" mb-3 font-inter font-semibold  text-[30px]  sm:text-[40px]  dark:text-white">Our Story</h1>
                        <p >
                            We are a family-owned restaurant located at 38 Moreton Street in the heart of <br /> Pimlico, London. Our restaurant has been serving up authentic Indian cuisine sinc <br /> 1975, and we take pride in offering a warm and friendly atmosphere where our <br />customers can enjoy delicious food and great service.</p> <br />
                        <p className='' >At Pimlico Tandoori, we are committed to providing our customers with a warm and <br /> welcoming dining experience.</p>


                        <div className='mt-16  2lg:ml-[18px] flex 2lg:flex-col'>
                            <button className='bg-[#344054] rounded-[5px] text-white py-[8px] px-[20px] 2lg:px-[10px] 2lg:text-[14px] whitespace-pre'>Book a Table</button>
                            <button className='bg-[#D60000] ml-[12px] 2lg:ml-0 2lg:mt-[12px] rounded-[5px] text-white py-[8px] px-[20px] 2lg:px-[10px] 2lg:text-[14px]'>Order Now</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Ourstory;