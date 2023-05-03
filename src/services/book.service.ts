import { BookAsFavorite, BookType } from "../types/Books";
import { PostgrestError } from "@supabase/supabase-js";
import { ArrayResponseType } from "../types/Users";
import { supabase } from "../supabase/client";

export const insertBook = async (
  book: BookType
): Promise<{
  error: PostgrestError | null;
}> => {
  const { error } = await supabase.from("books").insert(book);

  return { error };
};

export const getBooks = async (): Promise<ArrayResponseType> => {
  const { data, error } = await supabase.from("books").select();

  return { data, error };
};

export const markBookAsFavorite = async (
  data: BookAsFavorite
): Promise<PostgrestError | null> => {
  const { error } = await supabase.from("favoriteBooks").insert(data);

  return error;
};

export const getFavoriteBooks = async (
  userId: string
): Promise<ArrayResponseType> => {
  const { data, error } = await supabase
    .from("favoriteBooks")
    .select()
    .eq("user_id", userId);

  return { data, error };
};
