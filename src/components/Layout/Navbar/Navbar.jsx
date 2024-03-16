import React from 'react';

export default function Navbar() {
  return (
    <div className="flex items-center justify-between w-full md:pl-10">
      <span className="flex items-center justify-center md:justify-start">
        <img
          className="w-14 h-14"
          alt="Logo"
          src="https://ik.imagekit.io/vituepzjm/Untitled_design__6_-removebg-preview.png?updatedAt=1710598851184"
        />
        <h1 className="py-4 px-2  hidden md:inline-flex items-center text-xl md:text-2xl font-semibold text-violet-500 gap-2">
          SanTech Api Hub
          <span className="bg-violet-500 scale-90 mt-1 text-white px-3 text-base py-2 rounded-full"> Testing Tool</span>{' '}
        </h1>

        <h1 className="py-4  md:hidden inline-flex items-center text-xl md:text-2xl font-semibold text-violet-500 gap-2"> 
          <span className="bg-violet-500 scale-90 mt-1 text-white px-3 text-base py-2 rounded-full"> SanTech API Testing Tool</span>{' '}
        </h1>
      </span>
      <span className="flex items-center justify-center md:justify-start">
        <a href="https://santechapihubs.vercel.app/home" className="">
        <button class="group overflow-hidden w-12 hover:sm:w-44 h-10 hover:bg-violet-600 relative bg-violet-700 rounded text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6 before:bg-violet-700 before:hover:bg-violet-600 before:rotate-45">
          <i className="fas fa-arrow-right-from-bracket ml-1 text-xl"></i>
          <span class="origin-left hidden md:inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all">
           API{' '}Dashboard
          </span>
        </button>
        </a>
      </span>
    </div>
  );
}
