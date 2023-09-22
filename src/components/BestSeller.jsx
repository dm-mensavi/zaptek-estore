import React from 'react';
import img1 from '../public/minecraft.png';
import img2 from '../public/asphalt.png';
import img3 from '../public/witcher.png';
import img4 from '../public/survingmars.png';

function BestSeller() {
  const products = [
    { id: 1, name: 'Minecraft', image: img1 },
    { id: 2, name: 'Asphalt 9: Legends', image: img2 },
    { id: 3, name: 'The Witcher 3', image: img3 },
    { id: 4, name: 'Surviving Mars', image: img4 },
  ];

  return (
    <div className="flex flex-col justify-between text-center max-w-7xl mx-auto mb-8">

      <div className="flex justify-between items-center flex-wrap md:flex-no-wrap mb-4">
        <h2 className="font-bold text-3xl mb-2 md:mb-0 md:mr-4 px-10"> Best Seller</h2>
        <a href="#" className="text-blue-600 px-10 ">See all genres</a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-10">
        {products.map((product) => (
          <div key={product.id} className="max-w-xs mb-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img className="w-full h-full p-3 object-cover object-center" src={product.image} alt={product.name} />
              <div className="px-4 py-2">
                <div className="font-bold text-sm mb-1 text-left">{product.name}</div>
                <div className="flex justify-start">
                  <a href="#" className="text-xs bg-indigo-200 hover:bg-blue-200 text-indigo-700 font-bold py-1 px-2 rounded">
                    Free Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestSeller;
