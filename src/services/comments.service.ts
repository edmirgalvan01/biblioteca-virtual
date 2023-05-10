import { PostgrestError } from "@supabase/postgrest-js";
import { ArrayResponseType } from "../types/Users";
import { supabase } from "../supabase/client";

import type { CommentType } from "../types/Comments";

export const addComent = async (
  comment: CommentType
): Promise<PostgrestError | null> => {
  const { error } = await supabase.from("book_comments").insert(comment);

  return error;
};

export const readBookComments = async (
  bookId: number
): Promise<ArrayResponseType> => {
  const { data, error } = await supabase
    .from("book_comments")
    .select()
    .eq("id", bookId);

  return { data, error };
};

export const editComment = async (
  commentId: number,
  newComment: CommentType
): Promise<PostgrestError | null> => {
  const { error } = await supabase
    .from("book_comments")
    .update(newComment)
    .eq("id", commentId);

  return error;
};

export const deleteComment = (commentId: number) => {};

export const likeComment = (commentId: number, userId: string) => {};

export const unlikeComment = (commentId: number, userId: string) => {};
