import React from 'react'

type TechnologyProps ={
    name : string,
    icon : string
}

export default function Technology({name,icon} : TechnologyProps){
    return (
      <div className="relative group">
        <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-sky-400/40 bg-slate-900 px-2 py-1 text-xs font-medium text-sky-100 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          {name}
        </div>

        <div className="flex items-center justify-center aspect-square rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 group-hover:border-sky-400/60 group-hover:-translate-y-1 group-hover:shadow-[0_0_20px_-4px_rgba(56,189,248,0.6)]">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-white/90">
            <img src={icon} alt={name} className="w-9 h-9" />
          </div>
        </div>
      </div>
    );
}