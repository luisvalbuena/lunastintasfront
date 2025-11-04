import React from "react";
import { Link } from "react-router-dom";

export default function Gracias() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-indigo-100 flex flex-col items-center justify-center text-center p-6">

      {/* Icono */}
      <div className="mb-6">
        <svg 
          className="w-24 h-24 text-purple-600"
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M12 2a10 10 0 0110 10v5a3 3 0 01-3 3h-2v-6h2v-2a7 7 0 00-14 0v2h2v6H5a3 3 0 01-3-3v-5A10 10 0 0112 2z"/>
        </svg>
      </div>

      {/* Texto */}
      <h1 className="text-4xl font-bold text-gray-800 mb-3">
        ¡Gracias por tu solicitud!
      </h1>

      <p className="text-lg text-gray-600 max-w-md mb-8">
        Hemos recibido tu información.  
        Pronto recibirás un correo con detalles sobre tu carta astral ✨
      </p>

      {/* Botón */}
      <Link
        to="/"
        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg shadow-md transition-all"
      >
        Volver a la página principal
      </Link>

      <p className="mt-6 text-gray-500 text-sm">
        Si tienes dudas, puedes contactarnos en cualquier momento.
      </p>
    </div>
  );
}
