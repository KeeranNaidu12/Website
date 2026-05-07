import React from 'react'

export default function NavBar(){
    return (
      <div className="flex justify-center m-10">
        <nav className="flex flex-row items-center gap-10 px-10 py-1 rounded-full border border-gray-200 bg-white/80 shadow-sm backdrop-blur">
          <img
            src="/Keeran Naidu Monogram.png"
            alt="Keeran Naidu"
            className="w-auto h-30"
          />
          <a href="/">About</a>
          <a href="/projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    );
}