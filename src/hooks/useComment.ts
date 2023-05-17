import { deleteComment } from "../services/comments.service";

export const useComment = () => {
  const removeComment = (commentId: number) => {
    deleteComment(commentId).then((error) => {
      console.error(error);
    });
  };

  return { removeComment };
};
