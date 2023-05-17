import { useGetComments } from "../../hooks/useGetComments";
import { Comment } from "../Comment/Comment";
import "./ListOfComments.css";

interface Props {
  bookId: number;
}

export const ListOfComments = ({ bookId }: Props) => {
  const { comments } = useGetComments(bookId);

  const handleComment = () => {
    if (comments.length === 0) {
      return <p className="listOfComments--noComments">No hay comentarios.</p>;
    } else {
      return (
        <>
          {comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </>
      );
    }
  };

  return <div className="listOfComments">{handleComment()}</div>;
};
