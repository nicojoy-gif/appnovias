import Image from "next/legacy/image";
import Nav from "./Nav";
import Arrows from "./Reusable Componente/Arrows";

export default function Hero() {
  return (
    <div className="relative text-black h-screen">
      <nav className="absolute top-0 left-0 right-0 z-10 flex w-full">
        <Nav />
      </nav>

      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/hero.png"
          alt="Hero Image"
          layout="fill"
          sizes="100vw"
          objectFit="cover"
          priority
        />
      </div>
      <Arrows />
      <div className="flex items-center justify-center absolute bottom-1 left-0 right-0">
        <div className="border-b border-black w-full  my-6 lg:mx-20 md:mx-10 mx-5  px-20">
          <h2 className="text-4xl font-noto-sans">Mixed Textiles</h2>
          <p className="py-2 text-lg w-full md:w-1/4 tracking-tight leading-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </p>
          <button className="border px-6 text-xs font-semibold mt-6 mb-8 w-56 border-black py-3">
            SHOP COLLECTION
          </button>
        </div>
      </div>
    </div>
  );
}
