import axios from "axios"
import useAPIStore from "./apiConfig"

const api = axios.create()

api.interceptors.request.use((config) =>{
    const { baseURL } = useAPIStore.getState()
    config.baseURL = baseURL
    return config
})

export default api

