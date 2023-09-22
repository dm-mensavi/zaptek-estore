import React from 'react';
import img1 from '../public/strategy.png'
import img2 from '../public/fpx.png'
import img3 from '../public/rpg.png'
import img4 from '../public/puzzle.png'
import img5 from '../public/roleplaying.png'
import img6 from '../public/fifa.png'
function GameGenres() {
  const genres = [
    { name: 'Strategy', image: img1 },
    { name: 'FPS', image: img2 },
    { name: 'RPG', image: img3 },
    { name: 'Puzzle', image: img4 },
    { name: 'Role Playing', image: img5},
    { name: 'Sports', image: img6 },
  ];

  return (
    <div className="text-center">

      <div className="flex justify-between items-center flex-wrap md:flex-no-wrap mb-4">
        <h2 className="font-bold text-3xl mb-2 md:mb-0 md:mr-4 px-10">Games Genres</h2>
        <a href="#" className="text-blue-600 px-10 ">See all genres</a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mt-8 mx-10">
        {genres.map((genre, index) => (
          <div className="relative group" key={index}>
            <img src={genre.image} alt={genre.name} className="w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 object-cover rounded-md" />
            {/* <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20  transition duration-300 rounded-md w-40 h-40 sm:w-44 sm:h-44 md:w-26 md:h-26"></div> */}
            <p className="absolute box-border rounded-md w-34 h-34 sm:w-44 sm:h-44 md:w-48 md:h-48 inset-0 flex items-center font-semibold justify-center text-2xl bg-[#00000042] text-white opacity-0 group-hover:opacity-100 transition duration-300">
              {genre.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameGenres;
