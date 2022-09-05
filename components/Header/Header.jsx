import Image from "next/image";
import logo from "../../public/img/logo.png";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import React, { useState } from "react";

export default function Header() {
  // const logoUrl = "/img/"+logoName;
  const [burgerActive, setburgerActive] = useState(false);
  const toggleBurger = () => {
    setburgerActive(!burgerActive);
  };
  const { data: session } = useSession();
  return (
    <>
      {session && (
        <div className="bg-black text-white ">
          <div className="container mx-auto py-2 px-3 flex justify-between">
            <Link href="/admin">
              <a>Admin Panel</a>
            </Link>
            {/* <div>Wlc Admin,{session.user.name}</div> */}
            <div onClick={() => signOut()} className="cursor-pointer	">
              LogOut
            </div>
          </div>
        </div>
      )}

      <nav className="relative container mx-auto p-6  font-primary">
        <div className="flex items-center justify-between">
          {/* logo */}
          <div className="pt-2">
            <Image
              src={logo}
              alt="Seyed ali dehghan logo"
              width={50}
              height={35}
            />
          </div>
          {/* menu items */}
          <div className="hidden md:flex space-x-6">
            <Link href="/">
              <a className="hover:text-primaryColor font-bold ease-in-out duration-200">
                Home
              </a>
            </Link>
            <Link href="/projects">
              <a className="hover:text-primaryColor font-bold ease-in-out duration-200">
                Projects
              </a>
            </Link>
            <Link href="/blog">
              <a className="hover:text-primaryColor font-bold ease-in-out duration-200">
                Blog
              </a>
            </Link>
            <Link href="/aboutme">
              <a className="hover:text-primaryColor font-bold ease-in-out duration-200">
                About Me
              </a>
            </Link>
          </div>
          {/* Hamburger Icon */}
          <button
            id="menu-btn"
            onClick={() => toggleBurger()}
            className={
              burgerActive
                ? "block hamburger md:hidden focus:outline-none open"
                : "block hamburger md:hidden focus:outline-none"
            }
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>

          <Link href="/contactme">
            <a
              className="hidden md:flex p-3 px-6 pt-2 text-white bg-primaryColor rounded-full self-baseline hover:shadow-lg hover:shadow-primaryColor ease-in-out duration-500 font-primary"
            >
              Contact me
            </a>
          </Link>
        </div>
        {/* Mobile Menu */}
        <div className="md:hidden">
          <div
            className={
              burgerActive
                ? "absolute flex-col items-center flex z-30 self-end py-8 mt-5 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
                : "absolute flex-col items-center hidden z-30 self-end py-8 mt-5 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
            }
          >
            <Link href="/">
              <a className="hover:text-primaryColor font-bold ease-in-out duration-200">
                Home
              </a>
            </Link>
            <Link href="/projects">
              <a className="hover:text-primaryColor font-bold ease-in-out duration-200">
                Projects
              </a>
            </Link>
            <Link href="/blog">
              <a className="hover:text-primaryColor font-bold ease-in-out duration-200">
                Blog
              </a>
            </Link>
            <Link href="/aboutme">
              <a className="hover:text-primaryColor font-bold ease-in-out duration-200">
                About me
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
