import { Profile } from "../icons/Profile";
import { Link } from "react-router-dom";
import { Search } from "../icons/Search";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <h1>Inicio</h1>
      <nav className="header--buttons">
        <Link to="/profile">
          <Search />
        </Link>
        <Link to="/profile">
          <Profile />
        </Link>
      </nav>
    </header>
  );
};
