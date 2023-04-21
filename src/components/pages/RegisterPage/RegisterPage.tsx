import { useState } from "react";
import { BackButton } from "../../BackButton";
import "./RegisterPage.css";
import { PrimaryButton } from "../../Buttons/Buttons";
import { InputField, SelectField } from "../../Fields/Fields";

export const RegisterPage = () => {
  const [userType, setUserType] = useState<string>("student");
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [licenseNumber, setLicenseNumber] = useState<string>("");
  const [accessCode, setAccessCode] = useState<string>("");

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
          value={userType}
        />
        <InputField
          name="name"
          label="Nombre(s)"
          required={true}
          onChange={() => {}}
          value={name}
        />
        <InputField
          name="lastName"
          label="Apellidos"
          required={true}
          onChange={() => {}}
          value={lastName}
        />
        <InputField
          name="email"
          label="Correo electrónico"
          type="email"
          required={true}
          onChange={() => {}}
          value={email}
        />
        <InputField
          name="password"
          label="Contraseña"
          type="password"
          required={true}
          onChange={() => {}}
          value={password}
        />
        {userType === "student" ? (
          <InputField
            name="licenseNumber"
            label="Número de matricula"
            required={true}
            onChange={() => {}}
            value={licenseNumber}
          />
        ) : (
          <InputField
            name="accessCode"
            type="password"
            label="Código de acceso"
            required={true}
            onChange={() => {}}
            value={accessCode}
          />
        )}
        <PrimaryButton>Registrarse</PrimaryButton>
      </form>
    </div>
  );
};
