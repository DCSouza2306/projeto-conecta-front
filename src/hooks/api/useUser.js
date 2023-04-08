import { userApi } from "../../services/userApi";
import useAsync from "../useAsync";

export function useUser(userName){
    const {
        data: userData,
        loading: userLoading,
        error: userError,
        task: getUser
      } = useAsync(() => userApi.getUser(userName));
    
      return {
        userData,
        userLoading,
        userError,
        getUser
      };
}