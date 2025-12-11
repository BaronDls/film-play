import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { Toaster, toast } from "sonner";
import paymentImg from "../assets/payments.png";

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

  const handlePay = async () => {
    setProcessing(true);
    try {
      await new Promise((r) => setTimeout(r, 1200));
      localStorage.setItem(`subscribed_${userKey}`, "true");
      toast.success("Pago procesado. Suscripción activa.");
      navigate(`/media/${media._id}`);
    } catch (err) {
      toast.error("Error en el pago (simulado)");
    } finally {
      setProcessing(false);
    }
  };
  return (
    <div className="h-full flex items-center justify-center bg-primary-default px-4">
      <Toaster />
      <div className="bg-primary-dark text-white rounded-lg p-6 w-full max-w-xl border border-blue-600/40">
        <h2 className="text-2xl font-bold mb-4">Pago simulado</h2>
        <div className="flex gap-4">
          <img src={paymentImg} alt="payment" className="opacity-20 object-cover rounded" />
          <div className="flex-1">
            <h3 className="font-bold">Descripción</h3>
            <p className="opacity-70 mb-4">Detalles de pago ficticios para la subscripción.</p>

            <div className="mb-3">
              <label className="block text-sm opacity-80">Número de tarjeta (simulado)</label>
              <input className="w-full mt-1 p-2 rounded bg-white bg-opacity-5" placeholder="4242 4242 4242 4242" />
            </div>

            <div className="flex gap-2">
              <input className="p-2 rounded bg-white bg-opacity-5 w-1/2" placeholder="MM/AA" />
              <input className="p-2 rounded bg-white bg-opacity-5 w-1/2" placeholder="CVC" />
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 rounded bg-white bg-opacity-10 hover:bg-opacity-20"
            disabled={processing}
          >
            Cancelar
          </button>
          <button
            onClick={handlePay}
            className="px-4 py-2 rounded bg-secundary-light text-black font-semibold"
            disabled={processing}
          >
            {processing ? "Procesando..." : "Pagar & Suscribirme"}
          </button>
        </div>
      </div>
    </div>
  );
}