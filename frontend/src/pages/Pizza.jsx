import { useEffect, useState } from "react";
import './PizzaCard.css'
import { formatoNumero } from "../utils/formatoNumero";
import { useParams } from "react-router";

const Pizza = () => {
  const [info, setInfo] = useState([]);

  const {id} = useParams()

  useEffect(() => {
    consultarApi();
  }, [id]);

  const consultarApi = async () => {
    const url = `http://localhost:5000/api/pizzas/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    setInfo(
        <div style={{display:'flex', justifyContent:'center'}}>
      <div className="pizza-card">
        <img src={data.img} alt={data.name} className="pizza-image" />
        <div className="pizza-details">
          <h1 className="pizza-name"> Pizza: {data.name}</h1>
          <p className="pizza-price">
            <strong>Precio:</strong> ${formatoNumero(data.price)}
          </p>
          <p className="pizza-description">
            <strong>Descripción:</strong> {data.desc}
          </p>
          <p className="pizza-ingredients">
            <strong>Ingredientes:</strong>
          </p>
          <ul className="ingredient-list">
            {data.ingredients.map((ingredient, index) => (
              <li key={index} className="ingredient-item">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
      </div>
      </div>
    );
  };

  return <>{info}</>;
};

export default Pizza;
