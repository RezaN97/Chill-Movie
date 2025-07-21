import api from "./apiSetup"

// url from api.get/post/put/del is custom
// GET
export const getData = (endpoint) => api.get(`/${endpoint}`)

// POST
export const postData = (endpoint, data) => api.post(`/${endpoint}`, data)

// UPDATE PUT
export const updateData = (endpoint, id, data) => api.put(`/${endpoint}/${id}`, data)

// DELETE
export const deleteData = (endpoint, id) => api.delete(`/${endpoint}/${id}`)
