import { bookApi } from "../../services/bookApi";
import useAsync  from "../useAsync";

export function useBooksCount() {
  const {
    data: bookCountData,
    loading: bookCountLoading,
    error: bookCountError,
    task: getBooksCount
  } = useAsync(() => bookApi.getBooksCount());

  return {
    bookCountData,
    bookCountLoading,
    bookCountError,
    getBooksCount
  };


}
