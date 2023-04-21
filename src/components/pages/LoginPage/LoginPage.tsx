import { useState } from "react";
import { BackButton } from "../../BackButton";
import { PrimaryButton } from "../../Buttons/Buttons";
import { InputField } from "../../Fields/Fields";
import "./LoginPage.css";
import { useUser } from "../../../hooks/useUser";

export const LoginPage = () => {
  const { signInUser } = useUser();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    resetForm();
    signInUser(email, password);
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <div className="loginPage">
      <BackButton />
      <h1>Iniciar sesión</h1>
      <form onSubmit={handleSubmit} className="loginForm">
        <InputField
          name="email"
          type="email"
          label="Correo electrónico"
          required={true}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <InputField
          name="password"
          type="password"
          label="Contraseña"
          required={true}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
        <PrimaryButton type="submit">Iniciar sesión</PrimaryButton>
      </form>
    </div>
  );
};
