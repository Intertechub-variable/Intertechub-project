import { BASE_URL } from "../utils";
import axios from "../utils/axios";


export const approveProject = async (id)=>{
    try {
        const response = await axios.put(`${BASE_URL}/api/projects/approve/${id}`);
        console.log(response.data)
        window.location.reload();
    } catch (error) {
        console.log(error.mesasge);
        alert(error.message)
    }
}