import api from "./api";

async function getGroups() {
 const response = await api.get("/group");
 return response.data
}

async function getGroupById(id) {
    const response = await api.get(`/group/${id}`);
    return response.data
}

async function createGroup(body, token){
    const config = {
        headers: { Authorization: `Bearer ${token}` },
       };
    const response = await api.post("/group/create", body, config)
    return response.data
}

async function closeOpenGroup(token, groupId, permision){
    const config = {
        headers: { Authorization: `Bearer ${token}` },
       };
    const response = await api.put(`/group/close-open/${groupId}?permissions[]=${permision}`, {}, config)
    return response.data
}

export const groupApi = { getGroups, getGroupById, createGroup, closeOpenGroup };
