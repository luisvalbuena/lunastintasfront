import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#90B29E] text-[#FFF4C7] py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-10 md:space-y-0">
          {/* Logo + info */}
          <div className="md:w-1/3">
            <h2 className="text-2xl font-bold mb-3 tracking-wide">
              Lunas Tintas
            </h2>
            <p className="text-[#FFF4C7]/90 leading-relaxed">
              Descubre tu carta astral personalizada. Gracias por formar parte
              de esta conexión con el cielo.
            </p>
          </div>

          {/* Enlaces */}
          <div className="md:w-1/3 grid grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2 text-[#FFF4C7] uppercase text-sm tracking-wide">
                Explorar
              </h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    to="/"
                    className="hover:text-[#CBAF87] transition-colors duration-200"
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/carta"
                    className="hover:text-[#CBAF87] transition-colors duration-200"
                  >
                    Haz tu carta
                  </Link>
                </li>
                <li>
                  <Link
                    to="/resultado"
                    className="hover:text-[#CBAF87] transition-colors duration-200"
                  >
                    Ver resultado
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-[#FFF4C7] uppercase text-sm tracking-wide">
                Legal
              </h3>
              <ul className="space-y-1">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#CBAF87] transition-colors duration-200"
                  >
                    Privacidad
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#CBAF87] transition-colors duration-200"
                  >
                    Términos
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Redes sociales */}
          <div className="md:w-1/3">
            <h3 className="font-semibold mb-2 text-[#FFF4C7] uppercase text-sm tracking-wide">
              Síguenos
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-[#CBAF87] transition-colors duration-200"
              >
                Instagram
              </a>
              <a
                href="#"
                className="hover:text-[#CBAF87] transition-colors duration-200"
              >
                Facebook
              </a>
              <a
                href="#"
                className="hover:text-[#CBAF87] transition-colors duration-200"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="mt-10 border-t border-[#FFF4C7]/30 pt-4 text-center text-[#FFF4C7]/70 text-sm">
          © {new Date().getFullYear()} Lunas Tintas. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}

