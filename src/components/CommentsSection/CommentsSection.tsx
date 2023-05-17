import { ListOfComments } from "../ListOfComments/ListOfComments";
import { useNewComment } from "../../hooks/useNewComment";
import "./CommentsSection.css";

interface Props {
  bookId: number;
}

export const CommentsSection = ({ bookId }: Props) => {
  const { newComment, setNewComment, saveComment } = useNewComment(bookId);

  return (
    <div className="commentsSection">
      <h2>Comentarios</h2>
      <form className="commentsSection--form" onSubmit={(e) => saveComment(e)}>
        <input
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Escribe tu comentario..."
          name="comment"
          value={newComment}
        />
        <button type="submit">Guardar</button>
      </form>
      <ListOfComments bookId={bookId} />
    </div>
  );
};
