import {useState, useEffect} from "react";
import axios from "axios";



const AxioProducts = () => {



  const [products , setProducts ]= useState([]);
  const [error, setError] = useState("");

useEffect(()=> {
  const fetchProducts = async() => {
    try{
const response = await axios.get(
  "http://localhost:5000/plantsList");

setProducts(response.data)

    }catch(error){

      setError(error.message);
    }
  }

  fetchProducts();
}, []);

  
  return (
    <div>
      <h1>Products(Axios)</h1>
      {error ? (<p>Erro: {error}</p>
      ) : (  
        products.map((product) => (
          <section key={product.id}>
            <h2>{product.name}</h2>
            <h2>{product.subtitle}</h2>
            <h2>{product.label}</h2>
            <h2>{product.price}</h2>
            <h2>{product.discountPercentage}</h2>
            <h2>{product.features}</h2>
            <h2>{product.description}</h2>
          </section>

        )) 
      )}
      
       
    </div>
  );
};

export default AxioProducts
