import api from "./api";

async function confirmMeeting(token, groupId, permission) {
    const config = {
        headers: { Authorization: `Bearer ${token}` },
       };
 const response = await api.post(`/meeting/confirm/${groupId}?permissions[]=${permission}`,{}, config);
 return response.data
}

export const meetingApi = {
    confirmMeeting,
}