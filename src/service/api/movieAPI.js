import axios from "axios";
import { storeMovie } from "../../Store/store";

export const movieAPI = axios.create({ baseURL: import.meta.env.VITE_API_URL})

//GET DATA API
export const getAPI = () => {
    axios.get(movieAPI)
        .then((res) => {
            console.log(res.data)
        .catch((err) => {
            console.error(err)
        })
        })
}

// POST DATA API
export const postAPI = () => {
    
    // SET DATA FOR POST to API 
    axios.post(movieAPI, storeMovie)
        .then((res) => {
            console.log(res.data)
        .catch((err) => {
            console.error(err)
        })
        })

}

// UPDATE DATA API

// DELETE DATA API



