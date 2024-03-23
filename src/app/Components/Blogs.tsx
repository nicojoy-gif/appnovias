import { it } from "node:test";
import BlogItem from "./Reusable Componente/BlogItem";

export default function Blogs() {
  const blogItems = [
    {
      date: "September 29, 2022",
      category: "FASHION",
      title: "Top 10 Winter Essentials For 2022 You Should Try",
      readMoreLink: "/blog/top-10-winter-essentials",
      imageSrc: "/Blog-list-img-1.jpg.svg",

      imageHeight: 254,
      imageAlt: "Blog Image 1",
    },
    {
      date: "September 29, 2022",
      category: "FASHION",
      title: "The Complete Communication Skills Master Class For Work",
      readMoreLink: "/blog/discover-hidden-gems-europe",
      imageSrc: "/Blog-list-img-2.jpg.svg",

      imageHeight: 354,
      imageAlt: "Blog Image 1",
    },
    {
      date: "September 29, 2022",
      category: "FASHION",
      title: "Premium Consultant Course For You",
      readMoreLink: "/blog/delicious-holiday-recipes",
      imageSrc: "/Blog-list-img-3.jpg.png",

      imageHeight: 254,
      imageAlt: "Blog Image 1",
    },
  ];

  return (
    <div className="bg-white text-black h-full lg:py-14 py-0 flex flex-col items-center justify-center font-noto-sans ">
      <div className="text-center flex py-8 flex-col items-center ">
        <h1 className="lg:text-3xl md:text-xl text-lg">Read Our Blog Posts</h1>
        <p className="lg:w-full lg:text-md text-sm  py-2  w-5/6">
          Lorem ipsum dolor sit amet, consectetur adipiscing ectetur elit,
          <br /> sed do eiusmod.
        </p>
      </div>
      <div className="grid lg:mx-20 md:mx-10 mx-5 gap-12 lg:grid-cols-3 items-center grid-cols-1">
        {blogItems.map((item, index) => (
          <BlogItem
            key={index}
            date={item.date}
            category={item.category}
            title={item.title}
            readMoreLink={item.readMoreLink}
            imageAlt={item.imageAlt}
            imageSrc={item.imageSrc}
            imageHeight={item.imageHeight}
          />
        ))}
      </div>
    </div>
  );
}
