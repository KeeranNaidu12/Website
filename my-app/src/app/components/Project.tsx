import React from 'react'

type ProjectProps ={
    name : string,
    image : string,
    description: string,
    date: string,
    link: string
}

export default function Technology({name,image,description,date,link} : ProjectProps){
    return (
      <div className="flex flex-col rounded-2xl bg-white/5 border border-white/10 p-8 gap-5 transition-all duration-300 hover:border-sky-400/60">
        <div>
          <h2 className="font-bold text-white text-center text-2xl ">{name}</h2>
          <h2>{date}</h2>
        </div>
        <img
          src={image}
          alt={name}
          className="mx-auto h-48 w-auto object-contain"
        />
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed line-clamp-6 bg-purple-800 rounded-2xl">
          {description}
        </p>
        <div>
            <a href={link}>Repository</a>
            <p>Plata-Boom</p>
        </div>
      </div>
    );
}