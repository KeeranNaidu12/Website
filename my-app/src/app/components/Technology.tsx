import React from 'react'

type TechnologyProps ={
    name : string,
    icon : string
}

export default function Technology({name,icon} : TechnologyProps){
    return (
      <div className="flex flex-col items-center gap-2 m-10">
        <img src={icon} alt={name} className="w-16 h-16" />
        <h1>{name}</h1>
      </div>
    );
}