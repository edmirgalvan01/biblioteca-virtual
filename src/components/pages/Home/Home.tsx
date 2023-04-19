import "./Home.css";
import { useState } from "react";
import database from "../../../mocks/books.json";
import { Book } from "../../../types/Books";
import { Filters } from "../../Filters/Filters";
import { ListOfBooks } from "../../ListOfBooks/ListOfBooks";
import { Header } from "../../Header/Header";

export const Home = () => {
  const [books, setBooks] = useState<Array<Book>>(database);

  return (
    <div className="home">
      <Header />
      <Filters books={database} setBooks={setBooks} />
      <ListOfBooks books={books} />
    </div>
  );
};
