import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs/AboutUs';
import PageNotFound from './pages/NotFound/NotFound';
import Product from './pages/ProductsPage/Product';
import Products from './components/Products';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;