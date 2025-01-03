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
          {/* {plantas.map((plant, id) => ( */}

          {/* Imagem */}
          <img src="https://cdn.awsli.com.br/2500x2500/2441/2441441/produto/247945060/6d433d62-0af2-4d1e-987c-c793c7cceffb-6jdf614gfd.jpeg" alt="cacto" className='image' />
          
            <div className='PlantInfo'>
            {/* Título e Subtítulo */}
            <div className='plantTitle'>
                <h3 className='plantName'>Cacto</h3>
                <p className='plantSub'>Lindo cheiroso (nem da pra ser cheiroso)</p>
            </div>

            {/* Labels e Tipo de Planta */}
            <div className='plantLabels'>
                {/* {plant.labels.map((label, id) => ( */}
                    <p  className='plantLabel'>grande</p>
                {/* ))} */}
                <p className='plantType'>indoor</p>
            </div>

            {/* Preço e Botão */}
            <p className='plantPrice'>$ 10</p>
            <button>Check out</button>

            {/* Features e Descrição */}
            <p className='features'>Features</p>
            <ul>
            <li className='plantFeatures'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus laboriosam eum libero architecto quaerat accusamus dolorum omnis odit, quidem dignissimos aliquid et rem minus vitae accusantium, quos quibusdam exercitationem vero.</li>
            </ul>
            <div className='plantDescription'>
                <p className='description'>Description</p>
                <p className='plantDescriptions'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur reiciendis unde illo et aliquid numquam quod veniam eos asperiores sed voluptates doloribus, velit officiis at minus inventore modi maiores quisquam?</p>
            </div>
            </div>
          {/* ))} */}
      </div>
    );
  };

export default Products