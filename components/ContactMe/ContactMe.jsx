import illustration from '../../public/img/illustration.jpg'
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactMe({ description, socials }) {
  const router = useRouter();

  return (
    <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0">
      {router.pathname === "/" && (
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
      {router.pathname === "/contactme" && (
        <Link href="/projects/">
          <a>
            <h1 className="text-4xl font-bold text-center md:text-left mb-5">
              Contact Me
            </h1>
          </a>
        </Link>
      )}
      <div className="container flex flex-col-reverse items-center mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row font-primary">
        <form className="flex flex-col  space-y-4 w-full md:w-1/2">
          <div className="w-full md:w-2/3">
            <label htmlFor="nameInput" className="text-xl">
              Name:
            </label>
            <input
              id="nameInput"
              type="text"
              className="form-input py-2 rounded-md w-full focus:shadow-lg focus:shadow-primaryColor ease-in-out duration-500 font-primary font-bold focus:border-primaryColor focus:ring-0"
              placeholder="Name"
            />
          </div>
          <div className="w-full md:w-2/3">
            <label htmlFor="emailInput" className="text-xl">
              Email:
            </label>
            <input
              id="emailInput"
              type="email"
              className="form-input py-2 rounded-md w-full focus:shadow-lg focus:shadow-primaryColor ease-in-out duration-500 font-primary font-bold focus:border-primaryColor focus:ring-0"
              placeholder="something@gmail.com"
            />
          </div>
          <div className="w-full md:w-2/3">
            <label htmlFor="phoneInput" className="text-xl">
              Phone:
            </label>
            <input
              id="phoneInput"
              type="number"
              className="form-input py-2 rounded-md w-full focus:shadow-lg focus:shadow-primaryColor ease-in-out duration-500 font-primary font-bold focus:border-primaryColor focus:ring-0"
              placeholder="+98 990 658 3620"
            />
          </div>
          <div className="w-full md:w-2/3">
            <label htmlFor="phoneInput" className="text-xl">
              Message:
            </label>
            <textarea
              id="phoneInput"
              type="number"
              className="form-input py-2 rounded-md w-full focus:shadow-lg focus:shadow-primaryColor ease-in-out duration-500 font-primary font-bold focus:border-primaryColor focus:ring-0"
              placeholder="Your message here"
            ></textarea>
          </div>
          <button className='w-full md:w-2/3 p-3 px-6 pt-2 text-white bg-primaryColor rounded-lg self-baseline hover:shadow-lg hover:shadow-primaryColor ease-in-out duration-500 font-primary font-bold'>
            Send
          </button>
        </form>
        <div className="md:w-1/2">
          <Image src={illustration} alt="سید علی دهقان - لوگو" />
        </div>
      </div>
    </div>
  );
}
