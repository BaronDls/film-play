import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    setLoading(true);
    try {
      await axios.post("/api/users/register", {
        name,
        email,
        password,
      });

      setLoading(false);
      navigate("/login");
    } catch (err) {
      setLoading(false);
      setError(
        err?.response?.data?.message ||
          err?.response?.data ||
          "Error al registrar usuario"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-default px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-primary-dark bg-opacity-20 p-8 rounded-lg text-white"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Crear cuenta</h2>

        {error && (
          <div className="mb-4 text-sm text-red-300 bg-red-900 bg-opacity-20 p-2 rounded">
            {error}
          </div>
        )}

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
