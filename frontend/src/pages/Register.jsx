import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, Toaster } from "sonner";
const API = import.meta.env.VITE_API_URL;

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API}user/register`, {
        name,
        email,
        password,
      });

      setLoading(false);
      toast.success("Usuario registrado correctamente");
      setName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      setLoading(false);
      const message =
        err?.response?.data?.message ||
        err?.response?.data ||
        "Error al registrar usuario";
      toast.error(message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-default px-4">
      <Toaster />
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-primary-dark bg-opacity-20 p-8 rounded-lg text-white"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Crear cuenta</h2>

        <label className="block mb-3">
          <span className="text-sm opacity-80">Nombre</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 rounded bg-white bg-opacity-5 focus:outline-none"
            placeholder="Tu nombre"
          />
        </label>

        <label className="block mb-3">
          <span className="text-sm opacity-80">Correo</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 rounded bg-white bg-opacity-5 focus:outline-none"
            placeholder="tu@ejemplo.com"
          />
        </label>

        <label className="block mb-3">
          <span className="text-sm opacity-80">Contraseña</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 rounded bg-white bg-opacity-5 focus:outline-none"
            placeholder="••••••••"
          />
        </label>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 rounded bg-secundary-light text-black font-semibold hover:opacity-95 transition"
        >
          {loading ? "Registrando..." : "Registrarse"}
        </button>

        <p className="mt-4 text-sm opacity-80 text-center">
          ¿Ya tienes cuenta?{" "}
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="underline"
          >
            Iniciar sesión
          </button>
        </p>
      </form>
    </div>
  );
}
