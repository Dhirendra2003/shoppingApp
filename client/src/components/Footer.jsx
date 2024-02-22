//import React from 'react'
import footer_logo from "./assets/logo_big.png"
import ig_icon from "./assets/instagram_icon.png"
import pn_icon from './assets/pintester_icon.png'
import wp_icon from './assets/whatsapp_icon.png'

export default function Footer() {
  return (
    <div className="bg-black text-white w-full place-content-center grid p-10">
      <div className="m-[auto] flex place-content-center h-16 my-4">
        <img src={footer_logo} alt="" />
        <p className="font-bold bold bg-purple-700 text-xl center p-2  my-[auto] mx-3 rounded">SHOPPER</p>
      </div>
      <ul className='footer-links flex '>
        <li className="p-2 bg-zinc-800 rounded-lg m-4">Company</li>
        <li className="p-2 bg-zinc-800 rounded-lg m-4">Products</li>
        <li className="p-2 bg-zinc-800 rounded-lg m-4">Offices</li>
        <li className="p-2 bg-zinc-800 rounded-lg m-4">About</li>
        <li className="p-2 bg-zinc-800 rounded-lg m-4">Contact</li>
      </ul>
      <div className='container invert flex place-content-center my-3'>
        <img src={ig_icon} className="m-[10px] py-1" />
        <img src={pn_icon} className="m-[10px] py-1" />
        <img src={wp_icon} className="m-[10px] py-1" />

      </div>
      <p className="font-bold text-center">Copyright @2024- All Rights Reserved</p>
    </div>
  )
}
