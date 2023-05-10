import { PostgrestError } from "@supabase/postgrest-js";
import { supabase } from "../supabase/client";
import { CommentType } from "../types/Comments";

export const addComent = async (
  comment: CommentType
): Promise<PostgrestError | null> => {
  const { error } = await supabase.from("book_comments").insert(comment);

  return error;
};

export const readBookComments = (bookId: number) => {};

export const editComment = (commentId: number) => {};

export const deleteComment = (commentId: number) => {};

export const likeComment = (commentId: number, userId: string) => {};

export const unlikeComment = (commentId: number, userId: string) => {};
