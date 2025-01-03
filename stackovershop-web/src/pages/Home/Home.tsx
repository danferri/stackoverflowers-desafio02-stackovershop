import React from 'react';
import ShopNow from '../../components/ShopNow';
import TakeCare from '../../components/StepsToTakeCare';

const Home: React.FC = () => {
  return (
    <div>
      <ShopNow />
      <TakeCare />
    </div>
  );
};

export default Home;