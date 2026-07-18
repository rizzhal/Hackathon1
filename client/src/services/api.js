import axios from "axios";


const accessApi = import.meta.env.VITE_API_URL

if(!accessApi){
    throw new Error("Api key is not configured ")
}
const api = axios.create({
    baseURL: accessApi
})



export default api