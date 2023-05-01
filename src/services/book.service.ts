import { PostgrestError } from "@supabase/supabase-js";
import { BookType } from "../types/Books";
import { supabase } from "../supabase/client";

export const insertBook = async (
  book: BookType
): Promise<{
  error: PostgrestError | null;
}> => {
  const { error } = await supabase.from("books").insert(book);

  return { error };
};
