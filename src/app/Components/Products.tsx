import Hero from "./Hero";
import { ChevronDownIcon } from "@heroicons/react/outline";
import ProductItem from "./Reusable Componente/ProductItem";
import ProductList from "./Dummy List/Productlist";
export default function Products() {
  return (
    <main className="text-black">
      <Hero />
      <div className="bg-white lg:mx-10 mx-2 min-h-screen h-full">
        <p className="py-20  lg:w-3/6 w-full text-xl px-5 font-noto-sans mx-auto text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud.
        </p>

        <div className="flex flex-col lg:flex-row mx-5 justify-between my-5 lg:items-center items-start">
          <ul className="flex flex-col lg:flex-row font-noto-sans font-semibold text-xs lg:space-x-12 md:space-x-6 space-x-0 lg:items-center items-start">
            <li className="">ALL PRODUCTS</li>
            <li className="">LIFESTYLE</li>
            <li className="">BRAND</li>
            <li className="">OUTWEAR</li>
          </ul>
          <div className="font-noto-sans space-x-2 flex font-semibold text-xs  items-center">
            <p>FILTER</p>
            <ChevronDownIcon className="w-3 h-3" />
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 lg:mx-5 mx-2 grid-cols mb-12">
          {ProductList.map((product, index) => (
            <ProductItem
              key={index}
              imageSrc={product.imgSrc}
              isNew={product.isNew}
              title={product.title}
              price={product.price}
              newtext={product.newText}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
