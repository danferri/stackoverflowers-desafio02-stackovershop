import { useNavigate } from 'react-router-dom'; 
import image404 from '../../assets/fotos/lupa-removebg-preview.png';
import './erro.css';

const PageNotFound = () => {
  const navigate = useNavigate(); 

  const handleGoToAboutUs = () => {
    navigate('/'); 
  };

  return (
    <section className="container">
      <h1>
        404 Not Found
      </h1>
      <img id="fotohomem" src={image404} alt="Homem procurando algo com uma lupa" />
      <h1>
        Opsss! Página não localizada!
      </h1>
      <button onClick={handleGoToAboutUs} className="about-us-button">
        Voltar para página inicial
      </button>
    </section>
  );
};

export default PageNotFound;
