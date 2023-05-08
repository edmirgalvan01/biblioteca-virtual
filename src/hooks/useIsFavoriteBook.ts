import { useEffect, useState } from "react";
import { useGetFavoriteData } from "./useGetFavoriteData";
import { useGetSession } from "./useGetSession";
import { useMarkBookAsFavorite } from "./useMarkBookAsFavorite";
import { useUnmarkAsFavorite } from "./useUnmarkAsFavorite";

export const useIsFavoriteBook = (bookId: number) => {
  const { favoriteData } = useGetFavoriteData();
  const { session } = useGetSession();
  const { markAsFavorite } = useMarkBookAsFavorite();
  const { unmarkAsFavorite } = useUnmarkAsFavorite();

  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    //Si alguno coincide con el bookId significa que si fue marcado como favorito
    const response = favoriteData.some((book) => book.book_id === bookId);

    setIsFavorite(response);
  }, [favoriteData]);

  const toggleFavorite = () => {
    if (!isFavorite) {
      const data = {
        user_id: session?.data.session?.user.id,
        book_id: bookId,
      };

      setIsFavorite(true);
      markAsFavorite(data);
    } else {
      setIsFavorite(false);
      unmarkAsFavorite(bookId);
    }
  };

  return { isFavorite, toggleFavorite };
};
