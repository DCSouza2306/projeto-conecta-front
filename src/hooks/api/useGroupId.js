import { groupApi } from "../../services/groupApi";
import useAsync  from "../useAsync";

export function useGroupId(id, loadingNow = true) {

  const {
    data: groupIdData,
    loading: groupIdLoading,
    error: groupIdError,
    task: getGroupById
  } = useAsync(() => groupApi.getGroupById(id),loadingNow);

  return {
    groupIdData,
    groupIdLoading,
    groupIdError,
    getGroupById
  };


}
