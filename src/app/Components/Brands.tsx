import Image from "next/legacy/image";
import Arrows from "./Reusable Componente/Arrows";
import { XIcon } from "@heroicons/react/outline";
export default function Brands() {
  return (
    <div className="bg-white min-h-screen text-black h-full">
      <section className="h-96 flex relative justify-center items-center">
        <div className="flex flex-col items-center justify-center">
          <div className="">
            <Image
              className="relative my-5 "
              src="/Frame.svg"
              alt="Apponovi Logo"
              width={33}
              height={28}
              priority
            />
          </div>
          <div>
            <Arrows />
          </div>
          <div className="flex items-center text-center justify-center">
            <p className="lg:text-2xl  w-2/3  py-2 font-noto-sans">
              Accusantium doloremque laudantium, totam rem aperiam. Sed ut
              perspiciatis unde omnis iste natus error sit voluptatem.
            </p>
          </div>
          <div className="my-5">
            <XIcon className="w-4  h-4" />
          </div>
          <div className="grid grid-cols-5 my-5 lg:gap-12 gap-4">
            <Image
              className="relative  "
              src="/Video-clients-img-2.png.svg"
              alt="Apponovi Logo"
              width={181}
              height={35}
              priority
            />
            <Image
              className="relative  "
              src="/Video-clients-img-5.png.svg"
              alt="Apponovi Logo"
              width={181}
              height={35}
              priority
            />
            <Image
              className="relative  "
              src="/Video-clients-img-1.png.svg"
              alt="Apponovi Logo"
              width={181}
              height={35}
              priority
            />
            <Image
              className="relative  "
              src="/Video-clients-image-6.png.svg"
              alt="Apponovi Logo"
              width={181}
              height={35}
              priority
            />
            <Image
              className="relative  "
              src="/Video-clients-img-3.png.svg"
              alt="Apponovi Logo"
              width={181}
              height={35}
              priority
            />
          </div>
        </div>
      </section>
      <div className="relative border border-black lg:mx-20 md:mx-10 mx-5  my-8 ">
        <Image
          src="/div.elementor-background-overlay.svg"
          alt="Apponovi Logo"
          layout="responsive"
          width={1000}
          height={400}
         objectFit="cover"
        />
        <div className="absolute inset-0 flex font-noto-sans flex-col items-center justify-center">
          <h1 className="lg:text-6xl md:text-4xl text-xl  flex items-center  text-white">
            ONYX{" "}
            <span>
              <XIcon className="w-5 mx-3  h-5 font-bold text-white" />
            </span>{" "}
            THE FLOW
          </h1>
          <div className=" bg-white lg:mt-2"></div>
          <p className="text-white border-b border-white text-xs font-semibold lg:mt-4 mt-2">
            READ MORE
          </p>
        </div>
      </div>
    </div>
  );
}
