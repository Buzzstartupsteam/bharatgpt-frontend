import { MdSend, MdMic } from 'react-icons/md';
import { CiTextAlignLeft } from "react-icons/ci";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { IoWarningOutline } from "react-icons/io5";

export default function Home() {
  return (
    <div className='h-dvh bg-white text-black dark:text-white dark:bg-gradient-to-br from-[#262F43] via-[#3B445E] to-[#272848] lg:fixed relative md:relative rounded-3xl shadow-lg'>
      <div className='flex flex-col h-full justify-center items-center'>
        <div className='mt-auto'>
          <img
            src="/BharatGPTLogo.png"
            alt="Your Image"
            className="mx-auto my-auto w-44 h-14 hidden lg:block md:block"
          />
          <p className="text-lg mt-4 text-center">
            Explore Deeper Insights, Engage in Meaningful Discussions,
          </p>
          <p className="text-lg text-center">
            and Unlock New Possibilities with BharatChat
          </p>
        </div>

        <div className="hidden lg:flex space-x-4 mt-4 mx-12">
          <div className="flex-1 dark:bg-[#383F5A] dark:text-white p-4 rounded-lg shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <span className="text-2xl mr-2 text-white  p-2 rounded-md bg-[#3a48c6]"><CiTextAlignLeft /></span> {/* Your left-side icon */}
                <h2 className="text-xl font-semibold ">Example</h2> {/* Your heading */}
              </div>
            </div>
            <p className=" dark:text-white p-2 dark:bg-[#616570] rounded-md shadow-lg mb-2">"Tell me about the history of Taj Mahal"</p>
            <p className=" dark:text-white p-2 dark:bg-[#616570] rounded-md shadow-lg mb-2">"Calculate the derivative of the function y = 3x*2 +2x - 1"</p>
            <p className=" dark:text-white p-2 dark:bg-[#616570] rounded-md shadow-lg mb-2">"What news happened in the world today?"</p>
          </div>

          <div className="flex-1 dark:bg-[#383F5A] dark:text-white p-4 rounded-lg shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <span className="text-2xl mr-2 text-white  p-2 rounded-md bg-[#3a48c6]"><MdOutlineRocketLaunch /></span>
                <h2 className="text-xl font-semibold">Capabilities</h2>
              </div>
            </div>
            <p className=" dark:text-white p-2 dark:bg-[#616570] rounded-md shadow-lg mb-2">"Supports user-provided follow-up corrections"</p>
            <p className=" dark:text-white p-2 dark:bg-[#616570] rounded-md shadow-lg mb-2">"Programmed to reject inappropriate solicitations"</p>
            <p className=" dark:text-white p-2 dark:bg-[#616570] rounded-md shadow-lg mb-2">"Retains previous user inputs during the ongoing conversation"</p>
          </div>

          <div className="flex-1 dark:bg-[#383F5A] dark:text-white p-4 rounded-lg shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <span className="text-2xl mr-2 text-white  p-2 rounded-md bg-[#3a48c6]"><IoWarningOutline /></span>
                <h2 className="text-xl font-semibold">Limitations</h2>
              </div>
            </div>
            <p className=" dark:text-white p-2 dark:bg-[#616570] rounded-md shadow-lg mb-2">"May sometimes produce inaccurate or erroneous data"</p>
            <p className=" dark:text-white p-2 dark:bg-[#616570] rounded-md shadow-lg mb-2">"Might create harmful or biased content at times"</p>
            <p className=" dark:text-white p-2 dark:bg-[#616570] rounded-md shadow-lg mb-2">"Limited awareness of post-2021 world events"</p>
          </div>
        </div>

        <div className="mt-auto flex justify-center lg:w-3/4 sm:w-11/12 md:w-11/12 space-x-4 mb-4">
          <div className="flex items-center  w-11/12 rounded-l-md dark:text-white shadow-md">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full dark:bg-[#616570]  p-2 outline-none rounded-l dark:text-white"
            />
            <button className="dark:bg-[#616570] rounded-r-md shadow-r-md dark:text-white p-3">
              <MdSend />
            </button>
          </div>
          <button className="bg-white text-black border py-2 px-3 rounded">
            <MdMic />
          </button>
        </div>
        <div>
          <p className='text-[14px] mb-4 text-center w-11/12 lg:w-full mx-auto'>
            Free Research Preview. BharatChat may produce inaccurate information about people, places, or facts, BharatChat 1.0 Version
          </p>
        </div>
      </div>
    </div>
  )
}
