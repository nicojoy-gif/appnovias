import Image from "next/image";

export default function Purpose() {
  return (
    <div>
      <div className="h-64 flex flex-col justify-center text-black items-center">
        <div className="border-y border-black h-32 w-full">
          <div className="grid lg:grid-cols-4 grid-cols-2 h-full">
            <div className="flex  items-center  border lg:py-0 py-4 justify-center  border-black">
              <Image
                className="relative"
                src="/svg.svg"
                alt="Apponovi Logo"
                width={24}
                height={7}
                priority
              />
              <p className="text-sm font-medium text-center px-5 font-noto-sans">
                FAST DELIVERY
              </p>
            </div>
            <div className="flex  items-center justify-center border  border-black">
              <Image
                className="relative"
                src="/svg (1).svg"
                alt="Apponovi Logo"
                width={24}
                height={7}
                priority
              />
              <p className="text-sm font-medium text-center px-5 font-noto-sans">
                FREE RETURNS
              </p>
            </div>
            <div className="flex  items-center justify-center border  lg:py-0 py-4  border-black">
              <Image
                className="relative"
                src="/svg (2).svg"
                alt="Apponovi Logo"
                width={24}
                height={7}
                priority
              />
              <p className="text-sm font-medium text-center px-5 font-noto-sans">
                SECURE CHECKOUT
              </p>
            </div>
            <div className="flex  items-center justify-center border  border-black">
              <Image
                className="relative"
                src="/svg (3).svg"
                alt="Apponovi Logo"
                width={24}
                height={7}
                priority
              />
              <p className="text-sm font-medium text-center px-5 font-noto-sans">
                ORDER TRACKING
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
