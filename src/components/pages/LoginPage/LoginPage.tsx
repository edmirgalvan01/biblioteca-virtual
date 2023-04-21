import { PrimaryButton } from "../../Buttons/Buttons";
import { AuthError } from "@supabase/supabase-js";
import { InputField } from "../../Fields/Fields";
import { useUser } from "../../../hooks/useUser";
import { BackButton } from "../../BackButton";
import { useState } from "react";
import "./LoginPage.css";

export const LoginPage = () => {
  const { signInUser } = useUser();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<AuthError>();

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    signInUser(email, password).then(({ data, error }) => {
      if (error) setError(error);
    });
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
        {error && <p className="errorMessage">Credenciales inválidas</p>}
        <PrimaryButton type="submit">Iniciar sesión</PrimaryButton>
      </form>
    </div>
  );
};
