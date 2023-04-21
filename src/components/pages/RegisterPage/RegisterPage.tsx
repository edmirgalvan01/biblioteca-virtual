import { useState } from "react";
import { BackButton } from "../../BackButton";
import "./RegisterPage.css";
import { PrimaryButton } from "../../Buttons/Buttons";
import { InputField, SelectField } from "../../Fields/Fields";

export const RegisterPage = () => {
  const [userType, setUserType] = useState("student");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [accessCode, setAccessCode] = useState("");

  const optionsSelect = [
    { value: "student", label: "Alumno" },
    { value: "teacher", label: "Maestro" },
  ];

  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUserType(event.target.value);
  };

  return (
    <div className="registerPage">
      <BackButton />
      <h1>Registrarse</h1>
      <form className="registerForm">
        <SelectField
          name="userType"
          label="Tipo de usuario"
          required={true}
          onChange={handleChangeSelect}
          options={optionsSelect}
        />
        <InputField
          name="name"
          label="Nombre(s)"
          required={true}
          onChange={() => {}}
        />
        <InputField
          name="lastName"
          label="Apellidos"
          required={true}
          onChange={() => {}}
        />
        <InputField
          name="email"
          label="Correo electrónico"
          type="email"
          required={true}
          onChange={() => {}}
        />
        <InputField
          name="password"
          label="Contraseña"
          type="password"
          required={true}
          onChange={() => {}}
        />
        {userType === "student" ? (
          <InputField
            name="licenseNumber"
            label="Número de matricula"
            required={true}
            onChange={() => {}}
          />
        ) : (
          <InputField
            name="accessCode"
            type="password"
            label="Código de acceso"
            required={true}
            onChange={() => {}}
          />
        )}
        <PrimaryButton>Registrarse</PrimaryButton>
      </form>
    </div>
  );
};
