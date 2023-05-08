import { ErrorMessage } from "../../ErrorMessage/ErrorMessage";
import { InputField, SelectField } from "../../Fields/Fields";
import { PrimaryButton } from "../../Buttons/Buttons";
import { BackButton } from "../../BackButton";
import * as Yup from "yup";

import { BookType } from "../../../types/Books";

import { areaTypes, BOOK_PROPERTIES } from "../../../constants";

import { useBook } from "../../../hooks/useBook";
import { useFormik } from "formik";

import "./UploadBook.css";

export const UploadBook = () => {
  const { handleSubmit, error } = useBook();

  const initialValues: BookType = {
    img: "",
    title: "",
    author: "",
    area: "common",
    description: "",
    link: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => handleSubmit(values),
    validationSchema: uploadBookSchema,
  });

  return (
    <section className="uploadBook">
      <BackButton />
      <h1>Nuevo libro</h1>
      <form className="uploadBook--form" onSubmit={formik.handleSubmit}>
        <InputField
          label="Titulo"
          name={BOOK_PROPERTIES.TITLE}
          required={true}
          value={formik.values.title}
          onChange={formik.handleChange}
        />
        <InputField
          label="Autor"
          name={BOOK_PROPERTIES.AUTHOR}
          required={true}
          value={formik.values.author}
          onChange={formik.handleChange}
        />
        <InputField
          label="Imagen de portada"
          name={BOOK_PROPERTIES.IMG}
          required={false}
          value={formik.values.img}
          onChange={formik.handleChange}
        />
        <InputField
          label="Enlace del libro"
          name={BOOK_PROPERTIES.LINK}
          required={false}
          value={formik.values.link}
          onChange={formik.handleChange}
        />
        <SelectField
          label="Area"
          name={BOOK_PROPERTIES.AREA}
          options={areaTypes}
          required={true}
          onChange={formik.handleChange}
          value={formik.values.area}
        />
        <InputField
          label="Descripcion"
          name={BOOK_PROPERTIES.DESCRIPTION}
          required={true}
          value={formik.values.description}
          onChange={formik.handleChange}
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

const uploadBookSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "El titulo es muy corto.")
    .required("El campo es requerido."),
  author: Yup.string()
    .min(2, "El nombre es muy corto.")
    .required("El campo es requerido."),
  img: Yup.string().min(8, "La imagen no es válida."),
  link: Yup.string()
    .min(8, "La URL no es válida.")
    .required("El campo es requerido."),
  area: Yup.string().required("El campo es requerido."),
  description: Yup.string().required("El campo es requerido."),
});
