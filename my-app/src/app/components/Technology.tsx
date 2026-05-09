import React from 'react'

type TechnologyProps ={
    name : string,
    icon : string
}

export default function Technology({name,icon} : TechnologyProps){
    return (
      <div className="flex flex-col items-center gap-2 m-10">
        <div className="relative group">
          <div
            role="tooltip"
            className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-sm text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100"
          >
            {name}
          </div>

          <div className="p-10 m-5 rounded-2xl bg-gray-900 transition-colors duration-150 group-hover:bg-gray-700 cursor-pointer">
            <img src={icon} alt={name} className="w-16 h-16" />
          </div>
        </div>
      </div>
    );
}