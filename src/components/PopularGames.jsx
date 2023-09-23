import React from 'react';
import img1 from '../public/gta.png';
import img2 from '../public/roblox.png';
import img3 from '../public/nba.png';
import img4 from '../public/deed.png';
import img5 from '../public/arc.png';
import img6 from '../public/rocket.png';
import img7 from '../public/forza.png';
import img8 from '../public/cities.png';

function PopularGames() {
  const games = [
    { id: 1, name: 'GTA V', image: img1 },
    { id: 2, name: 'ROBLOX', image: img2 },
    { id: 3, name: 'NBA 2K22', image: img3 },
    { id: 4, name: 'Dead by Daylight', image: img4 },
    { id: 5, name: 'ARK: Survival Evolved', image: img5 },
    { id: 6, name: 'Rocket League', image: img6 },
    { id: 7, name: 'Forza Horizon 5', image: img7 },
    { id: 8, name: 'Cities: Skylines', image: img8 },
  ];

  return (
    <div className="text-center ml-0">

      <div className="flex justify-between items-center flex-wrap md:flex-no-wrap mb-4">
        <h2 className="font-bold md:text-3xl text-xl mb-2 md:mb-0 md:mr-10 pl-20 lg:pl-24">Popular Games</h2>
        <a href="#" className="text-blue-600 mr-10 xl:pl-36">Browse all games</a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:pl-10 xl:mr-[150px] xl:ml-[170px] mx-10">
        {games.map((game) => (
          <div key={game.id} className="max-w-xs">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img className="w-full h-full p-3 object-cover object-center" src={game.image} alt={game.name} />
              <div className="px-4 py-2">
                <div className="font-bold text-left ml-1 text-xs mb-1">{game.name}</div>
                <div className="flex justify-start ml-1">
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

export default PopularGames;
