import React from "react";
import Modal from './Modal'
const Card = ({item}) => {
  return (
    <div>
     
      <div 
        className="bg-gradient-to-r from-indigo-400 to-cyan-400 w-[300px] rounded-lg h-fit m-6 text-white flex flex-col items-center justify-start gap-2
       hover:border border-black hover:scale-105 hover:overflow-hidden"
      >
        <img
          src={item.Poster }
          className="rounded-lg h-[250px] w-[300px] " 
        ></img>
        <p className="text-center text-purple-700 text-2xl">{item.Title}</p>
        <p className="pl-2">Type:{item.Type}</p>
        <p className="pl-2 pb-2">Year of Realease:{item.Year}</p>
        <p className="text-center ">Click for More Details</p>
      </div>
    </div>
  );
};

export default Card;
