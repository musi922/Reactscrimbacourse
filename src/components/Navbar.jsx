import React from "react";
import image from '../assets/react.svg'

export default function Navbar() {
    return(
        <div className="flex gap-80 font-bold bg-[#21222A] h-28 text-white pl-56 pt-6 text-3xl">
            <img src={image} width='50px' className=" absolute"/>
            <h1 className="pl-24 text-[#61DAFB]">React Facts</h1>
            <h2>React course-Project</h2>
        </div>
    )
    
}