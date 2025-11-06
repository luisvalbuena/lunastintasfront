import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.jpeg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#90AF9D] shadow-none">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="w-44 h-16 md:w-56 md:h-20 bg-[#90AF9D] flex items-center justify-center overflow-hidden">
            <img
              src={logo}
              alt="Logo Lunas Tintas"
              className="object-contain w-full h-full"
            />
          </div>
        </Link>

        {/* Navegación escritorio */}
        <nav className="hidden md:flex items-center space-x-8 text-[#F6EBAF] font-semibold text-lg">
          <Link
            to="/"
            className="hover:text-white transition-colors duration-200"
          >
            Inicio
          </Link>
          <Link
            to="/reserva"
            className="hover:text-white transition-colors duration-200"
          >
            Reserva presencial
          </Link>
          <Link
            to="/carta"
            className="hover:text-white transition-colors duration-200"
          >
            Haz tu carta
          </Link>
          <Link
            to="/about"
            className="hover:text-white transition-colors duration-200"
          >
            Sobre mí
          </Link>
        </nav>

        {/* Botón menú móvil */}
        <button
          className="md:hidden text-[#F6EBAF] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú desplegable móvil */}
      {menuOpen && (
        <div className="md:hidden bg-[#90AF9D] border-t border-[#F6EBAF]/30 shadow-inner">
          <nav className="flex flex-col items-center py-4 space-y-4 text-[#F6EBAF] font-medium text-lg">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-white transition-colors duration-200"
            >
              Inicio
            </Link>
            <Link
              to="/reserva"
              onClick={() => setMenuOpen(false)}
              className="hover:text-white transition-colors duration-200"
            >
              Reserva presencial
            </Link>
            <Link
              to="/carta"
              onClick={() => setMenuOpen(false)}
              className="hover:text-white transition-colors duration-200"
            >
              Haz tu carta
            </Link>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-white transition-colors duration-200"
            >
              Sobre mí
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}


