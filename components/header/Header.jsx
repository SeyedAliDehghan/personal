import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
  return `${src}`;
};
export default function Header({url}) {
  const apiUrl = "https://iseyed-personal-api.herokuapp.com"+"/logo";
  return (
    <nav className="relative container mx-auto p-6 font-yekan">
      <div className="flex items-center justify-between">
        {/* logo */}
        <div className="pt-2">
          {/* <img src="/icon/logo.png" alt="" /> */}
          <Image
            loader={myLoader}
            src={apiUrl}
            alt="سید علی دهقان - لوگو"
            width={50}
            height={38}
          />
        </div>
        {/* menu items */}
        <div className="hidden md:flex space-x-6">
          <a
            href=""
            className="hover:text-primaryColor font-bold ease-in-out duration-200"
          >
            درباره من
          </a>
          <a
            href=""
            className="hover:text-primaryColor font-bold ease-in-out duration-200"
          >
            پروژه ها
          </a>
          <a
            href=""
            className="hover:text-primaryColor font-bold ease-in-out duration-200"
          >
            بلاگ
          </a>
          <a
            href=""
            className="hover:text-primaryColor font-bold ease-in-out duration-200"
          >
            صفحه اصلی
          </a>
        </div>
        <a
          href="#"
          className="p-3 px-6 pt-2 text-white bg-primaryColor rounded-full self-baseline hover:shadow-lg hover:shadow-primaryColor ease-in-out duration-500"
        >
          تماس با من
        </a>
      </div>
    </nav>
  );
}
