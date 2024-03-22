import Image from "next/legacy/image";
import { BookmarkIcon, ClipboardIcon, EyeIcon } from "@heroicons/react/outline";
import ProductList from "../Dummy List/Productlist";
interface ProductItemProps {
  imageSrc: string;
  isNew?: boolean;
  title: string;
  price: string;
  newtext: string;
}

const ProductItem: React.FC<ProductItemProps> = ({
  imageSrc,
  isNew,
  newtext,
  title,
  price,
}) => {
  return (
    <div className="relative border  text-black border-black">
      {/* Sales tag */}
      {isNew && (
        <div className="absolute top-6 left-6 z-10 bg-white border border-black px-3">
          <p className="text-sm font-semibold">{newtext}</p>
        </div>
      )}

      {/* Image */}
      <div className="border-b h-96 border-black">
        <Image
          className="relative  h-96"
          src={imageSrc}
          alt="Product image"
         
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Bookmark and Eye icons */}
      <div className="absolute top-6 right-6 flex flex-col items-center space-y-2 z-10">
        <BookmarkIcon className="w-4 h-4 text-black" />
        <EyeIcon className="w-4 h-4 text-black" />
      </div>

      {/* Product details */}
      <div className="bg-white border-t  border-black relative py-3">
        <div className="flex justify-between items-center">
          <div className="px-7">
            <h3 className="text-xs font-semibold">{title}</h3>
            <p className="text-[#030303] text-sm">{price}</p>
          </div>
          <div className="px-5">
            <ClipboardIcon className="w-4 h-4 text-black" />
          </div>
          <div className="absolute h-[59px] w-[0.5px] right-14 bg-black"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
