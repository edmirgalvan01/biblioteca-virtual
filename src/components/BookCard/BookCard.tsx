import { useNavigate } from "react-router-dom";
import { BookType } from "../../types/Books";
import "./BookCard.css";

interface Props {
  book: BookType;
}

export const BookCard = ({ book }: Props) => {
  const navigate = useNavigate();

  return (
    <article className="bookCard" onClick={() => navigate(`/book/${book.id}`)}>
      {book.img ? (
        <img className="bookCard--img" src={book.img} alt={book.title} />
      ) : (
        <div className="bookCard--img no-image">
          <h2>{book.title[0]}</h2>
        </div>
      )}
      <h3 className="bookCard--title">{book.title}</h3>
      <p className="bookCard--author">{book.author}</p>
    </article>
  );
};
