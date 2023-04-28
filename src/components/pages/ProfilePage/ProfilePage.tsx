import { PrimaryButton, SecondaryButton } from "../../Buttons/Buttons";
import { useGetUserData } from "../../../hooks/useGetUserData";
import { useSignOut } from "../../../hooks/useSignOut";
import { DataItem } from "../../DataItem/DataItem";
import { useUser } from "../../../hooks/useUser";
import { USER_TYPES } from "../../../constants";
import { BackButton } from "../../BackButton";
import "./ProfilePage.css";

export const ProfilePage = () => {
  const { userData, error } = useGetUserData();
  const { getUserType } = useUser();
  const { signOut } = useSignOut();

  const fullName = `${userData?.userData?.name} ${userData?.userData?.lastName}`;
  const userType =
    userData?.userData?.userType === USER_TYPES.USER_TEACHER
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
          value={userData?.userData?.accessCode}
        />
      ) : (
        <DataItem
          handleChange={() => {}}
          title="Número de matricula"
          type="text"
          value={userData?.userData?.licenseNumber}
        />
      )}

      {getUserType() === USER_TYPES.USER_TEACHER && (
        <PrimaryButton>Subir un nuevo libro</PrimaryButton>
      )}

      <SecondaryButton onClick={signOut}>Cerrar sesión</SecondaryButton>
    </div>
  );
};
