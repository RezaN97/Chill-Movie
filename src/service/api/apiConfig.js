import { create } from 'zustand'


const URL = import.meta.env.VITE_API_URL

const useAPIStore = create(() => ({
    baseURL: URL,
}))

export default useAPIStore