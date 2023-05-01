import { InputField, SelectField } from "../../Fields/Fields";
import { PrimaryButton } from "../../Buttons/Buttons";
import { areaTypes } from "../../../constants";
import { BackButton } from "../../BackButton";
import "./UploadBook.css";

export const UploadBook = () => {
  return (
    <section className="uploadBook">
      <BackButton />
      <h1>Nuevo libro</h1>
      <form className="uploadBook--form">
        <InputField
          label="Titulo"
          name="title"
          required={true}
          value=""
          onChange={() => {}}
        />
        <InputField
          label="Autor"
          name="author"
          required={true}
          value=""
          onChange={() => {}}
        />
        <InputField
          label="Imagen de portada"
          name="coverImage"
          required={false}
          value=""
          onChange={() => {}}
        />
        <SelectField
          label="Area"
          name="area"
          options={areaTypes}
          required={true}
          onChange={() => {}}
          value=""
        />
        <InputField
          label="Descripcion"
          name="description"
          required={true}
          value=""
          onChange={() => {}}
          type="textarea"
        />
        <PrimaryButton>Subir</PrimaryButton>
      </form>
    </section>
  );
};
