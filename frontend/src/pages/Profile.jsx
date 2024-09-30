import { UserContext } from "../context/UserContext";
import "./Profile.css";
import { useContext } from "react";

const Profile = () => {
  const { logout, perfil, user } = useContext(UserContext);

  perfil(user);

  const handleLogout = (e) => {
    e.preventDefault();
    alert("Sesión cerrada");
    logout();
  };

  return (
    <div>
      {user ? (
        <p>Email: {user.email}</p>
      ) : (
        <p>Please login to view your profile.</p>
      )}
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
};
export default Profile;
