//import React from 'react'
import navlogo from "../assets/nav-logo.svg"
import navProfile from "../assets/nav-profile.svg"

export default function Navbar() {
  return (
    <div id='navbar' className="flex m-5 p-5 rounded-xl bg-gradient-to-r to-violet-500 from-fuchsia-400 flex-wrap shadow-xl">
    <img src={navlogo} className="" />    
    <img src={navProfile} className="ml-[auto]" />
    </div>
  )
}
