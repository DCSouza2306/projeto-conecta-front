import { memberApi } from "../../services/memberApi";
import useAsync from "../useAsync";

export function useRequest() {
 const {
  data: requestData,
  loading: requestLoading,
  error: requestError,
  task: requestMember,
 } = useAsync(memberApi.requestMember, false);

 return {
  requestData,
  requestLoading,
  requestError,
  requestMember,
 };
}
