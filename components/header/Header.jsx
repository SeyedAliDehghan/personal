import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
  return `${src}`;
};
export default function Header({baseUrl}) {
  const logoUrl = baseUrl+"/logo";
  return (
    <nav className="relative container mx-auto p-6  font-primary">
      <div className="flex items-center justify-between">
        {/* logo */}
        <div className="pt-2">
          {/* <img src="/icon/logo.png" alt="" /> */}
          <Image
            loader={myLoader}
            src={logoUrl}
            alt="Seyed ali dehghan logo"
            width={50}
            height={35}
          />
        </div>
        {/* menu items */}
        <div className="hidden md:flex space-x-6">
        <a
            href=""
            className="hover:text-primaryColor font-bold ease-in-out duration-200"
          >
            Home
          </a>
          <a
            href=""
            className="hover:text-primaryColor font-bold ease-in-out duration-200"
          >
            Projects
          </a>
          <a
            href=""
            className="hover:text-primaryColor font-bold ease-in-out duration-200"
          >
            About me
          </a>
          
          
        </div>
        <a
          href="#"
          className="p-3 px-6 pt-2 text-white bg-primaryColor rounded-full self-baseline hover:shadow-lg hover:shadow-primaryColor ease-in-out duration-500 font-primary"
        >
          Contact me
        </a>
      </div>
    </nav>
  );
}
