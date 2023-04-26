import { useUser } from "../../hooks/useUser";
import { USER_TYPES } from "../../constants";
import { useEffect, useState } from "react";
import { Profile } from "../icons/Profile";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  const { getUserSession } = useUser();

  const [userType, setUserType] = useState<string>(USER_TYPES.USER_STUDENT);

  useEffect(() => {
    getUserSession().then(({ data, error }) => {
      if (!error) {
        const type = data.session?.user?.user_metadata.userType;
        setUserType(type);
      }
    });
  }, []);

  return (
    <header className="header">
      <h1>Inicio</h1>
      {userType === USER_TYPES.USER_TEACHER && (
        <Link to="/profile">
          <Profile />
        </Link>
      )}
    </header>
  );
};
