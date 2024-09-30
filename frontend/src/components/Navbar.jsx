import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { formatoNumero } from "../utils/formatoNumero";
import { Link} from "react-router-dom";
import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const total = 25000;
  // const token = true;

  const {token, logout} = useContext(UserContext)

  const { getTotalPrice } = useContext(CartContext);
  const totalPrice = getTotalPrice();


  return (
    <div className="navbar">
      <div style={{ display: "flex", gap: "10px" }}>
        <h2>Pizzería Mamma Mia!</h2>
        <div className="navbar-button">
          <Link to="/">
            <Button variant="dark">🍕Home</Button>
          </Link>
          {token ? (
            <>
              <Link to="/profile">
                <Button variant="dark">🔓Profile</Button>
              </Link>
              <Link to="/logout">
                <Button variant="dark" onClick={logout}>🔒Logout</Button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="dark">🔐Login</Button>
              </Link>
              <Link to="/register">
                <Button variant="dark">🔐Register</Button>
              </Link>
            </>
          )}
        </div>
      </div>
      <Link to="/cart">
        <Button variant="success">🛒Total: ${formatoNumero(totalPrice)}</Button>
      </Link>
    </div>
  );
};

export default Navbar;
