import React from 'react';
import ShopNow from '../../components/ShopNow';
import TakeCare from '../../components/StepsToTakeCare';
import Slides from '../../components/component/Splide/Slides'
import StaticSlides from '../../components/component/Splide/StaticSlide'
import Style from '../../components/component/Splide/mySlider.css'


const Home: React.FC = () => {
  return (
    <div>
      <ShopNow />
      <TakeCare />
      <Slides/>
      <h1 className="center-title">Plant In Sale</h1>
      <StaticSlides/>
      
    </div>
  );
};

export default Home;