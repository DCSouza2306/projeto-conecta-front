import { groupApi } from "../../services/groupApi";
import useAsync from "../useAsync";

export function useGroups() {
 const {
  data: groupsData,
  loading: groupsLoading,
  error: groupsError,
  task: getGroups,
 } = useAsync(groupApi.getGroups);

 return {
  groupsData,
  groupsLoading,
  groupsError,
  getGroups,
 };
}

export function useCreateGroup() {
  const {
   data: groupData,
   loading: groupLoading,
   error: groupError,
   task: createGroup,
  } = useAsync(groupApi.createGroup, false);
 
  return {
    groupData,
    groupLoading,
    groupError,
    createGroup,
  };
 }

 export function useCloseOpenGroup(){
  const{
    loading: closeOpenLoading,
    error: closeOpenError,
    task: closeOpenGroup
  } = useAsync(groupApi.closeOpenGroup, false);

  return{
    closeOpenLoading,
    closeOpenError,
    closeOpenGroup
  }
 }

 export function useEditGroup(){
  const{
    loading: editGroupLoading,
    error: editGroupError,
    task: changeGroupInfos
  } = useAsync(groupApi.changeGroupInfos, false);

  return{
    editGroupLoading,
    editGroupError,
    changeGroupInfos
  }
 }
