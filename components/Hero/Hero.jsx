import Image from "next/image";
import illustration from '../../public/img/illustration.jpg'
export default function Header({description,socials}) {
    // console.log(socials)
    return(
        // flex
        <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row font-primary">
            {/* left side */}
            <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
                <span className="max-w-md text-4xl text-center md:text-5xl md:text-left">
                    Hey! i am
                </span>
                <h1 className="max-w-md text-4xl text-center md:text-5xl md:text-left text-primaryColor font-bold">
                    Seyed Ali Dehghan
                </h1>
                <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                    {description}
                </p>
                <div className="flex justify-center md:justify-start">
                    <a href="#" className="p-3 px-6 pt-2 text-white bg-primaryColor rounded-full baseline hover:bg-brightRedLight">
                        Contact Form
                    </a>
                </div>
            </div>
            {/* image */}
            <div className="md:w-1/2">
            <Image
            src={illustration}
            alt="سید علی دهقان - لوگو"
          />
            </div>
        </div>
    )
}