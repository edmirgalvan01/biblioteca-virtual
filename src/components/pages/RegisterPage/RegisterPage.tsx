import { SuccessMessage } from "../../SuccessMessage/SuccessMessage";
import { ErrorMessage } from "../../ErrorMessage/ErrorMessage";
import { InputField, SelectField } from "../../Fields/Fields";
import { useSignUpUser } from "../../../hooks/useSignUpUser";
import { PrimaryButton } from "../../Buttons/Buttons";
import { ResponseType, UserType } from "../../../types/Users";
import { useUser } from "../../../hooks/useUser";
import { USER_PROPERTIES, USER_TYPES } from "../../../constants";
import { BackButton } from "../../BackButton";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import "./RegisterPage.css";

export const RegisterPage = () => {
  const { user, handleChangeUser } = useUser();
  const isStudent = user.userType === "student";

  const { createNewUser } = useSignUpUser(user);

  const [registerResponse, setRegisterResponse] = useState<ResponseType>();

  const optionsSelect = [
    { value: USER_TYPES.USER_STUDENT, label: "Alumno" },
    { value: USER_TYPES.USER_TEACHER, label: "Maestro" },
  ];

  const handleSubmit = async (values: UserType) => {
    const response = await createNewUser();
    setRegisterResponse(response);
  };

  const formik = useFormik({
    initialValues: user,
    onSubmit: (values) => handleSubmit(values),
    validationSchema: RegisterValidation,
  });

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
      <form onSubmit={formik.handleSubmit} className="registerForm">
        <SelectField
          label="Tipo de usuario"
          name={USER_PROPERTIES.USER_TYPE}
          value={formik.values.userType}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          options={optionsSelect}
        />
        <InputField
          name={USER_PROPERTIES.NAME}
          label="Nombre(s)"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          errorMessage={formik.errors.name}
          error={formik.errors.name && formik.touched.name}
        />
        <InputField
          name={USER_PROPERTIES.LASTNAME}
          label="Apellidos"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
          errorMessage={formik.errors.lastName}
          error={formik.errors.lastName && formik.touched.lastName}
        />
        <InputField
          name={USER_PROPERTIES.EMAIL}
          label="Correo electrónico"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          errorMessage={formik.errors.email}
          error={formik.errors.email && formik.touched.email}
        />
        <InputField
          name={USER_PROPERTIES.PASSWORD}
          label="Contraseña"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          errorMessage={formik.errors.password}
          error={formik.errors.password && formik.touched.password}
        />
        {isStudent ? (
          <InputField
            name={USER_PROPERTIES.LICENSE_NUMBER}
            label="Número de matricula"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.licenseNumber}
            errorMessage={formik.errors.licenseNumber}
            error={formik.errors.licenseNumber && formik.touched.licenseNumber}
          />
        ) : (
          <InputField
            name={USER_PROPERTIES.ACCESS_CODE}
            type="password"
            label="Código de acceso"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.accessCode}
            errorMessage={formik.errors.accessCode}
            error={formik.errors.accessCode && formik.touched.accessCode}
          />
        )}

        {handleErrorMessage()}

        <PrimaryButton type="submit">Registrarse</PrimaryButton>
      </form>
    </div>
  );
};

export const RegisterValidation = Yup.object().shape({
  name: Yup.string()
    .min(2, "El nombre es muy corto.")
    .required("El campo es requerido."),
  lastName: Yup.string()
    .min(5, "El apellido es muy corto.")
    .required("El campo es requerido."),
  email: Yup.string().email().required("El campo es requerido."),
  password: Yup.string()
    .min(6, "La contraseña es muy corta.")
    .required("El campo es requerido."),
  licenseNumber: Yup.string().when("isStudent", {
    is: true,
    then: Yup.string().required("El campo es requerido."),
    otherwise: Yup.string(),
  }),
});
