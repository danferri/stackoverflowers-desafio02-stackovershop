import { useEffect, useState } from 'react';
import api from "../services/api";
import '../pages/ProductsPage/ProductsStyle.css';



interface Plant {
    name         :    string
    subtitle     :    string
    labels       :    [string] 
    price        :    number    
    isInSale     :    boolean
    discountPercentage: number   
    features     :    string
    description  :    string
    imgUrl       :    string
    plantType    :    string
}

const Products = () => {

    const [plantas, setPlantas] = useState<Plant[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await api.get('/plantsList');
          setPlantas(response.data as Plant[]);
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
      <div className='products'>
          {plantas.map((plant, id) => (
            <div key={id} className='PlantInfo'>
            {/* Título e Subtítulo */}
            <div className='plantTitle'>
                <h3 className='plantName'>{plant.name}</h3>
                <p className='plantSub'>{plant.subtitle}</p>
            </div>

            {/* Labels e Tipo de Planta */}
            <div className='plantLabels'>
                {plant.labels.map((label, id) => (
                    <p key={id} className='plantLabel'>{label}</p>
                ))}
                <p className='plantType'>{plant.plantType} planta</p>
            </div>

            {/* Preço e Botão */}
            <p className='plantPrice'>$ {plant.price.toFixed(2)}</p>
            <button>Check out</button>

            {/* Features e Descrição */}
            <p className='features'>Features</p>
            <p className='plantFeatures'>{plant.features}</p>

            <div className='plantDescription'>
                <p className='description'>Description</p>
                <p className='plantDescriptions'>{plant.description}</p>
            </div>

            {/* Imagem */}
            <img src={plant.imgUrl} alt={plant.name} className='image' />
        </div>
          ))}
      </div>
    );
  };

export default Products