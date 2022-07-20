import Image from "next/image";
import logo from "../../public/img/logo.png";
import Link from "next/link";

export default function Header() {
  // const logoUrl = "/img/"+logoName;
  return (
    <nav className="bg-secondaryBgColor md:bg-inherit relative md:container mx-auto px-7 py-3 md:p-6 font-sans">
      <div className="flex items-center justify-between">
        {/* logo */}
        <div className="pt-2">
          <Link href="/">
            <a>
              <Image
                src={logo}
                alt="Seyed ali dehghan logo"
                width={50}
                height={35}
              />
            </a>
          </Link>
        </div>
        {/* menu items */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/">
            <a className="text-thirdColor hover:text-primaryColor font-medium ease-in-out duration-200 text-sm">
              <span className="text-primaryColor">01. </span>
              <span>Home</span>
            </a>
          </Link>
          <Link href="/">
            <a className="text-thirdColor hover:text-primaryColor font-medium ease-in-out duration-200 text-sm">
              <span className="text-primaryColor">02. </span>
              <span>Projects</span>
            </a>
          </Link>
          <Link href="/">
            <a className="text-thirdColor hover:text-primaryColor font-medium ease-in-out duration-200 text-sm">
              <span className="text-primaryColor">0e. </span>
              <span>About Me</span>
            </a>
          </Link>
          <Link href="/">
            <a
              href="#"
              className="px-3 py-2 text-primaryColor border-primaryColor border rounded self-baseline hover:shadow-lg hover:shadow-primaryColor ease-in-out duration-500 font-primary"
            >
              Contact me
            </a>
          </Link>
        </div>
        {/* burger */}
        <button
          id="menu-btn"
          className="block hamburger md:hidden focus:outline-none"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
    </nav>
  );
}
