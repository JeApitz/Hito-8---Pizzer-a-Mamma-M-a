import React, { useContext, useState } from "react";
import formatoNumero from "../utils/formatoNumero";
import { CartContext } from "../context/CartContext";
import "./Cart.css";
import { UserContext } from "../context/UserContext";
import { Alert } from "react-bootstrap";

const Cart = () => {
  const { cart, setCart, removeFromCart, getTotalPrice } =
    useContext(CartContext);
  const { token } = useContext(UserContext);

  const checkout = async () => {
    if (cart.length > 0) {
      const response = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ cart }),
      });

      if (!response.ok) {
        throw new Error("Error en la compra");
      }
      alert("Compra realizada con éxito.");
    }
  };

  return (
    <div className="cart-container">
      <div className="cart-items">
        {cart.map((pizza) => (
          <div key={pizza.id} className="cart-item">
            <img src={pizza.img} alt={pizza.name} className="pizza-image" />
            <div className="pizza-details">
              <h2>{pizza.name}</h2>
              <p>Precio: ${formatoNumero(pizza.price)}</p>
              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  style={{
                    background: "black",
                    color: "whitesmoke",
                    borderRadius: "10px",
                  }}
                  onClick={() => removeFromCart(pizza.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h2>Total: ${formatoNumero(getTotalPrice())}</h2>
      </div>
      {token ? (
        <>
          <button className="pay-button" onClick={() => checkout()}>
            Pagar
          </button>
        </>
      ) : (
        <h4 style={{ color: "red" }}>
          ..:: Ingresa a tu cuenta para poder pagar ::..
        </h4>
      )}
    </div>
  );
};

export default Cart;
