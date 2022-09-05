import Image from "next/image";
import illustration from "../../public/img/illustration.jpg";
import Parallax from "parallax-js";
import React, { useRef, useEffect } from "react";
import Socialmedias from "../Socialmedias/Socialmedias";

export default function Hero({ description, socials }) {
  // console.log(socials)
  const ref = useRef(null);
  //   var scene = document.getElementById("scene");
  //   var parallaxInstance = new Parallax(scene);

  useEffect(() => {
    // 👇️ use a ref (best)
    const el2 = ref.current;
    const parallaxInstance = new Parallax(el2);
    // console.log(el2);
  }, []);
  return (
    // flex
    <div className="container flex flex-col-reverse items-center px-4 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row font-primary">
      {/* left side */}
      <div className="flex flex-col  space-y-12 md:w-1/2">
        <span className="max-w-md text-4xl text-center md:text-5xl md:text-left">
          Hey! i am
        </span>
        <h1 className="w-full text-4xl text-center md:text-7xl md:text-left text-primaryColor font-bold">
          Seyed Ali Dehghan
        </h1>
        <p className="w-full text-3xl text-center md:text-5xl md:text-left text-primaryColor ">
          I Build Things for the web
        </p>
        <Socialmedias place={"hero"}/>
        <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
          {description}
        </p>
        <div className="flex justify-center md:justify-start">
          <a
            href="#"
            className="p-3 px-6 pt-2 text-white bg-primaryColor rounded-full baseline hover:bg-brightRedLight"
          >
            Contact Form
          </a>
        </div>
      </div>
      {/* image */}
      <div className="md:w-1/2">
        {/* <Image src={illustration} alt="سید علی دهقان - لوگو" /> */}
        <div ref={ref} id="scene">
        <div data-parallax="scroll" className="scenemain" data-depth="0.4">
            <img src="/img/5.png" alt="" />
          </div>
          <div data-parallax="scroll" className="scenemain" data-depth="0.1">
            <img src="/img/slide1_main.png" alt="" />
          </div>
          <div data-parallax="scroll" className="scenemain" data-depth="0.1">
            <img src="/img/3.png" alt="" />
          </div>
          <div data-parallax="scroll" className="scenemain" data-depth="0.2">
            <img src="/img/2.png" alt="" />
          </div>
          
          <div data-parallax="scroll" className="scenemain" data-depth="0.3">
            <img src="/img/4.png" alt="" />
          </div>
          <div data-parallax="scroll" className="scenemain" data-depth="0.05">
            <img src="/img/1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
