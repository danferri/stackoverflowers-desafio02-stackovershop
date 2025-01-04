import React from "react";
import ShopNow from "../../components/ShopNow";
import TakeCare from "../../components/StepsToTakeCare";
import Slides from '../../components/component/Splide/Slides';
import Header from "../../components/component/Header/Header";
import Footer from "../../components/component/Footer/Footer";
import StaticSlides from "../../components/component/Splide/StaticSlide";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <ShopNow />
      <TakeCare />
      <h1 className="heading-text" id="carrossel1">
        This Weeks Most Popular{" "}
        <span className="take-care-highlight"> And Best Salling</span>
      </h1>
      <Slides />
      <h1 className="heading-text" id="carrossel2">
        Plants In <span className="take-care-highlight"> Sale</span>
      </h1>
      <StaticSlides />
      <Footer />
    </div>
  );
};

export default Home;
