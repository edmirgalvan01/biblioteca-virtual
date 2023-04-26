import { useUser } from "../../hooks/useUser";
import { USER_TYPES } from "../../constants";
import { Profile } from "../icons/Profile";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  const { getUserType } = useUser();

  return (
    <header className="header">
      <h1>Inicio</h1>
      {getUserType() === USER_TYPES.USER_TEACHER && (
        <Link to="/profile">
          <Profile />
        </Link>
      )}
    </header>
  );
};
