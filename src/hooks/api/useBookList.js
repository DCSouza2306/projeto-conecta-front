import { bookListApi } from "../../services/bookListApi";
import useAsync from "../useAsync";

export function useCreateBookList() {
 const {
  data: createBookListData,
  loading: createBookListLoading,
  error: createBookListError,
  task: createBookList,
 } = useAsync(bookListApi.createBookList, false);

 return {
  createBookListData,
  createBookListLoading,
  createBookListError,
  createBookList,
 };
}
