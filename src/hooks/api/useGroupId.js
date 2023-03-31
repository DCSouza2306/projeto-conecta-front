import { groupApi } from "../../services/groupApi";
import useAsync  from "../useAsync";

export function useGroupId(id) {

  const {
    data: groupIdData,
    loading: groupIdLoading,
    error: groupIdError,
    task: getGroupById
  } = useAsync(() => groupApi.getGroupById(id));

  return {
    groupIdData,
    groupIdLoading,
    groupIdError,
    getGroupById
  };


}
