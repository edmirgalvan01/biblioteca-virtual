import { useNavigate } from "react-router-dom";
import { Book } from "../../types/Books";
import "./BookCard.css";

interface Props {
  book: Book;
}

export const BookCard = ({ book }: Props) => {
  const navigate = useNavigate();

  return (
    <article className="bookCard" onClick={() => navigate(`/book/${book.id}`)}>
      <img className="bookCard--img" src={book.img} alt={book.title} />
      <h3 className="bookCard--title">{book.title}</h3>
      <p className="bookCard--author">{book.author}</p>
    </article>
  );
};
