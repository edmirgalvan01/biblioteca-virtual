import { PrimaryButton, SecondaryButton } from "../../Buttons/Buttons";
import { useGetUserData } from "../../../hooks/useGetUserData";
import { useGetUserType } from "../../../hooks/useGetUserType";
import { useSignOut } from "../../../hooks/useSignOut";
import { DataItem } from "../../DataItem/DataItem";
import { USER_TYPES } from "../../../constants";
import { BackButton } from "../../BackButton";
import "./ProfilePage.css";

export const ProfilePage = () => {
  const { userData, error } = useGetUserData();
  const userType = useGetUserType();
  const { signOut } = useSignOut();

  const fullName = `${userData?.name} ${userData?.lastName}`;

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

      {userType === USER_TYPES.USER_TEACHER ? (
        <DataItem
          handleChange={() => {}}
          title="Código de acceso"
          type="password"
          value={userData?.accessCode}
        />
      ) : (
        <DataItem
          handleChange={() => {}}
          title="Número de matricula"
          type="text"
          value={userData?.licenseNumber}
        />
      )}

      {userType === USER_TYPES.USER_TEACHER && (
        <PrimaryButton>Subir un nuevo libro</PrimaryButton>
      )}

      <SecondaryButton onClick={signOut}>Cerrar sesión</SecondaryButton>
    </div>
  );
};
