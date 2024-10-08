import React from 'react';

export default function Navbar() {
  return (
    <footer class="text-gray-600 body-font">
  <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a href="https://santechapihubs.vercel.app/home" class="flex hover:text-violet-500 title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <img src="https://ik.imagekit.io/vituepzjm/Untitled_design__6_-removebg-preview.png?updatedAt=1710598851184" className="w-12 h-12 text-white"  />
      <span class="ml-3 text-xl text-gray-500">SanTechApi Hub </span>
    </a>
    <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 SanTech Api —
      <a href="https://santechh.vercel.app" class="text-gray-600 active:text-violet-400 ml-1" rel="noopener noreferrer" target="_blank">@SanTech</a>
    </p>
  </div>
</footer>
  );
}
