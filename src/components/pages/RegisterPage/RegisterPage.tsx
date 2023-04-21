import { InputField, SelectField } from "../../Fields/Fields";
import { useRegister } from "../../../hooks/useRegister";
import { PrimaryButton } from "../../Buttons/Buttons";
import { BackButton } from "../../BackButton";
import "./RegisterPage.css";

export const RegisterPage = () => {
  const { user, handleChangeUser, resetUser, createNewUser } = useRegister();

  const optionsSelect = [
    { value: "student", label: "Alumno" },
    { value: "teacher", label: "Maestro" },
  ];

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    createNewUser();
  };

  return (
    <div className="registerPage">
      <BackButton />
      <h1>Registrarse</h1>
      <form onSubmit={handleSubmit} className="registerForm">
        <SelectField
          name="userType"
          label="Tipo de usuario"
          required={true}
          onChange={(e) => {
            handleChangeUser(e.target.value, "userType");
          }}
          options={optionsSelect}
          value={user.userType}
        />
        <InputField
          name="name"
          label="Nombre(s)"
          required={true}
          onChange={(e) => {
            handleChangeUser(e.target.value, "name");
          }}
          value={user.name}
        />
        <InputField
          name="lastName"
          label="Apellidos"
          required={true}
          onChange={(e) => {
            handleChangeUser(e.target.value, "lastName");
          }}
          value={user.lastName}
        />
        <InputField
          name="email"
          label="Correo electrónico"
          type="email"
          required={true}
          onChange={(e) => {
            handleChangeUser(e.target.value, "email");
          }}
          value={user.email}
        />
        <InputField
          name="password"
          label="Contraseña"
          type="password"
          required={true}
          onChange={(e) => {
            handleChangeUser(e.target.value, "password");
          }}
          value={user.password}
        />
        {user.userType === "student" ? (
          <InputField
            name="licenseNumber"
            label="Número de matricula"
            required={true}
            onChange={(e) => {
              handleChangeUser(e.target.value, "licenseNumber");
            }}
            value={user.licenseNumber}
          />
        ) : (
          <InputField
            name="accessCode"
            type="password"
            label="Código de acceso"
            required={true}
            onChange={(e) => {
              handleChangeUser(e.target.value, "accessCode");
            }}
            value={user.accessCode}
          />
        )}
        <PrimaryButton type="submit">Registrarse</PrimaryButton>
      </form>
    </div>
  );
};
