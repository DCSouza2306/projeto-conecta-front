import { bookApi } from "../../services/bookApi";
import useAsync  from "../useAsync";

export function useBooks(offset, limit) {
  const {
    data: booksData,
    loading: booksLoading,
    error: booksError,
    task: getBooks
  } = useAsync(() => bookApi.getBooks(offset,limit));

  return {
    booksData,
    booksLoading,
    booksError,
    getBooks
  };


}
