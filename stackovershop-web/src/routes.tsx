import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs/AboutUs';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;