import { SuccessMessage } from "../../SuccessMessage/SuccessMessage";
import { ErrorMessage } from "../../ErrorMessage/ErrorMessage";
import { InputField, SelectField } from "../../Fields/Fields";
import { PrimaryButton } from "../../Buttons/Buttons";
import { ResponseType } from "../../../types/Users";
import { useUser } from "../../../hooks/useUser";
import { USER_TYPES } from "../../../constants";
import { BackButton } from "../../BackButton";
import { useState } from "react";
import "./RegisterPage.css";
import { useSignUpUser } from "../../../hooks/useSignUpUser";

export const RegisterPage = () => {
  const { user, handleChangeUser } = useUser();
  const { createNewUser } = useSignUpUser(user);

  const [registerResponse, setRegisterResponse] = useState<ResponseType>();

  const optionsSelect = [
    { value: USER_TYPES.USER_STUDENT, label: "Alumno" },
    { value: USER_TYPES.USER_TEACHER, label: "Maestro" },
  ];

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const response = await createNewUser();
    setRegisterResponse(response);
  };

  const handleErrorMessage = (): JSX.Element | undefined => {
    if (registerResponse) {
      if (registerResponse.success) {
        return (
          <SuccessMessage align="center">
            Se ha enviado un mensaje de confirmación a su correo electrónico
          </SuccessMessage>
        );
      } else {
        return (
          <ErrorMessage align="center">
            Ocurrió un error. Vuelva a intentarlo más tarde
          </ErrorMessage>
        );
      }
    }
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

        {handleErrorMessage()}

        <PrimaryButton type="submit">Registrarse</PrimaryButton>
      </form>
    </div>
  );
};
