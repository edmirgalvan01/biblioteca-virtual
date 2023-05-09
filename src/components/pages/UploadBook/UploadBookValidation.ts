import * as Yup from "yup";

export const UploadBookValidation = Yup.object().shape({
  title: Yup.string()
    .min(5, "El titulo es muy corto.")
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
