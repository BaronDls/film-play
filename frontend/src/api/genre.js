import axios from "axios"; 


const API = import.meta.env.VITE_API_URL;
export const genreRequest = async (genre) => await axios.post(`${API}genre`, genre,{headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}});
export const genreList = async () => await axios.get(`${API}genre`,{headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}});
export const genreDelete = async (id) => await axios.delete(`${API}genre/${id}`,{headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}});