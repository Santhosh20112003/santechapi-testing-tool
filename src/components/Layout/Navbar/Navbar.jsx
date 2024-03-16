import React from 'react';

export default function Navbar() {
  return (
    <div className='flex items-center justify-center md:justify-start w-full md:pl-10'>
     <img className='w-12 h-12' alt='Logo' src='https://ik.imagekit.io/vituepzjm/Untitled_design__6_-removebg-preview.png?updatedAt=1710598851184' />
      <h1 className="py-4 px-2 inline-flex items-center text-xl md:text-2xl font-semibold text-violet-500 gap-2">SanTech Api Hub<span className="bg-violet-500 scale-90 mt-1 text-white px-3 text-base py-2 rounded-full"> Testing Tool</span> </h1>
    </div>
  );
}
