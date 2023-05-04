import { PostgrestError, UserMetadata } from "@supabase/supabase-js";
import { useLocalStorage } from "./useLocalStorage";
import { useEffect, useState } from "react";
import { getFavoriteBooks } from "../services/book.service";
import { BookAsFavorite } from "../types/Books";

export const useGetFavoriteData = (): {
  favoriteData: BookAsFavorite[];
  error: PostgrestError | null | undefined;
} => {
  const [favoriteData, setFavoriteData] = useState<Array<BookAsFavorite>>([]);
  const [error, setError] = useState<PostgrestError | null>();

  const session = useLocalStorage("userSession") as UserMetadata;
  const userId = session?.user?.id;

  useEffect(() => {
    if (!userId) return;

    getFavoriteBooks(userId).then(({ data, error }) => {
      if (!error) {
        setFavoriteData(data as Array<BookAsFavorite>);
      } else {
        setError(error);
      }
    });
  }, [userId]);

  return { favoriteData, error };
};
