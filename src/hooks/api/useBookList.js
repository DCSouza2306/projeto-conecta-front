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

export function useDeleteBookList(){
    const {
        loading: deleteBookListLoading,
        error: deleteBookListError,
        task: deleteBookList,
       } = useAsync(bookListApi.deleteBookList, false);
      
       return {
        deleteBookListLoading,
        deleteBookListError,
        deleteBookList,
       };
}

export function useUpdateBookList() {
    const {
     data: updateBookListData,
     loading: updateBookListLoading,
     error: updateBookListError,
     task: updateBookList,
    } = useAsync(bookListApi.updateBookList, false);
   
    return {
     updateBookListData,
     updateBookListLoading,
     updateBookListError,
     updateBookList,
    };
   }
