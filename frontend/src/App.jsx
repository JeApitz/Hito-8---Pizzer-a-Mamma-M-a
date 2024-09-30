import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Pizza from "./pages/Pizza";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import { Navigate, Route, Routes } from "react-router-dom";
import CartProvider from "./context/CartContext";
import { UserContext } from "./context/UserContext";
import { useContext } from "react";
import { Logout } from "./pages/Logout";

function App() {
  const { token } = useContext(UserContext);
  return (
    <>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/register"
            element={token ? <Navigate to="/" /> : <Register />}
          ></Route>
          <Route
            path="/login"
            element={token ? <Navigate to="/" /> : <Login />}
          ></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/api/pizza/:id" element={<Pizza />}></Route>
          <Route
            path="/profile"
            element={token ? <Profile /> : <Navigate to="/login" />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/logout" element={<Logout />} />
        </Routes>
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
