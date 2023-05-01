import { SyntheticEvent, useState } from "react";
import { useInsertBook } from "./useInsertBook";
import { BookType } from "../types/Books";

export const useBook = () => {
  const { insert } = useInsertBook();
  const [book, setBook] = useState<BookType>({
    img: "",
    title: "",
    author: "",
    area: "common",
    description: "",
    link: "",
  });

  const handleChange = (property: string, value: string) => {
    setBook({ ...book, [property]: value });
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const { error } = insert(book);
  };

  return { book, handleChange, handleSubmit };
};
