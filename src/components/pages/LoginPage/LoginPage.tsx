import { useState } from "react";
import { BackButton } from "../../BackButton";
import { PrimaryButton } from "../../Buttons/Buttons";
import { InputField } from "../../Fields/Fields";
import "./LoginPage.css";

export const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="loginPage">
      <BackButton />
      <h1>Iniciar sesión</h1>
      <form className="loginForm">
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
        <PrimaryButton>Iniciar sesión</PrimaryButton>
      </form>
    </div>
  );
};
