import { useBooks } from "./api/useBooks";
import { useEffect } from "react";

export function useBookData(offset, limit){
    const { bookData, bookLoading, bookError, getBooks } = useBooks(offset, limit);
    useEffect(() => {
       getBooks(offset, limit)
    },[offset]);

    return {bookData, bookLoading, bookError, getBooks}
}