
import axios from "axios"; // peticiones al igual que fetch

const API = import.meta.env.VITE_API_URL;

export const producerRequest = async (producer) => await axios.post(`${API}producer`, producer,{headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}});
export const producerList = async () => await axios.get(`${API}producer`,{headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}});
export const producerDelete = async (id) => await axios.delete(`${API}producer/${id}`,{headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}});
export const producerUpdate = async (id, updatedData) => await axios.put(`${API}producer/${id}`, updatedData,{headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}});
