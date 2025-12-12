import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Toaster, toast } from "sonner";

export default function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const media = location.state?.media || null;

  const [processing, setProcessing] = useState(false);

  if (!user) {
    navigate("/register");
    return null;
  }

  const userKey = user._id || user.id;
  if (!media) {
    navigate("/media");
    return null;
  }

  const handlePay = async (plan) => {
    setProcessing(true);
    try {
      await new Promise((r) => setTimeout(r, 1200));
      localStorage.setItem(`subscribed_${userKey}`, "true");
      toast.success(`Pago procesado. Plan ${plan} activado.`);
      navigate(`/media/${media._id}`);
    } catch {
      toast.error("Error en el pago (simulado)");
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 px-4 py-10">
      <Toaster />

      <div className="w-full max-w-6xl">
        <h2 className="text-center text-4xl font-extrabold text-white mb-12 drop-shadow-lg">
          Elige tu Suscripción Premium
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="
            bg-white/10 backdrop-blur-xl 
            rounded-2xl p-8 border border-white/20 
            shadow-xl transition transform hover:-translate-y-3 hover:shadow-2xl 
            hover:bg-white/20
          ">
            <h3 className="text-2xl font-bold text-blue-300 mb-2">Básico</h3>
            <p className="opacity-80 text-gray-300 mb-4">Para comenzar</p>

            <div className="text-5xl font-extrabold text-blue-400 mb-4">$9</div>

            <ul className="space-y-2 text-gray-200 text-sm mb-6">
              <li>✔ Series y películas </li>
              <li>✔ 1 pantalla </li>
              <li>✔ con publicidad</li>
            </ul>

            <button
              disabled={processing}
              onClick={() => handlePay("basic")}
              className="w-full py-3 rounded-xl bg-blue-400 text-black font-semibold hover:bg-blue-300 transition"
            >
              Elegir Básico
            </button>
          </div>

          <div className="
            bg-gradient-to-br from-yellow-400 to-yellow-600 
            text-black rounded-2xl p-8 shadow-[0_0_40px_rgba(255,200,0,0.4)]
            border border-yellow-300/40 
            scale-110 transform hover:-translate-y-3 hover:shadow-2xl 
            transition
          ">
            <h3 className="text-2xl font-bold mb-2">Pro</h3>
            <p className="opacity-90 mb-4">El más popular</p>

            <div className="text-5xl font-extrabold mb-4">$19</div>

            <ul className="space-y-2 text-black/80 text-sm mb-6">
              <li>✔ Peliculas y series HD</li>
              <li>✔ 2 pantalla </li>
              <li>✔ sin publicidad </li>
            </ul>

            <button
              onClick={() => handlePay("pro")}
              className="w-full py-3 rounded-xl bg-black text-yellow-300 font-semibold hover:bg-gray-900 transition"
            >
              Elegir Pro
            </button>
          </div>

          <div className="
            bg-gradient-to-br from-purple-600 to-purple-900
            text-white rounded-2xl p-8 
            border border-purple-400/40 
            shadow-xl transition transform hover:-translate-y-3 hover:shadow-2xl
          ">
            <h3 className="text-2xl font-bold mb-2">Premium</h3>
            <p className="opacity-80 mb-4">Para la familia</p>

            <div className="text-5xl font-extrabold mb-4">$39</div>

            <ul className="space-y-2 text-gray-200 text-sm mb-6">
              <li>✔ Peliculas y series 4k</li>
              <li>✔ 4 pantallas </li>
              <li>✔ Soporte 24/7</li>
            </ul>

            <button
              onClick={() => handlePay("premium")}
              className="w-full py-3 rounded-xl bg-white text-purple-700 font-bold hover:bg-gray-100 transition"
            >
              Elegir Premium
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => navigate(-1)}
            className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white backdrop-blur-lg transition"
          >
            Volver
          </button>
        </div>
      </div>
    </div>
  );
}
