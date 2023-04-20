import { useState } from "react";
import { BackButton } from "../../BackButton";
import "./RegisterPage.css";

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
      <form>
        <div className="selectField">
          <label htmlFor="userType">Tipo de usuario</label>
          <select name="userType" id="userType" onChange={handleChangeSelect}>
            <option value="student">Alumno</option>
            <option value="teacher">Maestro</option>
          </select>
        </div>
        <div className="inputField">
          <label htmlFor="name">Nombre(s)</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="inputField">
          <label htmlFor="lastName">Apellidos</label>
          <input type="text" name="lastName" id="lastName" />
        </div>
        <div className="inputField">
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="inputField">
          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password" id="password" />
        </div>
        {userType === "student" ? (
          <div className="inputField">
            <label htmlFor="licenseNumber">Número de matricula</label>
            <input type="number" name="licenseNumber" id="licenseNumber" />
          </div>
        ) : (
          <div className="inputField">
            <label htmlFor="accessCode">Código de acceso</label>
            <input type="password" name="accessCode" id="accessCode" />
          </div>
        )}
      </form>
    </div>
  );
};
