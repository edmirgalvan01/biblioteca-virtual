import { useNavigate, useParams } from "react-router-dom";
import { Book } from "../../../types/Books";
import books from "../../../mocks/books.json";
import "./BookPage.css";
import { ArrowBack } from "../../icons/ArrowBack";
import { PrimaryButton } from "../../Buttons/Buttons";
import { ListOfBooks } from "../../ListOfBooks/ListOfBooks";

export const BookPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const book = books.find((book) => book.id === parseInt(id!)) as Book;

  return (
    <div className="bookPage">
      <section onClick={() => navigate(-1)} className="arrow-back">
        <ArrowBack />
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
      <ListOfBooks books={books} style="horizontal" />
    </div>
  );
};
