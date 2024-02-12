"use client"

import Image from 'next/image'
import SidebarMenuItem from './SidebarMenuItem'
import { BsChatLeft } from "react-icons/bs";
import { TbChartInfographic } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { useState } from 'react';
import { LuCalendarDays } from "react-icons/lu";
import { MdOutlineLightMode } from "react-icons/md";
import { useTheme } from 'next-themes';
import { IoMoonSharp } from "react-icons/io5";

const SideNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const { theme, setTheme } = useTheme();

  const [data, setData] = useState({
    today: [
      { id: '1', text: 'Example Prompt 1 for Today' },
      { id: '2', text: 'Example Prompt 2 for Today' },
    ],
    yesterday: [
      { id: '1', text: 'Example Prompt 1 for Yesterday' },
      { id: '2', text: 'Example Prompt 2 for Yesterday' },
    ],
    'previous 7 days': [
      { id: '1', text: 'Example Prompt 1 for Previous 7 Days' },
      { id: '2', text: 'Example Prompt 2 for Previous 7 Days' },
    ],
    'previous 30 days': [
      { id: '1', text: 'Example Prompt 1 for Previous 30 Days' },
      { id: '2', text: 'Example Prompt 2 for Previous 30 Days' },
    ],
  });

  const days = ['today', 'yesterday', 'previous 7 days', 'previous 30 days'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="">
      <div className='flex bg-[#101828] flex-col p-2 items-start xl:w-1/5 fixed md:w-[43%] w-mobile-70 h-full z-40'>
        <div className="hoverEffect p-0 xl:px-3  md:ml-4 xl:pb-3 xl:pt-1">
          <Image src="/BharatGPTLogo.png" className='mx-auto' height="50" width="130"></Image>
        </div>

        <div className='mt-4 md:ml-4'>
          <SidebarMenuItem text="Chat History" Icon={BsChatLeft} />
        </div>

        <div className='mt-4 overflow-y-auto overflow-x-hidden max-h-96 custom-scrollbar'>
          {days.map((day) => (
            <div key={day} className='mb-4 '>
              <div className='flex items-center border-t-2 w-full pt-2 justify-start md:ml-4 opacity-30 xl:justify-start text-sm space-x-3 '>
                <LuCalendarDays className='sm:inline' />
                <button className='' onClick={() => setSelectedDay(day)}>
                  {day}
                </button>
              </div>
              {(selectedDay === null || selectedDay === day) && (
                <div className='md:ml-4'>
                  {data[day] ? (
                    data[day].map((prompt) => (
                      <div key={prompt.id} className='mb-1'>{prompt.text}</div>
                    ))
                  ) : (
                    <div>No data available for {day}</div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className='mt-auto'>
          <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-2 text-white mt-auto mb-4 rounded-xl hidden xl:block">
            <button className=' w-full hover:bg-opacity-50  font-semibold py-2 px-4 text-white rounded'>Upgrade now</button>
          </div>

          <div className="flex md:ml-4 justify-start" onClick={toggleDropdown}>
            <img src="/profile.png" className="h-10 w-10 rounded-full xl:mr-2" alt="user-image" />
            <div className="leading-5 md:ml-4 ml-4">
              <h4 className="font-bold">BharatChat</h4>
              <p className=''>bharatchat@gmail.com</p>
            </div>
            <TbLogout className="text-4xl xl:ml-4 hidden xl:inline" />
          </div>

          {isOpen && (
            <div className="origin-top-right relative right-0 lg:ml-2 mt-2 lg:w-64 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className='bg-[#2E274A] rounded-md w-full'>
                <div className=" h-[52px] flex items-center cursor-pointer w-full justify-start ml-4 xl:justify-start text-lg space-x-3">
                  <TbChartInfographic className="text-2xl" />
                  <span className="xl:inline">support</span>
                </div>
                <div className=" h-[52px] flex items-center cursor-pointer w-full justify-start ml-4 xl:justify-start text-lg space-x-3">
                  <IoSettingsOutline className="text-2xl" />
                  <span className="xl:inline">Settings</span>
                </div>
                <div className="  flex items-center w-full cursor-pointer justify-start ml-4 xl:justify-start text-lg space-x-3" onClick={toggleDarkMode}>
                  {theme === 'dark' ? <MdOutlineLightMode className="text-2xl"/> : <IoMoonSharp className="text-2xl"/>}
                  <span className="xl:inline">{theme === 'dark' ? 'Light' : 'Dark'}</span>
                </div>
                <div className=" h-[52px] flex items-center cursor-pointer w-full justify-start ml-4 xl:justify-start text-lg space-x-3">
                  <TbLogout className="text-2xl" />
                  <span className="xl:inline">Logout</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div >
    </div>

  )
}

export default SideNavbar