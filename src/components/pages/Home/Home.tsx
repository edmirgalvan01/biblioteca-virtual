import { useEffect, useState } from "react";

import { ListOfBooks } from "../../ListOfBooks/ListOfBooks";
import { Filters } from "../../Filters/Filters";
import { Header } from "../../Header/Header";

import type { BookType } from "../../../types/Books";

import { useGetBooks } from "../../../hooks/useGetBooks";

import "./Home.css";

export const Home = () => {
  const { books } = useGetBooks();
  const [filteredBooks, setFilteredBooks] = useState<Array<BookType>>(books);

  useEffect(() => {
    setFilteredBooks(books);
  }, [books]);

  return (
    <div className="home containerPage">
      <Header />
      <Filters books={books} setBooks={setFilteredBooks} />
      <ListOfBooks books={filteredBooks} />
    </div>
  );
};
