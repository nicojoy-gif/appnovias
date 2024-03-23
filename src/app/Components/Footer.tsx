import { ArrowRightIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="text-black">
      <footer className="bg-white  lg:h-64 h-full border-b border-black my-5 ">
        <div className=" md:mx-10 mx-5  grid lg:grid-cols-7 md:grid-cols-3 grid-cols-1 gap-4">
          {/* First column */}
          <div className="lg:col-span-2 col-span-1 ">
            <Image
              className="relative"
              src="/logo.png"
              alt="Apponovi Logo"
              width={92}
              height={18}
              priority
            />

            <p className="py-5">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium
            </p>
          </div>

          {/* Second column */}
          <div className="col-span-1 ">
            <h2 className="text-[13px] mb-4">SUPPORT</h2>
            <ul className="text-[13px] tracking-tight space-y-3">
              <li>Help & Contact Us</li>
              <li>Return & Refunds</li>
              <li>Online Stores</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Third column */}
          <div className="col-span-1 ">
            <h2 className="text-[13px] mb-4">COMPANY</h2>
            <ul className="text-[13px] tracking-tight space-y-3">
              <li>
                <div className="w-20 h-4 bg-black"></div>
              </li>
              <li>
                <div className="w-16 h-4 bg-black"></div>
              </li>
              <li>
                <div className="w-20 h-4 bg-black"></div>
              </li>
              <li>
                <div className="w-10 h-4 bg-black"></div>
              </li>
            </ul>
          </div>

          {/* Fourth column */}
          <div className="col-span-1 ">
            <h2 className="text-[13px] mb-4">LOCATIONS</h2>
            <ul className="text-[13px] tracking-tight space-y-3">
              <li>Vienna, Hansalgasse, Austria</li>
              <li>Berlin, Buschallee, Germany</li>
              <li>The Piazza, London, UK</li>
            </ul>
          </div>

          {/* Fifth column */}
          <div className="col-span-2 lg:mx-5 mx-0  lg:mb-0 mb-10 ">
            <h2 className="text-xl  mb-4">Get The Latest News</h2>
            <div className="relative">
              <input
                type="email"
                placeholder="E-mail address"
                className="w-full  bg-inherit placeholder:font-nunito-sans px-3 placeholder:text-black py-2 border-b border-black "
              />
              <button className="absolute top-3 right-2">
                <ArrowRightIcon className="w-6 h-6 text-black" />
              </button>
            </div>
          </div>
        </div>
      </footer>
      <div className="pb-5 lg:px-5 px-0 mx-5 md:mx-10 flex lg:flex-row flex-col items-center justify-between ">
        <div className="flex uppercase text-[13px] items-center">
          © 2023 <span className="hidden lg:block w-20 ml-1 h-4 bg-black"></span> ,All Rights
          Reserved
        </div>
        <div className="flex">
          <p>ENG |</p>
          <p className="pl-3">FRA |</p>
          <p className="pl-3">SKR |</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
