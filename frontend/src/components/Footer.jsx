// src/components/Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-purple-800 text-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-6 md:space-y-0">
          
          {/* Logo + info */}
          <div className="md:w-1/3">
            <h2 className="text-2xl font-bold mb-2">Lunas Tintas</h2>
            <p className="text-gray-300">
              Descubre tu carta astral personalizada. Gracias por visitarnos.
            </p>
          </div>

          {/* Enlaces */}
          <div className="md:w-1/3 grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Explorar</h3>
              <ul className="space-y-1">
                <li><Link to="/" className="hover:underline">Inicio</Link></li>
                <li><Link to="/carta" className="hover:underline">Haz tu carta</Link></li>
                <li><Link to="/resultado" className="hover:underline">Ver resultado</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Legal</h3>
              <ul className="space-y-1">
                <li><a href="#" className="hover:underline">Privacidad</a></li>
                <li><a href="#" className="hover:underline">Términos</a></li>
              </ul>
            </div>
          </div>

          {/* Contacto o redes */}
          <div className="md:w-1/3">
            <h3 className="font-semibold mb-2">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">Instagram</a>
              <a href="#" className="hover:text-white">Facebook</a>
              <a href="#" className="hover:text-white">Twitter</a>
            </div>
          </div>

        </div>

        <div className="mt-8 border-t border-purple-700 pt-4 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Lunas Tintas. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
