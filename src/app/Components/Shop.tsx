import ShopCollection from "./Reusable Componente/ShopCollection";

export default function Shop() {
  // Array of shop collections
  const shopCollections = [
    {
      imageSrc: "/category-img-4.jpg.png",
      title: "MAN",
     
    },
    {
      imageSrc: "/category-img-5.jpg.png",
      title: "WOMAN",
     
    }
  ];

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-0 grid-cols-1">
        {/* Map through the shop collections array and render ShopCollection for each item */}
        {shopCollections.map((collection, index) => (
          <ShopCollection
            key={index}
            imageSrc={collection.imageSrc}
            title={collection.title}
            
          />
        ))}
      </div>
    </div>
  );
}
