import Image from "next/image";
import Link from "next/link";

interface BlogItemProps {
  date: string;
  category: string;
  title: string;
  readMoreLink: string;
  imageSrc: string;
  imageHeight: number;
  imageAlt: string;
}

const BlogItem: React.FC<BlogItemProps> = ({
  date,
  category,
  title,
  readMoreLink,
  imageSrc,
  imageHeight,
  imageAlt,
}) => {
  return (
    <div className=" text-black font-nunito-sans">
      {/* Date */}
      

      {/* Image */}
      <div className="flex relative mx-5 justify-center"> 
        <div className="relative">
          <Image
            src={imageSrc}
            alt={imageAlt}
            height={imageHeight}
            width={1000}
            priority
          />
        </div>
        <div className="absolute top-6 left-6 z-10 bg-white border border-black px-3">
        <p className="text-xs uppercase py-1 tracking-tight">{date}</p>
      </div>
      </div>

      {/* Category */}
      <div className="flex justify-center tracking-tight border-b border-black py-2 text-xs items-center">
        <p className="flex items-center">
          {category}
          <span className="h-3 bg-black mx-2 w-[2.7px]"></span>
          INSPIRATION
        </p>
      </div>

      {/* Title */}
      <div className="py-3 flex justify-center">
        <p className="text-2xl text-center">{title}</p>
      </div>

      {/* Read More */}
      <div className="text-center">
        <p className="text-xs font-bold">
          <Link className="border-b font-bold border-black" href={readMoreLink}>READ MORE</Link>
        </p>
      </div>
    </div>
  );
};

export default BlogItem;
