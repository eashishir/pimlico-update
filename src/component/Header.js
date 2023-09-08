import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { BsChevronDown } from 'react-icons/bs'

const Header = (props) => {
    const [isScrolled, setIsScrolled] = useState(false);
    console.log("🚀 ~ file: Header.js:7 ~ Header ~ isScrolled:", isScrolled)

    useEffect(() => {
      const handleScroll = () => {
        const threshold = window.innerWidth <= 767 ? 80 : 80;
        console.log("🚀 ~ file: Header.js:11 ~ handleScroll ~ threshold:", threshold)
        if (window.scrollY > threshold) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
  
    return (
        <header className='h-[700px] 2lg:h-[600px] md:h-auto relative'>
            <div className='h-full absolute top-0 left-0 right-0 bottom-0 z-0 md:hidden'>
                <img src='/image/header-bg.png' className='h-full w-full object-cover' />
            </div>
            <div className='z-[111] h-full relative bg-black bg-opacity-[0.4]'>
                <div className={`px-[105px] 2xl:px-[85px] xl:px-[70px] 2lg:px-[65px] lg:px-[30px] md:px-[40px] sm:px-[17px]`}>
                    <div className='flex justify-between py-[20px] pl-[40px] lg:pl-0 items-center md:hidden'>
                        <div className='ml-[80px] 2lg:ml-0'>
                            <div className='flex justify-center items-center lg:flex-col lg:items-start'>
                                <div className='flex items-center gap-[8px]'>
                                    <img src='/icons/map-pin-small.svg' className='w-[20px] h-[20px]' />
                                    <span className='text-white text-[18px]'>38 Moreton Street, SW1V 2PB </span>
                                </div>
                                <div className='flex items-center gap-[8px] ml-[32px] lg:ml-0'>
                                    <img src='/icons/phone-call.svg' className='w-[20px] h-[20px]' />
                                    <span className='text-white text-[18px]'>0207 834 3375</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex'>
                                <div>
                                    <img src='/image/Food-hygeine.svg' className='w-[34px] h-[34px] mr-[68px] 2lg:mr-[40px] cursor-pointer' />
                                </div>
                                <div className='flex items-center'>
                                    <img src='/icons/fb.svg' className='w-[24px] h-[24px] mx-[8px] cursor-pointer' />
                                    <img src='/icons/tripadvisor.svg' className='w-[24px] h-[24px] mx-[8px] cursor-pointer' />
                                    <img src='/icons/yelp.svg' className='w-[24px] h-[24px] mx-[8px] cursor-pointer' />
                                    <img src='/icons/Google-alt.svg' className='w-[24px] h-[24px] mx-[8px] cursor-pointer' />
                                    <img src='/icons/yell-icon.svg' className='w-[24px] h-[24px] mx-[8px] cursor-pointer' />
                                </div>
                                <div className='flex items-center'>
                                    <div className='ml-[40px] cursor-pointer'>
                                        <img src='/icons/ukFlag.svg' className='inline' />
                                        <BsChevronDown className='text-white text-[18px] ml-2 inline' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`bg-[#11202da6]   ${isScrolled ? 'fixed inset-x-0 top-0':'static'} z-10 `}>
                    <div className={`px-[105px] 2xl:px-[85px] xl:px-[70px] 2lg:px-[65px] lg:px-[35px] md:px-[40px] sm:px-[17px]`}>
                        <div className='py-[20px] flex justify-between items-center sm:p-[15px]'>
                            <div className='hidden md:block'>
                                <img src='/icons/user.svg' className='w-[28px] h-[28px]' />
                            </div>
                            <div>
                                <img src='/image/Logo.svg' className='w-[165px] h-auto' />
                            </div>
                            <div className='h-full md:hidden'>
                                <div className='flex items-center justify-center font-open-sans'>
                                    <div>
                                        <Link href={"#"} className="mx-[18px] relative nav-link text-white hover:text-[#D60000] lg:text-[14px] 2lg:mx-[12px]" >Offers</Link>
                                    </div>
                                    <div>
                                        <Link href={"#"} className="mx-[18px] relative nav-link text-white hover:text-[#D60000] lg:text-[14px] 2lg:mx-[12px]" >Menu</Link>
                                    </div>
                                    <div>
                                        <Link href={"#"} className="mx-[18px] relative nav-link active-link text-white hover:text-[#D60000] lg:text-[14px] 2lg:mx-[12px]" >Gallery</Link>
                                    </div>
                                    <div>
                                        <Link href={"#"} className="mx-[18px] relative nav-link text-white hover:text-[#D60000] lg:text-[14px] 2lg:mx-[12px]" >Reviews</Link>
                                    </div>
                                    <div>
                                        <Link href={"#"} className="mx-[18px] relative nav-link text-white hover:text-[#D60000] lg:text-[14px] 2lg:mx-[12px]" >About</Link>
                                    </div>
                                    <div>
                                        <Link href={"#"} className="mx-[18px] relative nav-link text-white hover:text-[#D60000] lg:text-[14px] 2lg:mx-[12px]" >Contact</Link>
                                    </div>
                                    <div className='ml-[36px] 2lg:ml-[18px] flex 2lg:flex-col'>
                                        <button className='bg-[#344054] rounded-[5px] text-white py-[8px] px-[20px] 2lg:px-[10px] 2lg:text-[14px] whitespace-pre'>Book a Table</button>
                                        <button className='bg-[#D60000] ml-[12px] 2lg:ml-0 2lg:mt-[12px] rounded-[5px] text-white py-[8px] px-[20px] 2lg:px-[10px] 2lg:text-[14px]'>Order Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className='hidden md:block'>
                                <img src='/icons/hamburger icon.svg' className='w-[44px] h-[44px]' onClick={() => { props?.setIsCollpsed(true) }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-[calc(100%_-_157px)] 2lg:h-[calc(100%_-_200px)] grid place-items-center md:hidden'>
                    <div className='text-white text-[96px] 2lg:text-[76px] sm:text-[40px] font-bebas'>Gallery</div>
                </div>
                <div className='relative hidden md:block'>
                    <img src='/image/header-bg.png' />
                    <div className=' absolute font-bebas text-[40px] inset-0 grid place-items-center text-white sm:text-[40px]'>
                        Gallery
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header