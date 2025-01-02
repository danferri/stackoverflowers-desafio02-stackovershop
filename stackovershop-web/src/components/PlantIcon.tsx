import littlePlant from '../assets/Group 25.svg';

const PlantIcon = () => {
  return (
   <section>
    <footer className='littlePlant'>
      
      <div  className='littlePlantIcon'>
              <img src={littlePlant} id='littlePlant'></img>
                <label htmlFor='littlePlant'>PlantPeace</label>
                </div>
                <div className='rigths'>
              <p>compassinhos ®. All rigths reserved.</p>
              </div>
   
   </footer> 
   </section>
  )
}

export default PlantIcon
