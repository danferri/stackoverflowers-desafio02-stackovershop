import {Routes, Route, Link, BrowserRouter,} from "react-router-dom"
import Form from "./components/Form";
import './index.css'
import AxioProducts from "./components/AxioProducts"
import Footer from "./components/Footer";
import Productsmanager from "./components/Productsmanager";




function App() {



  return ( <BrowserRouter>
 
    <article className="articleForm">
 
      <h1>The Plants on sale</h1>
      <div>
        <Link to="/axio-data">Axio data</Link>
        <Link to="/products">Products</Link>
      </div>
    </article>
     <Routes>
    <Route path="/form" element={<Form />}/>
    <Route path="/axio-data" element={<AxioProducts/>}/>
    <Route path="/products" element={<Productsmanager/>}/>
    </Routes>
    <footer><Footer/></footer>
  </BrowserRouter>)
  }
export default App
