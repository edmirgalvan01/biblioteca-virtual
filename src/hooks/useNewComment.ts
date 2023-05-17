import { useState } from "react";
import { useGetSession } from "./useGetSession";
import { addComment } from "../services/comments.service";
import { useGetUserData } from "./useGetUserData";

export const useNewComment = (bookId: number) => {
  const [newComment, setNewComment] = useState<string>("");
  const { session } = useGetSession();
  const { userData } = useGetUserData();

  const saveComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!newComment) return;

    const name = `${userData?.name} ${userData?.lastName}`;

    const commentToSave = {
      book_id: bookId,
      user_id: session?.data.session?.user.id!,
      user_name: name,
      content: newComment,
    };

    // TODO: Servicio para guardar comentario
    addComment(commentToSave).then((err) => {
      if (!err) setNewComment("");
    });
  };

  return { newComment, setNewComment, saveComment };
};
