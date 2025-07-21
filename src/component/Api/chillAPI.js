import axios from "axios";

const CHILL_URL = import.meta.env.VITE_APP_API_BASE_URL

export const getChillMovie = async () => {
    try {
        const response = await axios.get({CHILL_URL})
        return response.data
    } catch (error) {
        console.log('Error get data API:', error);
        throw error
    }
}


   











