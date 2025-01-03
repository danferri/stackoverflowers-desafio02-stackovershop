import React from 'react';
import '../pages/Home/home.css';
import watering from '../assets/fotos/watering.png'
import sunlight from '../assets/fotos/sunlight.png'
import nutrients from '../assets/fotos/nutrients.png'
import stunning1 from '../assets/fotos/stunning1.png'
import stunning2 from '../assets/fotos/stunning2.png'
import stunning3 from '../assets/fotos/stunning3.png'


const TakeCare: React.FC = () => {
  return (
    <div className="steps-to-take">
        <section className='title-tc'>
            <h1 className="take-care-heading">
                Steps To Take Care Of Your<span className="take-care-highlight"> Plants</span>
            </h1>
            <p className="take-care-text">
            By following these three steps - proper watering, appropriate sunlight, and providing essential nutrients
             - you'll be well on your way to maintaining healthy and thriving plants.
            </p>
            <br /><br /><br />
        </section>
        <section className='cards'>
            <div id='watering'>
                <img src={watering} alt="" />
                <h3>Watering</h3>
                <p>Water your plants when the top inch of soil feels dry to the touch. Avoid overwatering, 
                    as it can lead to root  dehydration.</p>
            </div>
            <div id='sunlight'>
                <img src={sunlight} alt="" />
                <h3>Sunlight</h3>
                <p>Most plants need adequate sunlight to thrive. Place your plants in areas that receive 
                    the appropriate amount of light for their specific needs</p>
            </div>
            <div id='nutrients'>
                <img src={nutrients} alt="" />
                <h3>Nutrients and Fertlizing</h3>
                <p>Choose a suitable fertilizer based on the specific needs of your plants, 
                    whether it's a balanced or specialized formula.</p>
            </div>
        </section>
        <section className='images'>
            <div>
                <img src={stunning1} alt="" />
            </div>
            <div>
                <img src={stunning2} alt="" />
            </div>
            <div>
                <img src={stunning3} alt="" />
                <p>
                    Our website offers a wide array of stunning plants, ranging from vibrant flowers 
                    to lush indoor foliage, allowing you to create your very own green oasis. In addition 
                    to our extensive plant selection, we also provide gardening kits and fertilizers to equip 
                    you with everything you need to nurture your plants and achieve gardening success. But we don't 
                    stop there! We believe that knowledge is the key to a thriving garden, so we offer a wealth of 
                    information and resources on gardening techniques, plant care tips, and landscaping ideas. Whether 
                    you're a seasoned gardener or just starting your green journey, our goal is to inspire and support 
                    you every step of the way. Get ready to explore our virtual garden and discover the joys of 
                    gardening with us!
                </p>
                <button className="shop-now-button">See more photos</button>
            </div>
        </section>
    </div>
  );
};

export default TakeCare;