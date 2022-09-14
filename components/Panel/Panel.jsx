import Image from "next/image";
import illustration from "../../public/img/illustration.jpg";
import Parallax from "parallax-js";
import React, { useRef, useState, useEffect } from "react";
import Socialmedias from "../Socialmedias/Socialmedias";
import { useSession } from "next-auth/react";
import List from "./List/List";
import Link from "next/link";
import { signOut } from "next-auth/react"

export default function Panel({ children, activeItem }) {
  const { data: session } = useSession();
  // console.log(activeItem)
  // console.log(session)
  const [burgerAdminActive, setburgerAdminActive] = useState(false);
  const toggleAdminBurger = () => {
    setburgerAdminActive(!burgerAdminActive);
  };
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
          <List activeItem={activeItem} />
        </div>
      </div>
      {/* content */}
      <div className="flex-1 flex-col relative z-0 overflow-y-auto">
        {/* head */}
        <div className="px-4 md:px-8 py-2 h-16 flex justify-between items-center shadow-sm bg-white">
          <div>{session.user.name}</div>
          <button
            id="menu-btn"
            onClick={() => toggleAdminBurger()}
            className={
              burgerAdminActive
                ? "block hamburger md:hidden focus:outline-none open"
                : "block hamburger md:hidden focus:outline-none"
            }
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
        {/* Mobile Menu */}
        <div className="md:hidden">
          <div
            className={
              burgerAdminActive
                ? "absolute flex-col items-center flex z-30 self-end py-8 mt-5 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
                : "absolute flex-col items-center hidden z-30 self-end py-8 mt-5 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
            }
          >
            <Link href="/admin">
              <a className="hover:text-primaryColor font-bold ease-in-out duration-200">
                Panel Home
              </a>
            </Link>
            <Link href="/admin/projects">
              <a className="hover:text-primaryColor font-bold ease-in-out duration-200">
                Projects
              </a>
            </Link>
            <Link href="/admin/posts">
              <a className="hover:text-primaryColor font-bold ease-in-out duration-200">
                Blog
              </a>
            </Link>
            <div onClick={() => signOut()} className="hover:text-primaryColor font-bold ease-in-out duration-200">
              Sign Out
            </div>
          </div>
        </div>
        <div className="md:max-w-6xl md:mx-auto px-4 py-8">{children}</div>
      </div>
    </div>
  );
}
