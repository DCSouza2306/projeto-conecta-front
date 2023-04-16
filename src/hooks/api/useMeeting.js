import { meetingApi } from "../../services/meetingApi";
import useAsync from "../useAsync";

export function useConfirmMeeting() {
 const {
  data: meetingData,
  loading: meetingLoading,
  error: meetingError,
  task: confirmMeeting,
 } = useAsync(meetingApi.confirmMeeting, false);

 return {
  meetingData,
  meetingLoading,
  meetingError,
  confirmMeeting,
 };
}