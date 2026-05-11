import React from 'react'

export default function NavBar(){
    return (
      <div className="sticky top-0 z-50 flex justify-center px-6 pt-6 pb-6">
        <nav className="flex flex-row items-center justify-between gap-8 w-full max-w-6xl px-10 py-4 rounded-full border border-gray-200 bg-white shadow-lg text-slate-900">
          <a href="/" className="shrink-0">
          <img
            src="/Keeran Naidu Monogram.png"
            alt="Keeran Naidu"
            className="w-auto h-24"
          />
          </a>
          <div className="flex flex-row items-center gap-3">
            <a href="/" className="text-lg font-medium px-6 py-3 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">Who am I?</a>
            <a href="/#skills" className="text-lg font-medium px-6 py-3 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">Skills</a>
            <a href="/projects" className="text-lg font-medium px-6 py-3 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">Projects</a>
            <a href="/contact" className="text-lg font-medium px-6 py-3 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">Contact</a>
          </div>
        </nav>
      </div>
    );
}