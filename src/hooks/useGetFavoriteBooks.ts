import { useEffect, useState } from "react";
import { getBookById, getFavoriteBooks } from "../services/book.service";
import { BookAsFavorite, BookType } from "../types/Books";
import { PostgrestError, UserMetadata } from "@supabase/supabase-js";
import { useLocalStorage } from "./useLocalStorage";

export const useGetFavoriteBooks = () => {
  const [booksId, setBooksId] = useState<Array<BookAsFavorite>>([]);
  const [favoriteBooks, setFavoriteBooks] = useState<Array<BookType>>([]);
  const [error, setError] = useState<PostgrestError | null>();

  //1. Obtener el ID del usuario segun la sesion
  const session = useLocalStorage("userSession") as UserMetadata;
  const userId = session?.user?.id;

  //2. Obtener los libros favoritos segun el ID del usuario
  useEffect(() => {
    if (!userId) return;

    getFavoriteBooks(userId).then(({ data, error }) => {
      if (!error) {
        setBooksId(data as Array<BookAsFavorite>);
      } else {
        setError(error);
      }
    });
  }, [userId]);

  //3. Obtener la informacion completa de esos libros
  useEffect(() => {
    booksId.forEach((book) => {
      getBookById(book.book_id!).then(({ data, error }) => {
        if (!error) setFavoriteBooks([...favoriteBooks, data![0] as BookType]);
      });
    });
  }, [booksId]);

  //4. Retornar un array de libros favoritos y el error
  return { favoriteBooks, error };
};
