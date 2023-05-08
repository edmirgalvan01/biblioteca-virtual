import { ErrorMessage } from "../../ErrorMessage/ErrorMessage";
import { InputField, SelectField } from "../../Fields/Fields";
import { PrimaryButton } from "../../Buttons/Buttons";
import { BackButton } from "../../BackButton";

import { areaTypes, BOOK_PROPERTIES } from "../../../constants";

import { useBook } from "../../../hooks/useBook";

import "./UploadBook.css";

export const UploadBook = () => {
  const { book, handleChange, handleSubmit, error } = useBook();

  return (
    <section className="uploadBook">
      <BackButton />
      <h1>Nuevo libro</h1>
      <form className="uploadBook--form" onSubmit={handleSubmit}>
        <InputField
          label="Titulo"
          name={BOOK_PROPERTIES.TITLE}
          required={true}
          value={book.title}
          onChange={(e) => handleChange(BOOK_PROPERTIES.TITLE, e.target.value)}
        />
        <InputField
          label="Autor"
          name={BOOK_PROPERTIES.AUTHOR}
          required={true}
          value={book.author}
          onChange={(e) => handleChange(BOOK_PROPERTIES.AUTHOR, e.target.value)}
        />
        <InputField
          label="Imagen de portada"
          name={BOOK_PROPERTIES.IMG}
          required={false}
          value={book.img}
          onChange={(e) => handleChange(BOOK_PROPERTIES.IMG, e.target.value)}
        />
        <InputField
          label="Enlace del libro"
          name={BOOK_PROPERTIES.LINK}
          required={false}
          value={book.link}
          onChange={(e) => handleChange(BOOK_PROPERTIES.LINK, e.target.value)}
        />
        <SelectField
          label="Area"
          name={BOOK_PROPERTIES.AREA}
          options={areaTypes}
          required={true}
          onChange={(e) => handleChange(BOOK_PROPERTIES.AREA, e.target.value)}
          value={book.area}
        />
        <InputField
          label="Descripcion"
          name={BOOK_PROPERTIES.DESCRIPTION}
          required={true}
          value={book.description}
          onChange={(e) =>
            handleChange(BOOK_PROPERTIES.DESCRIPTION, e.target.value)
          }
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
