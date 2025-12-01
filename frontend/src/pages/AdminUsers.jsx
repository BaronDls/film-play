import { useEffect, useState } from "react";
import axios from "axios";
import { Toaster, toast } from "sonner";
const API = import.meta.env.VITE_API_URL;

function getAuthHeader() {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API}users`, { headers: getAuthHeader() });
      setUsers(res.data);
    } catch (err) {
      toast.error(err?.response?.data?.message || "Error al obtener usuarios");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("¿Eliminar usuario?")) return;
    try {
      await axios.delete(`${API}users/${id}`, { headers: getAuthHeader() });
      toast.success("Usuario eliminado");
      setUsers((u) => u.filter((x) => x._id !== id));
    } catch (err) {
      toast.error(err?.response?.data?.message || "Error al eliminar usuario");
    }
  };

  const toggleRole = async (user) => {
    const newRole = user.role === "user" ? "administrador" : "user";
    try {
      const res = await axios.patch(
        `${API}users/${user._id}/role`,
        { role: newRole },
        { headers: { "Content-Type": "application/json", ...getAuthHeader() } }
      );
      toast.success("Rol actualizado");
      setUsers((u) => u.map((x) => (x._id === user._id ? res.data : x)));
    } catch (err) {
      toast.error(err?.response?.data?.message || "Error al cambiar rol");
    }
  };

  return (
    <div className="p-6">
      <Toaster />
      <h1 className="text-2xl font-bold mb-4">Gestión de usuarios</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className="bg-white bg-opacity-5 p-4 rounded">
          {users.length === 0 ? (
            <p>No hay usuarios</p>
          ) : (
            <table className="w-full table-auto">
              <thead>
                <tr className="text-left">
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>Rol</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u._id} className="border-t">
                    <td className="py-2">{u.name}</td>
                    <td>{u.email}</td>
                    <td>{u.role}</td>
                    <td className="py-2">
                      <button
                        onClick={() => toggleRole(u)}
                        className="mr-2 px-3 py-1 bg-yellow-400 rounded"
                      >
                        Cambiar rol
                      </button>
                      <button
                        onClick={() => handleDelete(u._id)}
                        className="px-3 py-1 bg-red-500 rounded text-white"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
}