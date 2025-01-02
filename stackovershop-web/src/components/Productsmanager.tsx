import {useState , useEffect} from 'react';
import axios from 'axios';


const Productsmanager = () => {

    
  const [products , setProducts ]= useState([]);
  const [error, setError] = useState("");

const handleSuccess = (product , operation) => {
    if(operation === 'add')
}

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
     <h1> Product</h1>
     {
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
      }
    </div>
  )
}

export default Productsmanager
