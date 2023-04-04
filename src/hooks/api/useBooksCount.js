import { bookApi } from "../../services/bookApi";
import useAsync  from "../useAsync";

export function useBooksCount() {
  const {
    data: booksCountData,
    loading: booksCountLoading,
    error: booksCountError,
    task: getBooksCount
  } = useAsync(() => bookApi.getBooksCount());

  return {
    booksCountData,
    booksCountLoading,
    booksCountError,
    getBooksCount
  };


}
