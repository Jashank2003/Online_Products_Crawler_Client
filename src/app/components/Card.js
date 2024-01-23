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
    <div className="max-w-sm mx-auto my-4 overflow-hidden bg-black-400 rounded shadow-lg">
      <img className="w-full h-20 object-contain" src={imageLink} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-sm mb-2 h-10 overflow-y-auto">{title}</div>
        <p className="text-gray-700 text-base">Rs.{price}</p>
        {linkToProduct && (
          <div
            className="cursor-pointer text-blue-500 hover:underline"
            onClick={handleLinkClick}
          >link here
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
