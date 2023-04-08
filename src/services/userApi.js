import api from "./api";

async function getUser(userName){
    const response = await api.get(`/user/${userName}`);
    return response.data;
}

export const userApi = {
    getUser
}