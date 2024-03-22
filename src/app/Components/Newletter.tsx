import Image from "next/legacy/image";
import { ArrowRightIcon } from "@heroicons/react/outline";

export default function Newsletter() {
  return (
    <div className="relative text-black h-96 flex items-center flex-col my-8">
      <Image
        src="/section.elementor-sectio.png"
        alt="Apponovi Logo"
        layout="fill"
       
        objectFit="cover"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 ">
        <h2 className="text-xl lg:text-4xl mb-7 font-noto-sans">
          Sign up to our newsletter for all the <br />latest news & discounts.
        </h2>
        <div className="relative w-full max-w-sm mx-auto">
          <input
            type="email"
            placeholder="E-mail address"
            className="w-full bg-transparent placeholder-font-nunito-sans placeholder-text-black py-2 border-b border-black focus:outline-none"
          />
          <button className="absolute top-3 right-2">
            <ArrowRightIcon className="w-6 h-6 text-black" />
          </button>
        </div>
      </div>
    </div>
  );
}
