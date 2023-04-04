import api from "./api";

async function getBooks(offset, limit) {
 const response = await api.get(`/books?offset=${offset}&limit=${limit}`);
 return response.data;
}

async function getBooksCount(){
    const response = await api.get("/books/count");
    return response.data
}

async function getBookById(id){
    const response = await api.get(`/books/${id}`);
    return response.data
}

export const bookApi = { getBooks, getBooksCount, getBookById };
