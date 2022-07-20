import Link from "next/link";
import Image from "next/image";
import illustration from "../../public/img/illustration.jpg";
export default function Header({ description, socials }) {
  // console.log(socials)
  return (
    // flex
    <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-20 md:mt-56 space-y-0 md:space-y-0 md:flex-row">
      {/* left side */}
      <div className="flex flex-col  space-y-8">
        <span className="text-base text-left text-primaryColor font-roboto">
          Hi, my name is
        </span>
        <h1 className="text-4xl md:text-6xl  text-secondaryColor font-bold font-sans">
          Seyed Ali Dehghan
        </h1>
        <p className="text-darkGrayishBlue  text-4xl md:text-6xl  text-thirdColor">
          I build things for the web
        </p>
        <p className="text-sm text-thirdColor">
            {description}
        </p>
        <Link href="/">
            <a
              href="#"
              className="px-5 py-4 text-primaryColor border-primaryColor border rounded self-baseline hover:shadow-lg hover:shadow-primaryColor ease-in-out duration-500 font-primary"
            >
              Contact me
            </a>
          </Link>
      </div>
    </div>
  );
}
