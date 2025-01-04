import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs/AboutUs';
import PageNotFound from './pages/NotFound/NotFound';
import FormPlant from './pages/Form/FormPlant';
import Products from './components/Products';


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/about-us" element={<AboutUs />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/form" element={<FormPlant />}/>
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;