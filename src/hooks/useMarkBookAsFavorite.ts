import { markBookAsFavorite } from "../services/book.service";
import { BookAsFavorite } from "../types/Books";
import { ResponseType } from "../types/Users";

export const useMarkBookAsFavorite = () => {
  const markAsFavorite = async (
    data: BookAsFavorite
  ): Promise<ResponseType> => {
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
  };

  return { markAsFavorite };
};
