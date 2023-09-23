import React, { useRef } from 'react';
import img1 from '../public/minecraft.png';
import img2 from '../public/asphalt.png';
import img3 from '../public/witcher.png';
import img4 from '../public/survingmars.png';
import img5 from '../public/wolf.png';
import img6 from '../public/walkingdead.png';

function BestSeller() {
  const products = [
    { id: 1, name: 'Minecraft', image: img1 },
    { id: 2, name: 'Asphalt 9: Legends', image: img2 },
    { id: 3, name: 'The Witcher 3', image: img3 },
    { id: 4, name: 'Surviving Mars', image: img4 },
    { id: 5, name: 'The Wolf Among Us', image: img5 },
    { id: 6, name: 'The Walking Dead', image: img6 },
  ];

  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col justify-center text-center max-w-7xl mx-2 mb-8 overflow-y-auto">
      <div className="flex justify-between items-center flex-wrap md:flex-no-wrap mb-4">
        <h2 className="font-bold text-3xl mb-2 md:mb-0 md:mr-4 px-10 ml-3">Best Seller</h2>
      </div>
      <div ref={containerRef} className="flex ml-10 overflow-x-auto relative">
        {products.map((product) => (
          <div key={product.id} className="w-64 mx-2 p-2 flex-shrink-0 flex-grow-0">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img className="w-full h-full object-cover object-center" src={product.image} alt={product.name} />
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
      <div className="flex justify-center mt-4">
        <div className="cursor-pointer text-4xl mx-2" onClick={scrollLeft}>
          &lt;
        </div>
        <div className="cursor-pointer text-4xl mx-2" onClick={scrollRight}>
          &gt;
        </div>
      </div>
    </div>
  );
}

export default BestSeller;
