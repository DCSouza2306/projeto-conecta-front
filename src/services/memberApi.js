import api from "./api";

async function requestMember(token, groupId) {
    const config = {
        headers: { Authorization: `Bearer ${token}` },
       };
 const response = await api.post(`/member/request/${groupId}`,{}, config);
 return response.data
}

async function leaveGroup(token, groupId) {
    const config = {
        headers: { Authorization: `Bearer ${token}` },
       };
 const response = await api.delete(`/member/leave/${groupId}`, config);
 return response.data
}



export const memberApi = {
    requestMember,
    leaveGroup
}
