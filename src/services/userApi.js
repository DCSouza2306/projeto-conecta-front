import api from "./api";

async function getUser(userName){
    const response = await api.get(`/user/${userName}`);
    return response.data;
}

async function signUp(body){
    const response = await api.post(`/user/sign-up`, body);
    return response.data;
}

export const userApi = {
    getUser,
    signUp
}