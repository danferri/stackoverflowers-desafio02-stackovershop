import {Routes, Route, Link, BrowserRouter,} from "react-router-dom"
import Form from "./components/Form";
import './index.css'
import AxioProducts from "./components/AxioProducts"
import Footer from "./components/Footer";




function App() {



  return ( <BrowserRouter>
 
    <article className="articleForm">
      <Form />
      <h1>The Plants on sale</h1>
      <div>
        <Link to="/axio-data">Plants</Link>
      </div>
    </article>
     <Routes>
    <Route path="/axio-data" element={<AxioProducts/>}/>
    <Route path="/footer" element={<Footer/>}/>
    </Routes>
  </BrowserRouter>)
  }
export default App
