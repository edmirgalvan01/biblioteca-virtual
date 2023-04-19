import { PrimaryButton } from "../../Buttons/Buttons";
import { ArrowBack } from "../../icons/ArrowBack";
import { Edit } from "../../icons/Edit";
import "./ProfilePage.css";

export const ProfilePage = () => {
  return (
    <div className="profilePage">
      <ArrowBack />
      <section className="profilePage--section">
        <div className="information">
          <h4>Nombre completo</h4>
          <input type="text" value="Edmir Galvan Vazquez" />
        </div>
        <Edit />
      </section>
      <section className="profilePage--section">
        <div className="information">
          <h4>Correo electrónico</h4>
          <input type="email" value="edmirgalvaz@gmail.com" />
        </div>
        <Edit />
      </section>
      <section className="profilePage--section">
        <div className="information">
          <h4>Contraseña</h4>
          <input type="password" value="123456" />
        </div>
        <Edit />
      </section>
      <PrimaryButton>Subir un nuevo libro</PrimaryButton>
    </div>
  );
};
