import api from "./api";

async function getGroups() {
 const response = await api.get("/group");
 return response.data
}

export const groupApi = { getGroups };
