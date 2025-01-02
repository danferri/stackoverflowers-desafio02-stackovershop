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
             <div className='subTitle' >
                <p>compassinhos@gmail.com</p>
                <p>+55 41 9999-9999</p>
               
             </div>
     </div >
     <div  style={{display:'grid',
      gridTemplateColumns:'1fr 1fr 1fr 1fr 1fr ',}}>
     <section style={{gridColumn:'5',
      
     }}>

     <h3 >Links</h3>
      <p>About Us</p>
      <p>Products</p>
      <p>Blogs</p>
      </section>
    <section  style={{gridColumn:'6',}}>
        <h3>Comunnity</h3>
    
      <p>About Us</p>
      <p>Products</p>
      <p>Blogs</p>

      <section>
    <footer className='littlePlant'>
      
      <div  className='littlePlantIcon'>
              <img src={littlePlant} id='littlePlant'></img>
                <p>PlantPeace</p>
                </div>
                <div className='rigths'>
              <p>compassinhos ®. All rigths reserved.</p>
              </div>
   
   </footer> 
   </section>

</section>
</div>



    </section>
  )
}

export default Footer
