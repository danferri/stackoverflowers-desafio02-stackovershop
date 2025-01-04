import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs/AboutUs';
import PageNotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import FormPlant  from "../src/components/Form"; 

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/about-us" element={<AboutUs />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/form" element={<FormPlant onSuccess={() => {}} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;