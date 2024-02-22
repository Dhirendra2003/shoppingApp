//import React from 'react'

export default function NewsLetter() {
  return (
    <div className="w-full m-[auto] bg-zinc-200 text-zinc-900 flex place-content-center">
      <div className="p-20 ">
      <h1 className="text-[2em]"> Get Exclusive Offers on Your E-Mail</h1>
      <p className="text-[1.5em]">Subcribe to our newsletter and stay updates with Offers</p>
      <div className=" h-[44px]">
      <input type="email" name="" placeholder="YourName@gmail.com" className="w-96 p-4 text-[1em] rounded-full  text-zinc-800" />
      <button className="relative right-20  bg-red-500 text-white rounded-full  font-bold text-[1.3em] top-[1px] p-[13px] px-6">SUBSCRIBE</button>
      </div>
      </div>
    </div>
  )
}
