import { PrimaryButton, SecondaryButton } from "../../Buttons/Buttons";
import { UserDataResponse } from "../../../types/Users";
import { useSignOut } from "../../../hooks/useSignOut";
import { DataItem } from "../../DataItem/DataItem";
import { useUser } from "../../../hooks/useUser";
import { USER_TYPES } from "../../../constants";
import { BackButton } from "../../BackButton";
import { useEffect, useState } from "react";
import "./ProfilePage.css";

export const ProfilePage = () => {
  const { getUserType, getUserData } = useUser();
  const { signOut } = useSignOut();

  const [data, setData] = useState<UserDataResponse>();

  useEffect(() => {
    getUserData().then((res) => setData(res));
  }, []);

  const fullName = `${data?.userData?.name} ${data?.userData?.lastName}`;
  const userType =
    data?.userData?.userType === USER_TYPES.USER_TEACHER
      ? "Maestro"
      : "Estudiante";

  return (
    <div className="profilePage">
      <BackButton />
      <DataItem
        handleChange={() => {}}
        title="Nombre completo"
        type="text"
        value={fullName}
      />
      <DataItem
        handleChange={() => {}}
        title="Tipo de usuario"
        type="text"
        value={userType}
      />

      {getUserType() === USER_TYPES.USER_TEACHER ? (
        <DataItem
          handleChange={() => {}}
          title="Código de acceso"
          type="password"
          value={data?.userData?.accessCode}
        />
      ) : (
        <DataItem
          handleChange={() => {}}
          title="Número de matricula"
          type="text"
          value={data?.userData?.licenseNumber}
        />
      )}

      {getUserType() === USER_TYPES.USER_TEACHER && (
        <PrimaryButton>Subir un nuevo libro</PrimaryButton>
      )}

      <SecondaryButton onClick={signOut}>Cerrar sesión</SecondaryButton>
    </div>
  );
};
