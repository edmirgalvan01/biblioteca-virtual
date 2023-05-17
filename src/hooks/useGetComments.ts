import { useState, useEffect } from "react";
import { CommentType } from "../types/Comments";
import { readBookComments } from "../services/comments.service";
import { PostgrestError } from "@supabase/supabase-js";

export const useGetComments = (bookId: number) => {
  const [comments, setComments] = useState<Array<CommentType>>([]);
  const [error, setError] = useState<PostgrestError | null>();

  useEffect(() => {
    readBookComments(bookId).then(({ data, error }) => {
      setComments(data as Array<CommentType>);
      setError(error);
    });
  }, []);

  return { comments, error };
};
