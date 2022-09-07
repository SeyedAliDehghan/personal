import Image from "next/image";
import illustration from "../../public/img/illustration.jpg";
import Parallax from "parallax-js";
import React, { useRef, useEffect } from "react";
import Socialmedias from "../Socialmedias/Socialmedias";
import { useSession } from "next-auth/react";
import List from "./List/List";
export default function Panel({ children,activeItem}) {
  const { data: session } = useSession();
// console.log(activeItem)
  // console.log(session)

  return (
    <div className="h-screen flex overflow-hidden bg-slate-200">
    {/* Menu */}
    <div className="bg-white w-64 min-h-screen overflow-y-auto hidden md:block shadow relative z-30">
      {/* logo */}
      <div className="flex items-center px-6 py-3 h-16">
        <div>
          <img src="/img/logo.png" style={{ width: "40px" }} />
        </div>
        <div className="text-2xl font-bold tracking-tight text-gray-800 ml-3">
          Panel
        </div>
      </div>
      {/* menu items */}
      <div className="px-4 py-2">
        <List activeItem={activeItem}/>
      </div>
    </div>
    {/* content */}
    <div className="flex-1 flex-col relative z-0 overflow-y-auto">
      {/* head */}
      <div className="px-4 md:px-8 py-2 h-16 flex justify-between items-center shadow-sm bg-white">
        <div>{session.user.name}</div>
        <div>item</div>
      </div>
      <div className="md:max-w-6xl md:mx-auto px-4 py-8">
        {children}
      </div>
    </div>
  </div>
  );
}
