import React from 'react';
import callofduty from '../public/callofduty.png'
import NBA2K2 from '../public/nba2k.png'
import fifa23 from '../public/fifa23.png'
import resident from '../public/residentevil.png'
import alien from '../public/alien.png'

function ComingSoon() {
  return (


      <div className='bg-black mt-10'>
      <div className="bg-black text-white text-left pl-16 pt-10">
      <h2 className="text-3xl font-bold mt-5 mb-[-30px]">Coming Soon</h2>
      </div>
    <div className="bg-black text-white text-center md:px-8 lg:px-12 grid md:grid-cols-2 gap-8">
      <div className="grid grid-cols-1 grid-rows-2 gap-6 md:gap-4 py-20  h-[1080px] ml-20 px-6 md:px-2">
        <div className="relative">
          <img
            src={callofduty}
            alt="Coming Soon 1"
            className="w-full h-full object-cover rounded-md"
          />
          <div className="absolute md:bottom-4 left-28 bottom-10 md:left-28 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <div className="text-xl font-bold mb-2">Call of Duty</div>
            <button className="border border-white text-white font-bold text-sm py-1 px-2 lg:py-3 lg-px5 rounded-md">
              Pre-order now!
            </button>
          </div>
        </div>
        <div className="relative">
          <img
            src={NBA2K2}
            alt="Coming Soon 2"
            className="w-full h-full object-cover rounded-md"
            />
          <div className="absolute  md:bottom-4 left-28 bottom-10 md:left-28  -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <div className="text-xl font-bold mb-2">NBA 2K2</div>
            <button className="border border-white text-white font-bold text-sm py-1 px-2 lg:py-3 lg-px5 rounded-md">
              Pre-order now!
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 grid-rows-3 h-[1080px] py-20 gap-6 md:gap-4 mr-20 px-6 md:px-2">
        <div className="relative">
          <img
            src={fifa23}
            alt="Coming Soon 3"
            className="w-full h-full object-cover rounded-md"
          />
          <div className="absolute  md:bottom-4 left-28 bottom-10 md:left-28  -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <div className="text-xl font-bold mb-2">FIFA 23</div>
            <button className="border border-white text-white font-bold text-sm py-1 px-2 lg:py-3 lg-px5 rounded-md">
              Pre-order now!
            </button>
          </div>
        </div>
        <div className="relative">
          <img
            src={resident}
            alt="Coming Soon 4"
            className="w-full h-full object-fit rounded-md"
            />
          <div className="absolute  md:bottom-4 left-28 bottom-10 md:left-28  -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <div className="text-xl font-bold mb-2">Resident Evil</div>
            <button className="border border-white text-white font-bold text-sm py-1 px-2 lg:py-3 lg-px5 rounded-md">
              Pre-order now!
            </button>
          </div>
        </div>
        <div className="relative">
          <img
            src={alien}
            alt="Coming Soon 5"
            className="w-full h-full object-cover rounded-md"
            />
          <div className="absolute  md:bottom-4 left-28 bottom-10 md:left-28  -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <div className="text-xl font-bold mb-2">Alien</div>
            <button className="border border-white text-white font-bold text-sm py-1 px-2 lg:py-3 lg-px5 rounded-md">
              Pre-order now!
            </button>
          </div>
        </div>
      </div>
    </div>
    
            </div>
  );
}

export default ComingSoon;
