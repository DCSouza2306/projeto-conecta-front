import { userApi } from "../../services/userApi";
import useAsync from "../useAsync";

export function useSignUp(){
    const {
        loading: signUpLoading,
        error: signUpError,
        task: signUp
      } = useAsync(userApi.signUp, false);
    
      return {
        signUpLoading,
        signUpError,
        signUp
      };
}