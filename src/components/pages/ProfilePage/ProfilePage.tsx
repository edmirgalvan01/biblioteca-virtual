import { PrimaryButton } from "../../Buttons/Buttons";
import { DataItem } from "../../DataItem/DataItem";
import { ArrowBack } from "../../icons/ArrowBack";
import "./ProfilePage.css";

export const ProfilePage = () => {
  return (
    <div className="profilePage">
      <ArrowBack />
      <DataItem title="Nombre completo" type="text" value="Edmir Galvan" />
      <DataItem
        title="Correo electrónico"
        type="text"
        value="edmirgalvaz@gmail.com"
      />
      <DataItem title="Contraseña" type="password" value="123456" />
      <PrimaryButton>Subir un nuevo libro</PrimaryButton>
    </div>
  );
};
