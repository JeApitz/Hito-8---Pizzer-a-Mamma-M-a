import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserContext } from "../context/UserContext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    register(email, password);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Registrar</button>
      </form>
    </>
  );
};

export default Register;
