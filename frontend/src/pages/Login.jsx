import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
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
        <button type="submit">Ingresar</button>
      </form>
    </>
  );
};

export default Login;
