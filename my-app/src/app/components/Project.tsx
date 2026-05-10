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
      <div className="flex flex-col rounded-2xl bg-white/5 border border-white/10 p-10 gap-6 transition-all duration-300 hover:border-sky-400/60">
        <div className="flex items-start justify-between gap-3">
          <h2 className="rounded-full bg-sky-500/20 text-sky-300 font-bold text-3xl px-4 py-1">{name}</h2>
          <span className="shrink-0 rounded-full bg-sky-500/20 text-sky-300 text-lg font-bold px-4 py-1">
            {date}
          </span>
        </div>
        <img
          src={image}
          alt={name}
          className="mx-auto h-80 sm:h-96 w-auto object-contain"
        />
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed line-clamp-6">
          {description}
        </p>
        <div className="mt-auto flex flex-wrap gap-3 pt-2">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center rounded-lg bg-sky-500 hover:bg-sky-400 text-white text-base font-medium px-4 py-2.5 transition-colors"
            >
              Live Demo
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 text-white text-base font-medium px-4 py-2.5 transition-colors"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    );
}