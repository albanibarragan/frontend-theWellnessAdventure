import React from 'react';
import imageData from '../data/imageData';

export const Activities = () => {
  return (
    <div className="container mx-auto px-4 py-8">
     <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
    </div>
      <div className="grid grid-cols-3 gap-4">
        {imageData.map((imageData) => (
          <img
            key={imageData.src}
            src={imageData.src}
            alt={imageData.alt}
            className="w-600 h-500 rounded shadow-md object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default Activities;
  
