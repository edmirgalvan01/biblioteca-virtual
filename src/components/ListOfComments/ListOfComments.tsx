import { useGetComments } from "../../hooks/useGetComments";
import { Comment } from "../Comment/Comment";
import "./ListOfComments.css";

interface Props {
  bookId: number;
}

export const ListOfComments = ({ bookId }: Props) => {
  const { comments } = useGetComments(bookId);

  return (
    <div className="listOfComments">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};
