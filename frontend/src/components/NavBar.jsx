import { Link, useLocation } from "react-router-dom";
import { PiFilmReel } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Sesión cerrada");
    navigate("/login");
  };

  return (
    <nav className="border-blue-100/10 border-b p-4 w-full text-white select-none text-xl font-normal flex gap-4  justify-between items-center relative">
      <div className="absolute top-2 select-none" id="logo">
        <Link to="/media" className="text-2xl font-bold">
          <PiFilmReel className="text-secundary-light inline-block w-12 h-12 text-secu ndary-light" />
          <span>
            Film<span className="text-secundary-light font-extrabold">Play</span>
          </span>
        </Link>
      </div>
      <ul className="flex space-x-4 ml-44">
        {[
          { path: "/media", label: "Media" },
          { path: "/createMedia", label: "Create Media" },
          { path: "/director", label: "Director" },
          { path: "/genre", label: "Genre" },
          { path: "/producer", label: "Producer" },
          { path: "/type", label: "Type" },
        ].map(({ path, label }) => (
          <li key={path}>
            <Link
              to={path}
              className={`hover:text-secundary-light relative ${
                location.pathname === path
                  ? "after:content-[''] after:w-3/4 after:h-1 after:bg-secundary-light after:block after:rounded-md after:m-auto after:transition-all after:duration-150 after:ease-linear after:scale-x-100 after"
                  : "after:scale-0"
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <button
        onClick={handleLogout}
        className="w-8 h-8 text-white hover:text-red-500 "
        aria-label="Cerrar sesión"
      >
       
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h6q.425 0 .713.288T12 4t-.288.713T11 5H5v14h6q.425 0 .713.288T12 20t-.288.713T11 21zm12.175-8H10q-.425 0-.712-.288T9 12t.288-.712T10 11h7.175L15.3 9.125q-.275-.275-.275-.675t.275-.7t.7-.313t.725.288L20.3 11.3q.3.3.3.7t-.3.7l-3.575 3.575q-.3.3-.712.288t-.713-.313q-.275-.3-.262-.712t.287-.688z"/></svg>
      </button>
    </nav>
  );
};

export default Navbar;
