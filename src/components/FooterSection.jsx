import React from 'react';
import { BsInstagram, BsYoutube, BsTwitch, BsTwitter } from 'react-icons/bs';

function FooterSection() {
  return (
    <footer className="bg-black text-white px-8 py-8 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-10">
        <div className="col-span-1 md:col-span-2 lg:col-span-1 ml-10">
          <span className='text-white font-extrabold'>
            <b className='font-black text-xl text-indigo-700'>eX</b>Store
          </span>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Menu</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-white">Order tracking</a></li>
            <li><a href="#" className="text-gray-600 hover:text-white">Store location</a></li>
            <li><a href="#" className="text-gray-600 hover:text-white">Return policy</a></li>
            <li><a href="#" className="text-gray-600 hover:text-white">Support</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-white">Blog</a></li>
            <li><a href="#" className="text-gray-600 hover:text-white">Help center</a></li>
            <li><a href="#" className="text-gray-600 hover:text-white">Documentation</a></li>
            <li><a href="#" className="text-gray-600 hover:text-white">Guidelines</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Follow us on</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-white"><BsInstagram /></a>
            <a href="#" className="text-gray-600 hover:text-white"><BsYoutube /></a>
            <a href="#" className="text-gray-600 hover:text-white"><BsTwitch /></a>
            <a href="#" className="text-gray-600 hover:text-white"><BsTwitter /></a>
          </div>
        </div>
      </div>
      <p className="text-sm text-center text-gray-600 mt-10">&copy; 2022 Exstore</p>
    </footer>
  );
}

export default FooterSection;
