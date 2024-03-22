
import Image from "next/image";
const Arrows = () => {
  return (
    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full px-12 z-10">
      <div className="text-black cursor-pointer">
      <Image
                className="relative "
                src="/left.svg"
                alt="Arrow left"
                width={16}
                height={29}
                priority
              />
      </div>
      <div className="text-black cursor-pointer">
      <Image
                className="relative "
                src="/right.svg"
                alt="Arrow right"
                width={16}
                height={29}
                priority
              />
      </div>
    </div>
  );
};

export default Arrows;
