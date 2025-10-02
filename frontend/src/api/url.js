import axios from "axios"

const BACKEND_URL = axios.create({
    baseURL: "https://notes-app-backend-nvjl.onrender.com/api/v1/note-app/"
})

export default BACKEND_URL;
