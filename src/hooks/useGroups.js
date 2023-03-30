import { groupApi } from "../services/groupApi";
import useAsync  from "./useAsync";

export function useGroups() {

  const {
    data: groupsData,
    loading: groupsLoading,
    error: groupsError,
    task: getGroups
  } = useAsync(groupApi.getGroups);

  return {
    groupsData,
    groupsLoading,
    groupsError,
    getGroups
  };


}
