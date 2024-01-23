"use client"
// components/Card.js
// components/Card.js
import React from 'react';

const Card = ({ title, price, imageLink, linkToProduct }) => {
  const handleLinkClick = () => {
    if (linkToProduct) {
      // Construct the Amazon URL and open it in a new tab
      const amazonUrl = `https://www.amazon.in${linkToProduct}`;
      window.open(amazonUrl, '_blank');
    }
  };

  return (
    <div class="max-w-sm mx-auto my-4 overflow-hidden bg-gray-800 text-white rounded-lg shadow-md transition duration-300 transform hover:scale-105 hover:shadow-md hover:shadow-green-400 ">
  <img class="w-full h-20  overflow-visible object-contain pt-2 transition transform duration-300 delay-500 z-10 hover:scale-125" src={imageLink} alt={title} />
  <div class="px-6 py-4">
    <div class="font-bold text-sm mb-2 h-10 overflow-y-auto">{title}</div>
    <p class="text-white-700 text-base">Rs.{price}</p>
    {linkToProduct && (
      <div
        class="cursor-pointer text-blue-500 hover:underline"
        onClick={handleLinkClick}
      >
        link here
      </div>
    )}
  </div>
</div>


  );
};

export default Card;
