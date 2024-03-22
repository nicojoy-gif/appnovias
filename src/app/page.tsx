import Behind from "./Components/Behind";
import Blogs from "./Components/Blogs";
import Brands from "./Components/Brands";
import Footer from "./Components/Footer";
import Media from "./Components/Media";
import Newsletter from "./Components/Newletter";
import Products from "./Components/Products";
import Shop from "./Components/Shop";

export default function Home() {
return (
    <div className="bg-white min-h-screen">
       <Products />
       <Shop/>
       <Brands />
       <Blogs />
       <Newsletter />
       <Behind />
       <Media />
       <Footer />
    </div>
)
}