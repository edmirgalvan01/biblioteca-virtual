import { markBookAsFavorite } from "../services/book.service";
import { BookAsFavorite } from "../types/Books";
import { ResponseType } from "../types/Users";
import { useGetFavoriteData } from "./useGetFavoriteData";

export const useMarkBookAsFavorite = () => {
  const { favoriteData } = useGetFavoriteData();

  const markAsFavorite = async (
    data: BookAsFavorite
  ): Promise<ResponseType> => {
    const isMarkedFavorite = favoriteData.some(
      (book) => book.book_id === data.book_id
    );

    //Si el libro no existe en favoritos
    if (!isMarkedFavorite) {
      const error = await markBookAsFavorite(data);

      if (error) {
        return {
          success: false,
          errors: {
            errorMarkAsFavorite: error,
          },
        };
      } else {
        return { success: true };
      }
    } else {
      return { success: true };
    }
  };

  return { markAsFavorite };
};
