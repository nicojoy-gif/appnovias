import Image from "next/legacy/image";

export default function Behind() {
  return (
    <div className="mb-8 mt-20 text-black">
      <section className="container mx-auto grid lg:grid-cols-3  grid-cols-1 gap-12">
        <div className="mx-5 ">
          <Image
            className="relative "
            src="/main-home-image-4-1.jpg.png"
            alt="Apponovi Logo"
            layout="responsive"
            width={1000}
            height={1000}
            priority
          />
        </div>
        <div className="mx-5">
          <Image
            className="relative "
            src="/main-home-image-3-1.jpg.png"
            alt="Apponovi Logo"
            layout="responsive"
            width={1000}
            height={1000}
            priority
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="font-noto-sans flex px-5 flex-col">
            <h1 className="text-3xl  w-4/6">
              Meet The Artists Behind The Corsen Maria & Sophia
            </h1>
            <p className="text-lg w-5/6 py-3 font-nunito-sans">
              Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna.
            </p>
            <button className="w-52 border py-3 mt-5 items-start border-black  text-xs font-semibold">
              SHOP COLLECTION
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
