import axios from "axios"

const BACKEND_URL = axios.create({
    baseURL: "http://localhost:4001/api/v1/note-app/"
})

export default BACKEND_URL;