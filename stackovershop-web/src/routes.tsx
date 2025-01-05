import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs/AboutUs';
import PageNotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import Product from './pages/ProductsPage/Product';
import FormPlant from './pages/Form/FormPlant';
import AllProductsPage from './pages/AllProductsPage/Products';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/plants/:id" element={<Product />} />
        <Route path='/register' element={<FormPlant />}/>
        <Route path='/products' element={<AllProductsPage />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;