import { Profile } from "../icons/Profile";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <h1>Inicio</h1>
      <Link to="/profile">
        <Profile />
      </Link>
    </header>
  );
};
