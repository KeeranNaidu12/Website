import React from 'react'

type ProjectProps ={
    name : string,
    image : string,
    description: string,
    date: string,
    github?: string,
    link?: string
}

export default function Technology({name,image,description,date,github,link} : ProjectProps){
    return (
      <div className="flex flex-col rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-7 md:p-10 gap-4 sm:gap-5 md:gap-6 transition-all duration-300 hover:border-sky-400/60">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-3">
          <h2 className="self-start rounded-full bg-sky-500/20 text-sky-300 font-bold text-xl sm:text-2xl md:text-3xl px-3 sm:px-4 py-1">{name}</h2>
          <span className="self-start shrink-0 rounded-full bg-sky-500/20 text-sky-300 text-sm sm:text-base md:text-lg font-bold px-3 sm:px-4 py-1">
            {date}
          </span>
        </div>
        <img
          src={image}
          alt={name}
          className="mx-auto h-48 sm:h-72 md:h-80 lg:h-96 w-auto object-contain"
        />
        <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed line-clamp-6">
          {description}
        </p>
        <div className="mt-auto flex flex-wrap gap-3 pt-2">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center rounded-lg bg-sky-500 hover:bg-sky-400 text-white text-sm sm:text-base font-medium px-3 sm:px-4 py-2 sm:py-2.5 transition-colors"
            >
              Live Demo
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 text-white text-sm sm:text-base font-medium px-3 sm:px-4 py-2 sm:py-2.5 transition-colors"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    );
}