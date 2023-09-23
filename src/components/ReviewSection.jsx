import React, { useState } from 'react';
import jacobImg from '../public/jacob.png';
import cameronImg from '../public/cameron.png';
import kristinImg from '../public/cristin.png';
import { LiaStarSolid } from 'react-icons/lia';

function ReviewSection() {
  const [activeCard, setActiveCard] = useState(0);

  const reviews = [
    {
      id: 1,
      name: 'Jacob Jones',
      stars: 4,
      image: jacobImg,
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut a aliqua.',
    },
    {
      id: 2,
      name: 'Cameron Williamson',
      stars: 5,
      image: cameronImg,
      review:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 3,
      name: 'Kristin Watson',
      stars: 4,
      image: kristinImg,
      review:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
  ];

  return (
    <div className="text-center my-20">
      <h2 className="font-bold text-3xl mb-4 text-center md:font-black md:text-4xl">
        12.000+ gamers satisfied
      </h2>
      <p className="mb-8 text-center mr-4 md:mr-24 w-full px-0 md:text-lg">
        Let's hear what our customers have to say about their <br /> satisfaction
        with our services and products
      </p>

      <div className="flex flex-row items-center justify-center space-y-6 my-10">
        {reviews.map((review, index) => (
          <div
            key={review.id}
            className={`rounded-lg p-4 mx-10 w-60 bg-white ${
              index === activeCard ? 'transform scale-110' : ''
            }`}
            onClick={() => setActiveCard(index)}
          >
            <div className="mb-4">
              <div className="w-20 h-20 rounded-full mx-auto overflow-hidden">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-xl font-bold mt-2">{review.name}</div>
              <div className="flex justify-center mt-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <LiaStarSolid
                    key={i}
                    fill={i < review.stars ? '#ffd000' : '#ffd82a44'}
                    className="w-5 h-5 mx-1"
                  />
                ))}
              </div>
            </div>
            <div className="text-center">{review.review}</div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4 mb-20">
        {reviews.map((_, index) => (
          <div
            key={index}
            onClick={() => setActiveCard(index)}
            className={`w-2 h-2 mx-2 rounded-full ${
              index === activeCard ? 'bg-indigo-600' : 'bg-indigo-200'
            } cursor-pointer`}
          />
        ))}
      </div>
    </div>
  );
}

export default ReviewSection;
