import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import "../Splide/mySlider.css";
import cacto from "../../../assets/fotos/cacto.png";
import cacto2 from "../../../assets/fotos/cacto2.png";
import image3 from "../../../assets/fotos/image3.png";
import image4 from "../../../assets/fotos/image4.png";
import { useNavigate } from "react-router-dom"; 

interface Plant {
  id: string;
  name: string;
  description: string;
  imgUrl: string;
  price: number;
  discount: number;
  labels: [string];
}

const images = [cacto, cacto2, image3, image4];

const MySlider: React.FC = () => {
  const [plants, setPlants] = useState<Plant[]>([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch("http://localhost:5000/plantsList")
      .then((response) => response.json())
      .then((data) => {
        setPlants(data);
        console.log(data);
      })
      .catch((error) => console.error("Erro ao buscar os dados:", error));
  }, []);

 
  const handleCardClick = (id: string) => {
    navigate(`/plants/${id}`); 
  };

  return (
    <div className="slider-container">
      <Splide
        options={{
          perPage: 4,
          focus: "center",
          gap: "-65px",
          type: "loop",
          perMove: 1,
          breakpoints: {
            600: {
              perPage: 1,
            },
            1024: {
              perPage: 2,
            },
          },
        }}
      >
        {plants.map((plant) => {
          const randomIndex = Math.floor(Math.random() * images.length);
          return (
            <SplideSlide key={plant.id}>
              <div
                className="slider-card"
                onClick={() => handleCardClick(plant.id)} 
              >
                <img
                  src={images[randomIndex]}
                  alt={plant.name}
                  className="slider-img"
                />
                <div className="card-info">
                  <h2 className="plant-name">{plant.name}</h2>
                  <p className="plant-price">${plant.price}</p>
                  <p className="rounded-label">{plant.labels[0]}</p>
                </div>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default MySlider;
