import { useNavigate } from "react-router-dom";

const NoFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-primary-default text-white px-4">
      <div className="max-w-lg text-center">
        <h1 className="text-[7rem] font-extrabold tracking-tight leading-none">404</h1>
        <p className="mt-4 text-2xl font-semibold">Página no encontrada</p>
        <p className="mt-2 text-sm opacity-80">
          Lo sentimos, la página que buscas no existe o fue movida.
        </p>

        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 rounded-md bg-white bg-opacity-10 hover:bg-opacity-20 transition"
          >
            Volver
          </button>
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 rounded-md bg-secundary-light text-black hover:opacity-95 transition"
          >
            Ir al inicio
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoFound;