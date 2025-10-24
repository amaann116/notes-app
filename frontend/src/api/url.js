import axios from "axios"

const BACKEND_URL = axios.create({
    baseURL: "http://localhost:4001/notes-app/"
})

export default BACKEND_URL;