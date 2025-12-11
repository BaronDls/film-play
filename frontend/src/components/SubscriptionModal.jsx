import PropTypes from 'prop-types';
export default function SubscriptionModal({ media, onClose, onGoToPayment }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-primary-dark text-white rounded-lg p-6 w-full  max-w-lg shadow-lg border border-blue-600/50">
        <div className="flex items-start gap-4 h-44">
          <img
            src={media?.photo}
            alt={media?.title}
            className="w-32 object-cover rounded"
          />
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-1">Suscripción requerida</h2>
            <p className="text-sm opacity-80 mb-3">
              Para ver los detalles de <span className="font-semibold">{media?.title}</span> necesitas una suscripción activa.
            </p>
            <p className="text-xs opacity-60">
             Simulación de proceso de suscripción.
            </p>
          </div>
        </div>
        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-white bg-opacity-10 hover:bg-opacity-20"
          >
            Cancelar
          </button>
          <button
            onClick={() => onGoToPayment(media)}
            className="px-4 py-2 rounded bg-secundary-light text-black font-semibold hover:opacity-95"
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