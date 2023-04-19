import { PrimaryButton } from "../../Buttons/Buttons";
import { DataItem } from "../../DataItem/DataItem";
import { ArrowBackIcon } from "../../icons/ArrowBackIcon";
import "./ProfilePage.css";

export const ProfilePage = () => {
  return (
    <div className="profilePage">
      <ArrowBackIcon />
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
      <PrimaryButton>Subir un nuevo libro</PrimaryButton>
    </div>
  );
};
