import { useNavigate, useParams } from "react-router-dom";
import { Book } from "../../../types/Books";
import books from "../../../mocks/books.json";
import "./BookPage.css";
import { ArrowBackIcon } from "../../icons/ArrowBackIcon";
import { PrimaryButton } from "../../Buttons/Buttons";
import { ListOfBooksWithTitle } from "../../ListOfBooks/ListOfBooks";

export const BookPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const book = books.find((book) => book.id === parseInt(id!)) as Book;

  return (
    <div className="bookPage">
      <section onClick={() => navigate(-1)} className="arrow-back">
        <ArrowBackIcon />
      </section>
      <section className="bookPage--portrait">
        <img src={book.img} alt={book.title} />
        <div className="bookPage--titles">
          <h1>{book.title}</h1>
          <h2>{book.author}</h2>
        </div>
      </section>
      <p className="bookPage--description">{book.description}</p>
      <PrimaryButton>Leer ahora</PrimaryButton>
      <ListOfBooksWithTitle
        title="Otros libros"
        books={books}
        style="horizontal"
      />
    </div>
  );
};
