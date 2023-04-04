import { bookApi } from "../../services/bookApi";
import useAsync  from "../useAsync";

export function useBookById(id) {
  const {
    data: bookData,
    loading: bookLoading,
    error: bookError,
    task: getBookById
  } = useAsync(() => bookApi.getBookById(id));

  return {
    bookData,
    bookLoading,
    bookError,
    getBookById
  };


}
