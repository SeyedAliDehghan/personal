
import Link from "next/link";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Aboutme({ technologies }) {
  const router = useRouter();

  // const logoUrl = "/img/"+logoName;
  return (
    <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12">
      {router.pathname === "/" && (
        <Link href="/aboutme/">
          <a>
            <div className="flex justify-between">
              <h2 className="text-4xl font-bold text-center md:text-left mb-5">
                About Me
              </h2>
              <FontAwesomeIcon
                icon={faAngleRight}
                style={{ width: "15px", marginRight: "5px" }}
              />
            </div>
          </a>
        </Link>
      )}
      {router.pathname.includes("/aboutme") && (
        <Link href="/aboutme/">
          <a>
            <h1 className="text-4xl font-bold text-center md:text-left mb-5">
              About Me
            </h1>
          </a>
        </Link>
      )}
      <div className="flex flex-col md:flex-row items-center mt-10">
        <div className="flex flex-col  space-y-12 w-full">
          <p className="text-mainTextColor font-sans">
            Hello! My name is Seyed Ali Dehghan and I enjoy creating things that
            live on the internet.
          </p>
          {technologies.length!==0 && (
            <>
              <p className="text-mainTextColor font-sans">
                Here are a few technologies I’ve been working with recently:
              </p>
              <ul className="text-mainTextColor aboutMeList">
                {technologies.map((technology) => (
                  <li className="flex items-center" key={technology._id}>
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      style={{ width: "7px", marginRight: "7px" }}
                    />
                    <span>{technology.name}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
        {/* <div className="md:w-1/2 flex justify-center rounded">
          <div className="myImgContainer ">
            <div className=" myImgItem rounded float-right	">
              <img src="/img/me.jpg" alt="" className="rounded myImg" />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}



