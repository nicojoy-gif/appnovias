import Download from "./Components/Download";
import DownloadApp from "./Components/DownloadApp";
import Faq from "./Components/Faq";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Metrics from "./Components/Metrics";
import Nav from "./Components/Nav";
import Partners from "./Components/Partners";
import Stories from "./Components/Stories";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-12 bg-customLightBlue">
      <Nav />
     <Hero />
     <Partners />
     <Features />
     <Metrics />
     <Download />
     <Stories />
     <Faq />
     <DownloadApp />
     <Footer />
    </main>
  );
}
