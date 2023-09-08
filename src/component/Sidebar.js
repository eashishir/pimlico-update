import Link from 'next/link'
import React from 'react'
import { BiLogoFacebook } from 'react-icons/bi'
import { BsChevronDown } from 'react-icons/bs'
import { MdClose } from 'react-icons/md'

const Sidebar = ({ isCollpsed, setIsCollpsed }) => {
    return (
        <>
            <div className={`overflow-auto block px-[17px] py-[12px] ${isCollpsed ? 'translate-y-0' : '-translate-y-[100%]'}  bg-[#11202D] right-0 z-[2040] h-full transition-[0.5s] left-0 fixed top-0 bottom-0 transform  shadow-[0px_2px_4px_0px_rgba(0,0,0,0.15)]`}>
                <div>
                    <div className='flex justify-between items-center'>
                        <img src='/icons/user.svg' />
                        <img src='/image/Logo.svg' className='w-[165px] h-auto' />
                        <MdClose className='text-[28px] text-white' onClick={() => { setIsCollpsed(!isCollpsed) }} />
                    </div>
                    <div className='h-[1px] bg-white opacity-[0.1] my-[12px]'></div>
                </div>
                <div className='overflow-auto'>
                    <div>
                        <div className='px-[24px] py-[16px] mb-[24px] rounded-[4px] text-center'>
                            <Link href={"#"} className="text-white text-[20px]">Home</Link>
                        </div>
                        <div className='px-[24px] py-[16px] mb-[24px] rounded-[4px] text-center'>
                            <Link href={"#"} className="text-white text-[20px]">Offers</Link>
                        </div>
                        <div className='px-[24px] py-[16px] mb-[24px] rounded-[4px] text-center'>
                            <Link href={"#"} className="text-white text-[20px]">Menu</Link>
                        </div>
                        <div className='px-[24px] py-[16px] mb-[24px] rounded-[4px] bg-[#02142E] text-center'>
                            <Link href={"#"} className="text-white  text-[20px]">Gallery</Link>
                        </div>
                        <div className='px-[24px] py-[16px] mb-[24px] rounded-[4px] text-center'>
                            <Link href={"#"} className="text-white text-[20px]">Reviews</Link>
                        </div>
                        <div className='px-[24px] py-[16px] mb-[24px] rounded-[4px] text-center'>
                            <Link href={"#"} className="text-white text-[20px]">About</Link>
                        </div>
                        <div className='px-[24px] py-[16px] mb-[24px] rounded-[4px] text-center'>
                            <Link href={"#"} className="text-white text-[20px]">Contact</Link>
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col'>
                            <div className='h-[1px] w-full bg-white opacity-[0.1] my-[24px]'></div>
                            <div className='flex justify-center items-center'>
                                <div className='w-[32px] h-[32px] rounded-[5px] mx-[16px] grid place-items-center bg-white'>
                                    <BiLogoFacebook className='text-[#1877fb] text-[20px]' />
                                </div>
                                <div className='w-[32px] h-[32px] rounded-[5px] mx-[16px] grid place-items-center bg-white'>
                                    <img src='/icons/tripadvisor-dark.svg' />
                                </div>
                                <div className='w-[32px] h-[32px] rounded-[5px] mx-[16px] grid place-items-center bg-white'>
                                    <img src='/icons/yelp-org.svg' />
                                </div>
                                <div className='w-[32px] h-[32px] rounded-[5px] mx-[16px] grid place-items-center bg-white'>
                                    <img src='/icons/google.svg' />
                                </div>
                                <div className='w-[32px] h-[32px] rounded-[5px] mx-[16px] grid place-items-center bg-white'>
                                    <img src='/icons/yell-icon.svg' />
                                </div>
                            </div>
                            <div className='h-[1px] w-full bg-white opacity-[0.1] my-[24px]'></div>
                        </div>
                        <div className='mt-[16px] self-center mb-[48px] text-center'>
                            <div className='mb-[16px] md:text-center'>
                                <img src='/icons/alert-circle.svg' className='mr-[8px] inline' />
                                <span className='text-[#136E2B] font-[600]'>Allergen info</span>
                            </div>
                            <div className='md:text-center'>
                                <img src='/image/Food-hygeine.svg' className='mr-[8px] w-[24px] h-[24px] inline' />
                                <span className='text-[#136E2B] font-[600]'>Hygiene rating</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`fixed ${isCollpsed ? 'block' : 'hidden'} opacity-40 bg-black z-[2039] inset-0`} onClick={() => { setIsCollpsed(false) }}>
            </div>
        </>
    )
}

export default Sidebar