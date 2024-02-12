"use client"

import { Inter } from 'next/font/google'
import './globals.css'
import SideNavbar from '@/components/SideNavbar'
import { FaRegEdit } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import React, { useEffect, useState } from 'react';
// import { RxCross2 } from "react-icons/rx";
// import { HiOutlineArrowsRightLeft } from "react-icons/hi2";
import { BiSolidRightArrow } from "react-icons/bi";
import Providers  from './provider';

const inter = Inter({ subsets: ['latin'] })

//  export const metadata = {
//   title: 'BharatGpt',
//   description: 'This is bharatGpt',
// }

export default function RootLayout({ children }) {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const checkScreenWidth = () => {
    if (window.innerWidth > 768) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);
    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);


  return (
    <html lang="en" className="dark">
      <body >
        <Providers>
          <div className=" dark:bg-gradient-to-br from-[#2C1B46] via-[#101828] to-[#101828] text-white min-h-screen bg-white">
            <div className={`lg:hidden flex items-center justify-between fixed w-full z-10 p-4 overflow-y-hidden bg-gray-800 text-white ${isOpen ? 'main-div-navbar-open transition-transform duration-1000 main-mobile-div-navbar-open' : 'main-div'}`}>
              <button className="text-4xl text-white" onClick={toggleDropdown}><FaBars /></button>
              <div className="flex items-center space-x-4">
                <img src="/BharatGPTLogo.png" alt="Logo" className="h-10 w-32" />
              </div>
              <button className="text-4xl"><FaRegEdit /></button>
            </div>
            <div className='flex md:flex-row'>
              {isOpen && (
                <aside className={`lg:w-1/5 md:w-1/2 z-10 shadow-white`}>
                  <SideNavbar />
                  {/* <button className='lg:hidden fixed z-20 md:hidden left-80 border text-5xl bg-[#101828]' onClick={toggleDropdown}>
                  <RxCross2 />
                </button> */}
                  <button className='hidden lg:hidden md:hidden fixed z-20 left-80 top-96 border text-2xl py-3 bg-[#101828]' onClick={toggleDropdown}>
                    <BiSolidRightArrow />
                  </button>

                </aside>
              )}
              <main className={`flex-1 w-full h-dvh p-2 flex flex-col  ${isOpen ? 'main-div-open transition-transform duration-1000 main-mobile-div-open' : 'main-div'}`}>
                {children}
              </main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
