import {Routes, Route, Link, BrowserRouter,} from "react-router-dom"
import Form from "./components/Form";
import './index.css'
import AxioProducts from "./components/AxioProducts"




function App() {



  return ( <BrowserRouter>
 
    <article className="">
      <Form />
      <h1>The Plants on sale</h1>
      <div>
        <Link to="/axio-data">Plants</Link>
      </div>
    </article>
     <Routes>
    <Route path="/axio-data" element={<AxioProducts/>}/>
    </Routes>
  </BrowserRouter>)
  }
export default App
