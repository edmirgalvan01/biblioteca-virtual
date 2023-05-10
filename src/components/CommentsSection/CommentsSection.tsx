import { PrimaryButton } from "../Buttons/Buttons";
import { ListOfComments } from "../ListOfComments/ListOfComments";
import "./CommentsSection.css";

export const CommentsSection = () => {
  return (
    <div className="commentsSection">
      <h2>Comentarios</h2>
      <ListOfComments />
      <PrimaryButton>Nuevo comentario</PrimaryButton>
    </div>
  );
};
