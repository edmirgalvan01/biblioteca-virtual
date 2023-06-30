import { ErrorMessage } from "../../ErrorMessage/ErrorMessage";
import { InputField, SelectField } from "../../Fields/Fields";
import { PrimaryButton } from "../../Buttons/Buttons";
import { BackButton } from "../../BackButton";

import { areaTypes } from "../../../constants";

import { useBook } from "../../../hooks/useBook";

import "./UploadBook.css";

export const UploadBook = () => {
  const { book, handleChange, handleSubmit, error } = useBook();

  return (
    <section className="uploadBook containerPage">
      <BackButton />
      <h1>Nuevo libro</h1>
      <form className="uploadBook--form" onSubmit={handleSubmit}>
        <InputField
          label="Titulo"
          name="title"
          required={true}
          value={book.title}
          onChange={(e) => handleChange("title", e.target.value)}
        />
        <InputField
          label="Autor"
          name="author"
          required={true}
          value={book.author}
          onChange={(e) => handleChange("author", e.target.value)}
        />
        <InputField
          label="Imagen de portada"
          name="img"
          required={false}
          value={book.img}
          onChange={(e) => handleChange("img", e.target.value)}
        />
        <InputField
          label="Enlace del libro"
          name="link"
          required={false}
          value={book.link}
          onChange={(e) => handleChange("link", e.target.value)}
        />
        <SelectField
          label="Area"
          name="area"
          options={areaTypes}
          required={true}
          onChange={(e) => handleChange("area", e.target.value)}
          value={book.area}
        />
        <InputField
          label="Descripcion"
          name="description"
          required={true}
          value={book.description}
          onChange={(e) => handleChange("description", e.target.value)}
          type="textarea"
        />
        {error && (
          <ErrorMessage>
            Algo salió mal. Inténtelo de nuevo más tarde
          </ErrorMessage>
        )}
        <PrimaryButton type="submit">Subir</PrimaryButton>
      </form>
    </section>
  );
};
