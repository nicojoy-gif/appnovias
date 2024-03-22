import Image from "next/image";

interface ShopCollectionProps {
  imageSrc: string;
  title: string;
}

const ShopCollection: React.FC<ShopCollectionProps> = ({ imageSrc, title }) => {
  return (
    <div className="relative text-black border-y border-r lg:my-10 my-0 border-black">
      <Image
        className="relative "
        src={imageSrc}
        alt="Product image"
        width={900}
        height={900}
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h2 className="text-4xl  text-black">{title}</h2>

        <button className=" w-60 px-6 py-2 mt-6 text-xs font-semibold my-6  border border-black">
          SHOP COLLECTION
        </button>
      </div>
    </div>
  );
};

export default ShopCollection;
