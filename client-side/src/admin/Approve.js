// import { BASE_URL } from "../utils";
// import axios from "../utils/axios";
import axios from "axios"

export const approveProject = async (id)=>{
    try {
        const response = await axios.put(`/api/projects/approve/${id}`);
        window.location.reload();
    } catch (error) {
        console.log(error.mesasge);
        alert(error.message)
    }
}