import config from "@config/config.json";
import Footer from "@layouts/partials/Footer";
import "swiper/swiper.min.css";
import HomeHero from "@layouts/components/home-hero";
import Navbar from "@layouts/components/Navbar";
import AboutUS from "@layouts/components/about-us";
import ServicesList from "./all-services";
import WhatsApp from "@layouts/components/whatsapp";

const Home = ({ frontmatter }) => {


  return (
    <div>
      {/* Banner */}
      <Navbar />
      <HomeHero />
<AboutUS/>

<ServicesList/>
<WhatsApp/>
      <Footer />
    </div>
  );
};


export default Home;
