//import React from 'react'
import arrow_icon from "../assets/arrow.png";
import hand_icon from "../assets/hand_icon.png";
import hero_image from "../assets/hero_image.png";

export default function Hero() {
  return (
    <>
      <div className=" flex flex-wrap p-20 w-[100%] h-98 bg-gradient-to-b from-purple-300/70  text-[5em] font-bold text-zinc-800 tracking-tight leading-tight ">
        <div id="left " className="relative">
          <h3 className="font-semibold text-[0.5em]">NEW ARRIVALS ONLY</h3>
          <h1 className="flex">
            new <img src={hand_icon} className="h-20 m-2  drop-shadow-md" />
          </h1>
          <h1>collections </h1>
          <h1>for everyone </h1>
          <button className="flex bg-red-500 text-white rounded-full p-5 text-[0.4em] px-8 my-3">
            {" "}
            Latest Collection{" "}
            <img src={arrow_icon} className="m-[auto] p-1 w-10 m-1" />
          </button>
        </div>


        <div id="right " className="  right-10 ml-[auto] pr-10">
          <img
            src={hero_image}
            className="h-[550px] bg-gradient-to-b  from-red-100/0 to-pink-400/30 rounded-[30px] p-10 "
          />
        </div>
      </div>
    </>
  );
}
