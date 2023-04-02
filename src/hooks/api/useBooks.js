import { bookApi } from "../../services/bookApi";
import useAsync  from "../useAsync";

export function useBooks(offset, limit) {
  const {
    data: bookData,
    loading: bookLoading,
    error: bookError,
    task: getBooks
  } = useAsync(() => bookApi.getBooks(offset,limit));

  return {
    bookData,
    bookLoading,
    bookError,
    getBooks
  };


}
