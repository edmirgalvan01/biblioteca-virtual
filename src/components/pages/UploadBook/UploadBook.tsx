import { SyntheticEvent, useState } from "react";

import { InputField, SelectField } from "../../Fields/Fields";
import { PrimaryButton } from "../../Buttons/Buttons";
import { BackButton } from "../../BackButton";

import { PostgrestError } from "@supabase/supabase-js";
import { supabase } from "../../../supabase/client";
import { areaTypes } from "../../../constants";
import { BookType } from "../../../types/Books";

import "./UploadBook.css";

const insertBook = async (
  book: BookType
): Promise<{
  error: PostgrestError | null;
}> => {
  const { error } = await supabase.from("books").insert(book);

  return { error };
};

const useUploadBook = () => {
  const [error, setError] = useState<PostgrestError | null>(null);

  const upload = (
    book: BookType
  ): {
    error: PostgrestError | null;
  } => {
    insertBook(book).then(({ error }) => setError(error));
    return { error };
  };

  return { upload };
};

export const UploadBook = () => {
  const { upload } = useUploadBook();
  const [book, setBook] = useState<BookType>({
    img: "",
    title: "",
    author: "",
    area: "common",
    description: "",
    link: "",
  });

  const handleChangeBook = (property: string, value: string) => {
    setBook({ ...book, [property]: value });
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const { error } = upload(book);
  };

  return (
    <section className="uploadBook">
      <BackButton />
      <h1>Nuevo libro</h1>
      <form className="uploadBook--form" onSubmit={handleSubmit}>
        <InputField
          label="Titulo"
          name="title"
          required={true}
          value={book.title}
          onChange={(e) => handleChangeBook("title", e.target.value)}
        />
        <InputField
          label="Autor"
          name="author"
          required={true}
          value={book.author}
          onChange={(e) => handleChangeBook("author", e.target.value)}
        />
        <InputField
          label="Imagen de portada"
          name="img"
          required={false}
          value={book.img}
          onChange={(e) => handleChangeBook("img", e.target.value)}
        />
        <InputField
          label="Enlace del libro"
          name="link"
          required={false}
          value={book.link}
          onChange={(e) => handleChangeBook("link", e.target.value)}
        />
        <SelectField
          label="Area"
          name="area"
          options={areaTypes}
          required={true}
          onChange={(e) => handleChangeBook("area", e.target.value)}
          value={book.area}
        />
        <InputField
          label="Descripcion"
          name="description"
          required={true}
          value={book.description}
          onChange={(e) => handleChangeBook("description", e.target.value)}
          type="textarea"
        />
        <PrimaryButton type="submit">Subir</PrimaryButton>
      </form>
    </section>
  );
};
