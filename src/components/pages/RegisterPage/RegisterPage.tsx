import { useState } from "react";
import { BackButton } from "../../BackButton";
import "./RegisterPage.css";
import { PrimaryButton } from "../../Buttons/Buttons";

export const RegisterPage = () => {
  const [userType, setUserType] = useState("student");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [accessCode, setAccessCode] = useState("");

  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUserType(event.target.value);
  };

  return (
    <div className="registerPage">
      <BackButton />
      <h1>Registrarse</h1>
      <form className="registerForm">
        <div className="field selectField">
          <label htmlFor="userType">Tipo de usuario</label>
          <select
            required
            name="userType"
            id="userType"
            onChange={handleChangeSelect}
          >
            <option value="student">Alumno</option>
            <option value="teacher">Maestro</option>
          </select>
        </div>
        <div className="field inputField">
          <label htmlFor="name">Nombre(s)</label>
          <input required type="text" name="name" id="name" />
        </div>
        <div className="field inputField">
          <label htmlFor="lastName">Apellidos</label>
          <input required type="text" name="lastName" id="lastName" />
        </div>
        <div className="field inputField">
          <label htmlFor="email">Correo electrónico</label>
          <input required type="email" name="email" id="email" />
        </div>
        <div className="field inputField">
          <label htmlFor="password">Contraseña</label>
          <input required type="password" name="password" id="password" />
        </div>
        {userType === "student" ? (
          <div className="field inputField">
            <label htmlFor="licenseNumber">Número de matricula</label>
            <input
              required
              type="number"
              name="licenseNumber"
              id="licenseNumber"
            />
          </div>
        ) : (
          <div className="field inputField">
            <label htmlFor="accessCode">Código de acceso</label>
            <input required type="password" name="accessCode" id="accessCode" />
          </div>
        )}
        <PrimaryButton>Registrarse</PrimaryButton>
      </form>
    </div>
  );
};
