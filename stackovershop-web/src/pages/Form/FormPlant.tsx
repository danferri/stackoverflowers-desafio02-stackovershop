import Footer from '../../components/component/Footer/Footer';
import Header from '../../components/component/Header/Header';
import Form from '../../components/Form';
import './form.css';


const FormPlant = () => {
  return (
    <article>
     <Header/>
        <Form onSuccess={() => {}} />
    <Footer/>
    </article>
  )
}

export default FormPlant
