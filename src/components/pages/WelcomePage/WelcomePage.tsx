import { useNavigate } from "react-router-dom";
import { PrimaryButton, SecondaryButton } from "../../Buttons/Buttons";
import "./WelcomePage.css";

export const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <section className="welcomePage containerPage">
      <div className="welcomePage--titles">
        <p>Bienvenido/a</p>
        <h1>Biblioteca virtual</h1>
        <h3>CBTis No. 78</h3>
      </div>
      <div className="welcomePage--buttons">
        <PrimaryButton onClick={() => navigate("/register")}>
          Registrarse
        </PrimaryButton>
        <SecondaryButton onClick={() => navigate("/login")}>
          Iniciar sesión
        </SecondaryButton>
      </div>
    </section>
  );
};
