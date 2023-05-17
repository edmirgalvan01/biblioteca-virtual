import { PostgrestError } from "@supabase/postgrest-js";
import { ArrayResponseType } from "../types/Users";
import { supabase } from "../supabase/client";

import type { CommentType, LikeType } from "../types/Comments";

export const addComment = async (
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
    .eq("book_id", bookId);

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

export const deleteComment = async (
  commentId: number
): Promise<PostgrestError | null> => {
  const { error } = await supabase
    .from("book_comments")
    .delete()
    .eq("id", commentId);

  return error;
};

export const likeComment = async (
  like: LikeType
): Promise<PostgrestError | null> => {
  const { error } = await supabase.from("comment_likes").insert(like);

  return error;
};
