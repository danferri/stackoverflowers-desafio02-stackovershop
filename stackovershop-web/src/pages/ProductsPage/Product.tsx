import Products from '../../components/Products'
import './ProductsStyle.css'
import Header from '../../components/component/Header/Header'
import Footer from '../../components/component/Footer/Footer'

const Product = () => {
  return (
    <div>
      <Header />
        <Products />
      <Footer />
    </div>
  )
}

export default Product