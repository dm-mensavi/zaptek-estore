import React from 'react'
import {IoGameController, IoLogoXbox} from 'react-icons/io5' 
import {RiCheckboxCircleFill} from 'react-icons/ri'

function FeaturesSection() {
  return (
    <div className="features-section flex flex-col items-center justify-center my-24">
      <h2 className="font-bold text-3xl mb-4 text-center md:font-black md:text-4xl">Why eXStore?</h2>
      <p className="mb-8 text-center ml-24 mr-24 w-screen px-0 md:text-lg">We are the official Xbox partner in Indonesia that provides official video games.</p>

      <div className="items-center flex flex-col gap-7  sm:flex-row justify-center mx-8 ">
        <div className="w-25 h-30 flex-col items-center justify-center flex">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-indigo-200 flex justify-center items-center rounded-full">
            <IoGameController size={40} fill='blue'/>
          </div>
          <p className="text-center mt-2 px-4 font-medium">5000+ video games available</p>
        </div>

        <div className="w-25 h-30 flex-col items-center justify-center flex">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-indigo-200 flex justify-center items-center rounded-full">
            <RiCheckboxCircleFill size={40} fill='blue'/>
          </div>
          <p className="text-center mt-2 px-4 font-medium">Trusted by 100,000+ customers</p>
        </div>

        <div className="w-25 h-30 flex-col items-center justify-center flex">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-indigo-200 flex justify-center items-center rounded-full">
            <IoLogoXbox size={40} fill='blue'/>
          </div>
          <p className="text-center mt-2 px-4 font-medium">Available for all Xbox consoles</p>
        </div>
      </div>
    </div>
  )
}

export default FeaturesSection