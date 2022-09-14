import illustration from "../../public/img/illustration.jpg";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { faAngleRight, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Parallax from "parallax-js";
import React, { useRef, useEffect, useState } from "react";
import {
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import Socialmedias from "../Socialmedias/Socialmedias";

export default function ContactMe({ description, socials }) {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [text, setText] = useState("");
  const router = useRouter();
  const ref = useRef(null);

  const sendMessage = async () => {
    const current = new Date();
    const date = `${current.getDate()}/${
      current.getMonth() + 1
    }/${current.getFullYear()}`;
    const response = await axios.post(process.env.NEXT_PUBLIC_URL+"/api/messages", {
      name,
      email,
      phone,
      text,
      date,
    });
    return Response;
  };

  const notify = (e) => {
    e.preventDefault();
    const sendMessageFunction = sendMessage();
    toast.promise(sendMessageFunction, {
      loading: "Sending",
      success: <b>Your Message Sent!</b>,
      error: <b>Could not send your message.</b>,
    });
  };
  useEffect(() => {
    // 👇️ use a ref (best)
    const el2 = ref.current;
    const parallaxInstance = new Parallax(el2);
    // console.log(el2);
  }, []);
  return (
    <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0">
      {router.pathname===("/") && (
        <Link href="/contactme/">
          <a>
            <div className="flex justify-between">
              <h2 className="text-4xl font-bold text-center md:text-left mb-5">
                Contact Me
              </h2>
              <FontAwesomeIcon
                icon={faAngleRight}
                style={{ width: "15px", marginRight: "5px" }}
              />
            </div>
          </a>
        </Link>
      )}
      {router.pathname.includes("/contactme") && (
        <Link href="/projects/">
          <a>
            <h1 className="text-4xl font-bold text-center md:text-left mb-5">
              Contact Me
            </h1>
          </a>
        </Link>
      )}
      <div className="container flex flex-col-reverse items-center mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row font-primary">
        <div className="md:w-1/2">
          {/* <Image src={illustration} alt="سید علی دهقان - لوگو" /> */}
          <div ref={ref} id="scene">
            <div data-parallax="scroll" className="scenemain" data-depth="0.1">
              <img src="/img/contactmain.png" alt="" />
            </div>
            <div data-parallax="scroll" className="scenemain" data-depth="0.15">
              <img src="/img/6.png" alt="" />
            </div>
            <div data-parallax="scroll" className="scenemain" data-depth="0.1">
              <img src="/img/7.png" alt="" />
            </div>
            <div data-parallax="scroll" className="scenemain" data-depth="0.3">
              <img src="/img/8.png" alt="" />
            </div>
            <div data-parallax="scroll" className="scenemain" data-depth="0.2">
              <img src="/img/9.png" alt="" />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <p className="w-2/3 mx-auto font-primary text-xl">
            Hey, you can contact me in this social networks:
          </p>
          <Socialmedias place={"contact"}/>
          <p className="w-2/3 mx-auto font-primary mb-3 text-xl">
            or this form:
          </p>
          <form
            className="flex flex-col w-full space-y-4  items-center"
            onSubmit={(e) => notify(e)}
          >
            <div className="w-full md:w-2/3">
              <label htmlFor="nameInput" className="text-xl required">
                Name:
              </label>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="nameInput"
                type="text"
                className="form-input py-2 rounded-md w-full focus:shadow-lg focus:shadow-primaryColor ease-in-out duration-500 font-primary font-bold focus:border-primaryColor focus:ring-0"
                placeholder="Name"
              />
            </div>
            <div className="w-full md:w-2/3">
              <label htmlFor="emailInput" className="text-xl required">
                Email:
              </label>
              <input
                required
                value={email}
                onChange={(e) => setemail(e.target.value)}
                id="emailInput"
                type="email"
                className="form-input py-2 rounded-md w-full focus:shadow-lg focus:shadow-primaryColor ease-in-out duration-500 font-primary font-bold focus:border-primaryColor focus:ring-0"
                placeholder="something@gmail.com"
              />
            </div>
            <div className="w-full md:w-2/3">
              <label htmlFor="phoneInput" className="text-xl required">
                Phone:
              </label>
              <input
                required
                value={phone}
                onChange={(e) => setphone(e.target.value)}
                id="phoneInput"
                type="number"
                className="form-input py-2 rounded-md w-full focus:shadow-lg focus:shadow-primaryColor ease-in-out duration-500 font-primary font-bold focus:border-primaryColor focus:ring-0"
                placeholder="+98 990 658 3620"
              />
            </div>
            <div className="w-full md:w-2/3">
              <label htmlFor="phoneInput" className="text-xl required">
                Message:
              </label>
              <textarea
                required
                value={text}
                onChange={(e) => setText(e.target.value)}
                id="phoneInput"
                type="number"
                className="form-input py-2 rounded-md w-full focus:shadow-lg focus:shadow-primaryColor ease-in-out duration-500 font-primary font-bold focus:border-primaryColor focus:ring-0"
                placeholder="Your message here"
              ></textarea>
            </div>
            <div className="w-full md:w-2/3">
              <button
                type="submit"
                className="w-full p-3 px-6 pt-2 text-white bg-primaryColor rounded-lg self-baseline hover:shadow-lg hover:shadow-primaryColor ease-in-out duration-500 font-primary font-bold"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
