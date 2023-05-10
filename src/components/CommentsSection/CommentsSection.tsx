import { useState } from "react";
import { ListOfComments } from "../ListOfComments/ListOfComments";
import "./CommentsSection.css";

export const CommentsSection = () => {
  const [newComment, setNewComment] = useState<string>("");

  return (
    <div className="commentsSection">
      <h2>Comentarios</h2>
      <form className="commentsSection--form">
        <input
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Escribe tu comentario..."
          name="comment"
          value={newComment}
        />
        <button type="submit">Guardar</button>
      </form>
      <ListOfComments />
    </div>
  );
};
