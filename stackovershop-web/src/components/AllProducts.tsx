import React, { useEffect, useState } from "react";
import cacto from "../assets/fotos/cacto.png";
import cacto2 from "../assets/fotos/cacto2.png";
import image3 from "../assets/fotos/image3.png";
import image4 from "../assets/fotos/image4.png";
import { useNavigate } from "react-router-dom";
import "../pages/AllProductsPage/aprd.css";

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

const AllProducts: React.FC = () => {
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
    <div>
      <div className="products-header">
        <h1>
          Our All <span>Products</span>
        </h1>
      </div>
      <div className="products-container">
        {plants.map((plant) => {
          const randomIndex = Math.floor(Math.random() * images.length);
          return (
            <div
              key={plant.id}
              className="products-card"
              onClick={() => handleCardClick(plant.id)}
            >
              <img
                src={images[randomIndex]}
                alt={plant.name}
                className="products-img"
              />
              <div className="products-info">
                <h2 className="plants-name">{plant.name}</h2>
                <p className="plants-price">${plant.price}</p>
                <div className="labels-container">
                  {plant.labels.map(
                    (label, index) =>
                      label && (
                        <p key={index} className="roundeds-label">
                          {label}
                        </p>
                      )
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllProducts;
