import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6 text-center">

      {/* Ilustración */}
      <div className="mb-6">
        <svg
          className="w-48 h-48 text-purple-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 200 200"
        >
          <circle cx="100" cy="100" r="80" strokeWidth="6" />
          <circle cx="70" cy="85" r="10" fill="currentColor" />
          <circle cx="130" cy="85" r="10" fill="currentColor" />
          <path
            d="M60 125 Q100 160 140 125"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Texto */}
      <h1 className="text-5xl font-bold text-gray-800 mb-2">404</h1>
      <p className="text-xl text-gray-600 mb-6">Oops... página no encontrada</p>

      {/* Botón */}
      <Link
        to="/"
        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg shadow-md transition-all"
      >
        Volver al inicio
      </Link>

      {/* Mensaje adicional */}
      <p className="mt-4 text-gray-500 text-sm">
        Si crees que esto es un error, contáctanos ✨
      </p>
    </div>
  );
}
