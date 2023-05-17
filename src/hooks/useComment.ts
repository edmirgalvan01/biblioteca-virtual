import { useState } from "react";
import { deleteComment, likeComment } from "../services/comments.service";

export const useComment = () => {
  const [isCommentLiked, setIsCommentLiked] = useState<boolean>(false);

  const removeComment = (commentId: number) => {
    deleteComment(commentId).then((error) => {
      console.error(error);
    });
  };

  const likedComment = (userId: string, commentId: number) => {
    const like = {
      user_id: userId,
      comment_id: commentId,
    };

    likeComment(like).then((error) => {
      if (error) console.error(error);
    });
  };

  return { removeComment, likedComment };
};
