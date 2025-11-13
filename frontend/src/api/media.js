import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const mediaRequest = async (media) => await axiosInstance.post("media", media, {headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}});
export const mediaList = async () => await axiosInstance.get("media", {headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}});

export const updatedMedia = async (id, media) => await axiosInstance.put(`media/${id}`, media, {headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}});