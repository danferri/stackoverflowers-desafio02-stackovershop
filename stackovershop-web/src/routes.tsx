import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs/AboutUs';
import PageNotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import FormPlant from './pages/Form/FormPlant';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        <Route path='/register' element={<FormPlant/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;