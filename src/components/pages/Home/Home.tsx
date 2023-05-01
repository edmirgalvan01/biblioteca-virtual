import "./Home.css";
import { useEffect, useState } from "react";
import { BookType } from "../../../types/Books";
import { Filters } from "../../Filters/Filters";
import { ListOfBooks } from "../../ListOfBooks/ListOfBooks";
import { Header } from "../../Header/Header";
import { supabase } from "../../../supabase/client";
import { PostgrestError } from "@supabase/supabase-js";

const getBooks = async () => {
  const { data, error } = await supabase.from("books").select();

  return { data, error };
};

const useGetBooks = () => {
  const [books, setBooks] = useState<Array<BookType>>([]);
  const [error, setError] = useState<PostgrestError | null>();

  useEffect(() => {
    getBooks().then(({ data, error }) => {
      setBooks(data as Array<BookType>);
      setError(error);
    });
  }, []);

  return { books, error };
};

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
