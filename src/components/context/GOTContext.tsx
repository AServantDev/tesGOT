import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

import React from "react";
const baseUrl = "https://www.anapioficeandfire.com/api/";
const BookContext = createContext<Book[]>([]);

interface Book {
  url: string;
  name: string;
  isbn: string;
  authors: string[];
  numberOfPages: number;
  publisher: string;
  country: string;
  mediaType: string;
  released: Date;
  characters: string[];
  povCharacters: string[];
}

type WithChildren<T = {}> = T & { children: JSX.Element };

const BookProvider = ({ children }: WithChildren) => {
  const [books, setBooks] = useState<Book[]>([]);
  useEffect(() => {
    axios.get(baseUrl + "books?page=1").then((response) => {
      setBooks(response.data);
    });
  }, []);

  return <BookContext.Provider value={books}>{children}</BookContext.Provider>;
};
const useBooks = () => useContext(BookContext);
export { BookProvider, useBooks };
