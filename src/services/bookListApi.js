import api from "./api";

async function createBookList(body, token, groupId, permision){
    const config = {
        headers: { Authorization: `Bearer ${token}` },
       };
    const response = await api.post(`/book-list/${groupId}?permissions=${permision}`, body, config);
    return response.data;
}



export const bookListApi = {
    createBookList
}