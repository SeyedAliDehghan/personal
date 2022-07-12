import Image from "next/image";


export default function Header() {
    return(
        // flex
        <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
            {/* left side */}
            <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
123
            </div>
            {/* image */}
            <div className="md:w-1/2">
            {/* <Image
            src="/img/myself.jpg"
            alt="سید علی دهقان - لوگو"
            layout='fill'
    objectFit='contain'
          /> */}
            </div>
        </div>
    )
}