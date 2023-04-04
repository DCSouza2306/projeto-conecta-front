import { createContext } from "react";
import { useState } from "react";

const BookContext = createContext();

export default BookContext;

export function BookProvider({ children }) {
 const [bookData, setBookData] = useState();
 return (
  <BookContext.Provider value={{bookData, setBookData }}>
   {children}
  </BookContext.Provider>
 );
}
