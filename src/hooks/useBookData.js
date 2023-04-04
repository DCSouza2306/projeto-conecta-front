import { useBooks } from "./api/useBooks";
import { useEffect } from "react";

export function useBookData(offset, limit){
    const { booksData, booksLoading, booksError, getBooks } = useBooks(offset, limit);
    useEffect(() => {
       getBooks(offset, limit)
    },[offset]);

    return {booksData, booksLoading, booksError, getBooks}
}