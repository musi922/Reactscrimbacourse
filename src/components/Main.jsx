import React from "react";

export default function Main() {
    return(
        <div className="flex-col  bg-red-400 h-screen text-white text-center pt-24">
            <h1 className="pl-24 text-white text-5xl font-extrabold">Fun facts about React</h1>
            <ul className="text-start ml-[40%] mt-6 text-2xl max-w-4xl ">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Meta</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
        </div>
    )
    
}