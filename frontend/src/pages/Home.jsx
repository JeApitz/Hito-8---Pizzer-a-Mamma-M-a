// import CardPizza from "../components/CardPizza";
import Header from "../components/Header";
// import pizzaCart from "../pizzas";
import { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { formatoNumero } from "../utils/formatoNumero";
import { CartContext } from "../context/CartContext";
import React from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState([]);
  const { addToCart } = useContext(CartContext);

  const irPizza = (id) => {
    navigate(`/api/pizza/${id}`);
  };

  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    const url = "http://localhost:5000/api/pizzas";
    const response = await fetch(url);
    const data = await response.json();
    setInfo(
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(2, 1fr)",
            gap: "30px",
            justifyContent: "space-around",
            alignItems: "center",
            textAlign: "center",
            padding: "20px",
          }}
        >
          {data.map((pizza) => (
            <Card key={pizza.id} style={{ width: "20rem", height: "100%" }}>
              <Card.Img variant="top" src={pizza.img} />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  Pizza {pizza.name}
                </Card.Title>
                <div style={{ textAlign: "center" }}>
                  <Card.Text>
                    <Card.Title>Ingredientes:</Card.Title>
                    {pizza.ingredients.map((ingredient) => (
                      <div key={ingredient}>{ingredient}</div>
                    ))}
                  </Card.Text>
                </div>
                <Card.Text style={{ textAlign: "center" }}>
                  <Card.Title style={{ marginTop: "10px" }}>
                    Precio: ${formatoNumero(pizza.price)}
                  </Card.Title>
                </Card.Text>
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <Button
                    variant="secondary"
                    onClick={() => {
                      irPizza(pizza.id);
                    }}
                  >
                    Ver Más
                  </Button>
                  <button
                    style={{
                      background: "black",
                      color: "whitesmoke",
                      borderRadius: "10px",
                    }}
                    onClick={() => addToCart(pizza)}
                  >
                    Añadir
                  </button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <Header />
      {info}
      {/* <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {pizzaCart.map((pizza) => (
          <CardPizza
            key={pizza.id}
            img={pizza.img}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
          />
        ))}
      </div> */}
      {/* <CardPizza
          name="Napolitana"
          price={5950}
          ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
          img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
        />
        <CardPizza
          name="Española"
          price={6950}
          ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
          img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
        />
        <CardPizza
          name="Pepperoni"
          price={6950}
          ingredients={["mozzarella", "pepperoni", "orégano"]}
          img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
        /> */}
    </>
  );
};

export default Home;
