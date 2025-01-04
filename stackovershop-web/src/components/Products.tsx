import { useEffect, useState } from 'react';
import api from "../services/api";
import '../pages/ProductsPage/ProductsStyle.css';
import { useParams } from 'react-router-dom';



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
    const { id } = useParams();
    const [plant, setPlant] = useState<Plant | null>();
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await api.get(`/plants/${id}`);
          setPlant(response.data);
        } catch (error) {
          setError((error as any).message);
        }
      };

      fetchData();
    }, []);
  
    if (error) return <p>Erro: {error}</p>;
    
    return (
      <div className='products'>
          {plant && (
        <div>
          <div className='PlantImage'>
          {/* Imagem */}
          <img src={plant.imgUrl} alt={plant.name} className='image' onError={(e) => e.currentTarget.src = '/assets/img/'} />
          </div>
          <div className='PlantInfo'>
            {/* Título e Subtítulo */}
            <div className='plantTitle'>
          <h3 className='plantName'>{plant.name}</h3>
          <p className='plantSub'>{plant.subtitle}</p>
            </div>

            {/* Labels e Tipo de Planta */}
            <div className='plantLabels'>
          {plant.labels.map((label: string, id: number) => (
            <p key={id} className='plantLabel'>{label}</p>
          ))}
          <p className='plantType'>{plant.plantType}</p>
            </div>

            {/* Preço e Botão */}
            <p className='plantPrice'>${plant.price}</p>
            <button>Check out</button>

            {/* Features e Descrição */}
            <p className='features'>Features</p>
            <ul>
          <li className='plantFeatures'>{plant.features}</li>
            </ul>
            <div className='plantDescription'>
          <p className='description'>Description</p>
          <p className='plantDescriptions'>{plant.description}</p>
            </div>
          </div>
        </div>
          )}
        </div>
    );
  };

export default Products