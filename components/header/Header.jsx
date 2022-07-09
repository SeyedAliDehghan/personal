export default function Header(){
    return(
        <nav className="relative container mx-auto p-6 font-yekan">
            <div className="flex items-center justify-between">
                {/* logo */}
                <div className="pt-2">
                    <div>iSeYeD</div>
                </div>
                {/* menu items */}
                <div className="hidden md:flex space-x-6">
                    <a href="" className="hover:text-primaryColor font-bold ease-in-out duration-200">درباره من</a>
                    <a href="" className="hover:text-primaryColor font-bold ease-in-out duration-200">پروژه ها</a>
                    <a href="" className="hover:text-primaryColor font-bold ease-in-out duration-200">بلاگ</a>
                    <a href="" className="hover:text-primaryColor font-bold ease-in-out duration-200">صفحه اصلی</a>
                </div>
                <a href="#" className="p-3 px-6 pt-2 text-white bg-primaryColor rounded-full self-baseline hover:shadow-lg hover:shadow-primaryColor ease-in-out duration-500">
                    تماس با من
                </a>
            </div>
        </nav>
    )
}