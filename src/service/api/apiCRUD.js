import api from "./apiSetup"

// url from api.get/post/put/del is custom
// GET
export const getData = (endpoint) => api.get(`/${endpoint}`)

// POST
export const postData = (endpoint, data) => api.post(`/${endpoint}`, data)

// UPDATE
export const updateData = (id, endpoint, data) => api.put(`/${endpoint}/${id}`, data)

// DELETE
export const deleteData = (id, endpoint) => api.get(`/${endpoint}/${id}`)

// PUT
export const putData = (id, endpoint) => api.put(`/${endpoint}/${id}`)