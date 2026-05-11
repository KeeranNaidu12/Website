import React from 'react'

export default function NavBar(){
    return (
      <div className="sticky top-0 z-50 flex justify-center px-3 sm:px-6 pt-3 sm:pt-6 pb-3 sm:pb-6">
        <nav className="flex flex-row items-center justify-between gap-2 sm:gap-4 md:gap-8 w-full max-w-6xl px-3 sm:px-6 md:px-10 py-2 sm:py-3 md:py-4 rounded-full border border-gray-200 bg-white shadow-lg text-slate-900">
          <a href="/" className="shrink-0">
          <img
            src="/Keeran Naidu Monogram.png"
            alt="Keeran Naidu"
            className="w-auto h-12 sm:h-16 md:h-20 lg:h-24"
          />
          </a>
          <div className="flex flex-row items-center gap-1 sm:gap-2 md:gap-3">
            <a href="/" className="text-xs sm:text-sm md:text-base lg:text-lg font-medium px-2 sm:px-3 md:px-5 lg:px-6 py-1.5 sm:py-2 md:py-3 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">Who am I?</a>
            <a href="/#skills" className="text-xs sm:text-sm md:text-base lg:text-lg font-medium px-2 sm:px-3 md:px-5 lg:px-6 py-1.5 sm:py-2 md:py-3 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">Skills</a>
            <a href="/projects" className="text-xs sm:text-sm md:text-base lg:text-lg font-medium px-2 sm:px-3 md:px-5 lg:px-6 py-1.5 sm:py-2 md:py-3 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">Projects</a>
            <a href="/contact" className="text-xs sm:text-sm md:text-base lg:text-lg font-medium px-2 sm:px-3 md:px-5 lg:px-6 py-1.5 sm:py-2 md:py-3 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">Contact</a>
          </div>
        </nav>
      </div>
    );
}