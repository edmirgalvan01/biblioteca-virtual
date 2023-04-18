import { useNavigate, useParams } from "react-router-dom";
import { Book } from "../../../types/Books";
import books from "../../../mocks/books.json";

export const BookPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const book = books.find((book) => book.id === parseInt(id!)) as Book;

  return (
    <div className="bookPage">
      <section className="arrow-back">
        <button onClick={() => navigate(-1)}>Atras</button>
      </section>
      <section className="bookPage--portrait">
        <img src={book.img} alt={book.title} />
        <div className="bookPage--titles">
          <h1>{book.title}</h1>
          <h2>{book.author}</h2>
        </div>
      </section>
      <p className="bookPage--description">{book.description}</p>
      <button className="primaryButton">Leer ahora</button>
    </div>
  );
};
