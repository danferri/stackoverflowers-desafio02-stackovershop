import { useState, useEffect } from 'react';
import axios from 'axios';
import Form from '../components/Form';

const Productsmanager = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  const handleSuccess = (product: any) => {
    console.log("New product added:", product);
    setProducts((currentProducts) => [product, ...currentProducts]);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/plantsList');
        console.log("Fetched products:", response.data);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(error.message);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product Manager</h1>
      <Form onSuccess={handleSuccess} />
      {error && <p>Error: {error}</p>}
      {products.map((product: any) => (
        <section key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.subtitle}</p>
          <p>{product.label}</p>
          <p>{product.price}</p>
          <p>{product.discountPercentage}</p>
          <p>{product.features}</p>
          <p>{product.description}</p>
        </section>
      ))}
    </div>
  );
};

export default Productsmanager;