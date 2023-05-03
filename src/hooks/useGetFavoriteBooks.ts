import { useEffect, useState } from "react";
import { useGetSession } from "./useGetSession";
import { getFavoriteBooks } from "../services/book.service";
import { BookType } from "../types/Books";
import { PostgrestError } from "@supabase/supabase-js";

export const useGetFavoriteBooks = () => {
  const [favoriteBooks, setFavoriteBooks] = useState<Array<BookType>>([]);
  const [error, setError] = useState<PostgrestError | null>();

  //1. Obtener el ID del usuario segun la sesion
  const { session } = useGetSession();
  const userId = session?.data.session?.user.id;

  //2. Obtener los libros favoritos segun el ID del usuario
  useEffect(() => {
    getFavoriteBooks(userId).then(({ data, error }) => {
      if (!error) {
        setFavoriteBooks(data as Array<BookType>);
      } else {
        setError(error);
      }
    });
  }, []);

  //3. Retornar un array de libros favoritos y el error
  return { favoriteBooks, error };
};
