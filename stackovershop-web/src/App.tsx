import {Routes, Route, Link, BrowserRouter,} from "react-router-dom"
import Form from "./components/Form";
import './index.css'
import AxioProducts from "./components/AxioProducts"




function App() {



  return ( <BrowserRouter>
 
    <article className="bg-zinc-100 min-h-screen w-full flex flex-col items-center gap-6 pt-8">
      <h1 className="font-bold text-3xl">Somenthing Form </h1>
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
