import { createContext, useEffect, useState } from "react";
import { json } from "react-router";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);
  const [user, setUser] = useState(null);

  // Método login
  const login = async (email, password) => {
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (!response.ok) {
      alert("Error al iniciar sesión");
    } else {
      alert("Bienvenido !!!");
      localStorage.setItem("token", data.token);
      setToken(true);
    }
  };

  // Método register
  const register = async (email, password) => {
    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (!response.ok) {
      alert("Error al registrar");
    } else {
      alert("Resgistro satisfactorio !!!");
      localStorage.setItem("token", data.token);
      setToken(true);
    }
  };

  // Método logout (cierra sesión)
  const logout = () => {
    setToken(false);
    setEmail(null);
  };

  // Método perfil (ver email del usuario)
  const perfil = (user) => {
    useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
        fetch("http://localhost:5000/api/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => response.json())
          .then((data) => setUser(data));
      }
    }, []);
  };

  return (
    <UserContext.Provider
      value={{ token, logout, login, register, user, perfil }}
    >
      {children}
    </UserContext.Provider>
  );
};
