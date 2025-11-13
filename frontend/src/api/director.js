
import axios from "axios"; // peticiones al igual que fetch
import { toast } from "sonner";

const API = import.meta.env.VITE_API_URL;
export const directorRequest = async (director) => {
    try {
        return await axios.post(`${API}director`, director, {headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}});
    } catch (error) {
        if (error.response.data.message === "Acceso denegado") {
            toast.error("Access denied. Admins only.");
            return;
        }
        toast.error("Error creating director");
    }
}
export const directorList = async () => await axios.get(`${API}director`,{headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}});
export const directorDelete = async (id) => await axios.delete(`${API}director/${id}`,{headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}});
export const directorUpdate = async (id, updatedData) => await axios.put(`${API}director/${id}`, updatedData,{headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}});


