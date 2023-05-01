import "./Home.css";
import { useEffect, useState } from "react";
import { BookType } from "../../../types/Books";
import { Filters } from "../../Filters/Filters";
import { ListOfBooks } from "../../ListOfBooks/ListOfBooks";
import { Header } from "../../Header/Header";
import { useGetBooks } from "../../../hooks/useGetBooks";

export const Home = () => {
  const { books, error } = useGetBooks();
  const [filteredBooks, setFilteredBooks] = useState<Array<BookType>>(books);

  useEffect(() => {
    setFilteredBooks(books);
  }, [books]);

  return (
    <div className="home">
      <Header />
      <Filters books={books} setBooks={setFilteredBooks} />
      <ListOfBooks books={filteredBooks} />
    </div>
  );
};
