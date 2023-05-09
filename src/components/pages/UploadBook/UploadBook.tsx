import { ErrorMessage } from "../../ErrorMessage/ErrorMessage";
import { InputField, SelectField } from "../../Fields/Fields";
import { PrimaryButton } from "../../Buttons/Buttons";
import { BackButton } from "../../BackButton";

import { areaTypes, BOOK_PROPERTIES } from "../../../constants";
import { UploadBookValidation } from "./UploadBookValidation";

import { useBook } from "../../../hooks/useBook";
import { useFormik } from "formik";

import "./UploadBook.css";

export const UploadBook = () => {
  const { handleSubmit, error, book } = useBook();

  const formik = useFormik({
    initialValues: book,
    onSubmit: (values) => handleSubmit(values),
    validationSchema: UploadBookValidation,
  });

  return (
    <section className="uploadBook">
      <BackButton />
      <h1>Nuevo libro</h1>
      <form className="uploadBook--form" onSubmit={formik.handleSubmit}>
        <InputField
          label="Titulo"
          name={BOOK_PROPERTIES.TITLE}
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessage={formik.errors.title}
          error={formik.errors.title && formik.touched.title}
        />
        <InputField
          label="Autor"
          name={BOOK_PROPERTIES.AUTHOR}
          value={formik.values.author}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessage={formik.errors.author}
          error={formik.errors.author && formik.touched.author}
        />
        <InputField
          label="Imagen de portada"
          name={BOOK_PROPERTIES.IMG}
          value={formik.values.img}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessage={formik.errors.img}
          error={formik.errors.img && formik.touched.img}
        />
        <InputField
          label="Enlace del libro"
          name={BOOK_PROPERTIES.LINK}
          value={formik.values.link}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessage={formik.errors.link}
          error={formik.errors.link && formik.touched.link}
        />
        <SelectField
          label="Area"
          name={BOOK_PROPERTIES.AREA}
          options={areaTypes}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessage={formik.errors.area}
          value={formik.values.area}
          error={formik.errors.area && formik.touched.area}
        />
        <InputField
          label="Descripcion"
          name={BOOK_PROPERTIES.DESCRIPTION}
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessage={formik.errors.description}
          type="textarea"
          error={formik.errors.description && formik.touched.description}
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
