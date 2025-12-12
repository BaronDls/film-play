import PropTypes from "prop-types";

export default function SubscriptionModal({ media, onClose, onGoToPayment }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div
        className="
        bg-white/10 backdrop-blur-2xl
        text-white rounded-2xl p-7 w-full max-w-xl
        shadow-[0_0_35px_rgba(0,0,0,0.4)] border border-white/20
        animate-scaleIn"
      >
        <div className="flex items-start gap-5">
          <img
            src={media?.photo}
            alt={media?.title}
            className="w-32 h-44 object-cover rounded-xl shadow-lg border border-white/10"
          />

          <div className="flex-1">
            <h2 className="text-2xl font-extrabold mb-2 drop-shadow">
              Suscripción requerida
            </h2>

            <p className="text-sm opacity-90 mb-3 leading-relaxed">
              Para acceder a{" "}
              <span className="font-bold text-blue-300">{media?.title}</span>,
              necesitas una suscripción activa.
            </p>

            <p className="text-xs opacity-60">
              Esto es una simulación del proceso de suscripción.
            </p>
          </div>
        </div>
        <div className="mt-8 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="
              px-4 py-2 rounded-xl 
              bg-white/10 hover:bg-white/20 
              transition backdrop-blur-lg"
          >
            Cancelar
          </button>

          <button
            onClick={() => onGoToPayment(media)}
            className="
              px-5 py-2 rounded-xl font-semibold
              bg-gradient-to-br from-blue-400 to-blue-600
              text-black shadow-lg hover:shadow-xl
              transition hover:scale-[1.02]
            "
          >
            Subscribirme
          </button>
        </div>
      </div>
    </div>
  );
}

SubscriptionModal.propTypes = {
  media: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  onGoToPayment: PropTypes.func.isRequired,
};
