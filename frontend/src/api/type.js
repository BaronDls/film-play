
import axios from "axios";

const API = import.meta.env.VITE_API_URL;
export const typeRequest = async (type) => await axios.post(`${API}type`, type,{headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}});
export const typeList = async () => await axios.get(`${API}type`,{headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}});
export const typeDelete = async (id) => await axios.delete(`${API}type/${id}`,{headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}});
export const typeUpdate = async (id, updatedData) => await axios.put(`${API}type/${id}`, updatedData,{headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}});


