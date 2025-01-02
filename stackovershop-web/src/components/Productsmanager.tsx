import {useState , useEffect} from 'react';
import axios from 'axios';
import { Form } from 'react-router-dom';
import FormPlant from '../components/Form';

//product tem os dados do form 
const product = FormPlant;


const Productsmanager = () => {

    
  const [products , setProducts ]= useState([]);
  const [error, setError] = useState("");

const handleSuccess = (product , operation) => {
    if(operation === 'add'){
        setProducts((currentProducts) => [product, ...currentProducts])
    }
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
     {<Form onSuccess={handleSuccess}/>
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
        ))}
    </div>
  )
}

export default Productsmanager
