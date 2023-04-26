import { PrimaryButton, SecondaryButton } from "../../Buttons/Buttons";
import { DataItem } from "../../DataItem/DataItem";
import { useUser } from "../../../hooks/useUser";
import { USER_TYPES } from "../../../constants";
import { BackButton } from "../../BackButton";
import "./ProfilePage.css";

export const ProfilePage = () => {
  const { getUserType, signOut } = useUser();

  return (
    <div className="profilePage">
      <BackButton />
      <DataItem
        handleChange={() => {}}
        title="Nombre completo"
        type="text"
        value="Edmir Galvan"
      />
      <DataItem
        handleChange={() => {}}
        title="Correo electrónico"
        type="text"
        value="edmirgalvaz@gmail.com"
      />
      <DataItem
        handleChange={() => {}}
        title="Contraseña"
        type="password"
        value="123456"
      />

      {getUserType() === USER_TYPES.USER_TEACHER && (
        <PrimaryButton>Subir un nuevo libro</PrimaryButton>
      )}
      <SecondaryButton onClick={signOut}>Cerrar sesión</SecondaryButton>
    </div>
  );
};
