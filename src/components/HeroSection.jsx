import React from 'react'

function HeroSection() {
  return (
    <div className="hero-section relative bg-cover bg-center h-screen flex items-start text-white">
      <div className="relative z-10 text-left mt-20 ml-20 leading-10 lg:ml-24 md:ml-16">
        <h1 className="text-5xl sm:text-6xl font-bold my-40 mb-5 md:mb-10 lg:text-7xl">MultiVersus</h1>
        <p className="text-md font-semibold sm:text-2xl mb-8 md:mb-16 md:text-2xl lg:text-4xl">Now officially free to play for all <br/>Xbox users.</p>
        <a href="#" className="bg-blue-600 text-white rounded-md hover:bg-sky-600 hover:animate-pulse px-6 py-3 text-lg ">Git in now!</a>
      </div>
    </div>
  )
}

export default HeroSection