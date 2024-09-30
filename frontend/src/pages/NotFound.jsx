import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">
        {" "}
        La página que estás buscando no existe.
      </h1>
      <p className="not-found-suggestion">
        {" "}
        Ir a {" "}
        <Link to="/" className="not-found-link">
          {" "}
          página de inicio
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
