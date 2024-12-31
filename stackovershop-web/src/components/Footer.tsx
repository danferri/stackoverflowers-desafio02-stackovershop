import patterFooter from '../assets/img/footer.png';
import littlePlant from '../assets/Group 25.svg';

const Footer = () => {
  return (
    <section className='footerSection' style={{
        backgroundImage: `url(${patterFooter})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
       
      }}>
        <div className='distance'>
        <h1 className='footerTitle'>Stay Fresh</h1>
             <div className='subTitle'>
                <p>compassinhos@gmail.com</p>
                <p>+55 41 9999-9999</p><div>

             </div>
         </div>
     </div>
     <section className='littlePlant'>
        <div  className='littlePlantIcon'>
                <img src={littlePlant} id='littlePlant'></img>
                  <label htmlFor='littlePlant'>PlantPeace</label>
                  </div>
                  <div className='rigths'>
                <p>compassinhos ®. All rigths reserved.</p>
                </div>
      </section>
        <h3>Links</h3>
            <p>About Us</p>
            <p>Products</p>
            <p>Blogs</p>
        <h3>Community</h3>
            <p>About Us</p>
            <p>Products</p>
            <p>Blogs</p>
            

    </section>
  )
}

export default Footer
