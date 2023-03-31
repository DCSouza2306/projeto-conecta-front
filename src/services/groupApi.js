import api from "./api";

async function getGroups() {
 const response = await api.get("/group");
 return response.data
}

async function getGroupById(id) {
    const response = await api.get(`/group/${id}`);
    return response.data
}

export const groupApi = { getGroups, getGroupById };
