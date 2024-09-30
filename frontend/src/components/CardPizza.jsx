import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { formatoNumero } from "../utils/formatoNumero";

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Card style={{ width: "20rem", height: "100%" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>Pizza {name}</Card.Title>
          <div style={{ textAlign: "center" }}>
            <Card.Text>
              <Card.Title>Ingredientes:</Card.Title>
              {ingredients.map((ingredient) => (
                <div key={ingredient}>{ingredient}</div>
              ))}
            </Card.Text>
          </div>
          <Card.Text style={{ textAlign: "center" }}>
            <Card.Title style={{marginTop: "10px" }}>
              Precio: ${formatoNumero(price)}
            </Card.Title>
          </Card.Text>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Button variant="secondary">Ver</Button>
            <Button variant="dark">Añadir</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardPizza;
