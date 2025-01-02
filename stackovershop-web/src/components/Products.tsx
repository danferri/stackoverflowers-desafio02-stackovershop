import { useEffect, useState } from 'react';
import api from "../services/api";

const Products = () => {

    const [plantas, setPlantas] = useState<Plant[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await api.get('/plantsList');
          setPlantas(response.data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Erro: {error}</p>;
  
    return (
      <div>
        <h1>Conteúdos:</h1>
        <ul>
          {plantas.map((p, id) => (
            <li key={id}>{p.name}</li>
          ))}
        </ul>
      </div>
    );
  };

export default Products