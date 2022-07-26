import Image from "next/image";
import logo from "../../public/img/logo.png";
import me from "../../public/img/me.jpg";
import Link from "next/link";

export default function Aboutme() {
  // const logoUrl = "/img/"+logoName;
  return (
    <div className="mt-20 md:mt-56 pt-20 container mx-auto px-6">
      <h2 className="sectionTitle flex flex-col md:flex-row md:items-end mb-8 relative">
        <span>
          <span className="text-primaryColor mr-2">01.</span>
          <span className="text-4xl text-secondaryColor font-sans">
            About Me
          </span>
        </span>
      </h2>
      <div className="flex flex-col md:flex-row items-center md:space-y-0">
        <div className="flex flex-col  space-y-12 md:w-1/2">
          <p className="text-mainTextColor font-sans">
            Hello! My name is Abolfazl and I enjoy creating things that live on
            the internet. My interest in web development started back in 2018
            when I decided to try editing custom WordPress themes — turns out
            hacking together a custom button taught me a lot about HTML & CSS!
          </p>
          <p className="text-mainTextColor font-sans">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="text-mainTextColor aboutMeList">
            <li className="flex items-center">JavaScript</li>
            <li className="flex items-center">JavaScript</li>
            <li className="flex items-center">JavaScript</li>
            <li className="flex items-center">JavaScript</li>
            <li className="flex items-center">JavaScript</li>
            <li className="flex items-center">JavaScript</li>
            <li className="flex items-center">JavaScript</li>
          </ul>
        </div>
        <div className="md:w-1/2 flex justify-center rounded">
          <div className="myImgContainer ">
            <div className=" myImgItem rounded float-right	">
              <img src="/img/me.jpg" alt="" className="rounded myImg" />
              {/* <Image src={me} alt="Seyed Ali Dehghan" className="rounded meImg"/> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}