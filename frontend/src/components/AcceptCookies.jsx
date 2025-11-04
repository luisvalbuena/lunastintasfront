import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function AcceptCookies() {
  const [open, setOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const localStorageKey = "cookieConsent";

  useEffect(() => {
    const savedConsent = localStorage.getItem(localStorageKey);
    if (!savedConsent) {
      setOpen(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(localStorageKey, "accepted_all");
    setOpen(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem(localStorageKey, "rejected_all");
    setOpen(false);
  };

  const handleAcceptEssential = () => {
    localStorage.setItem(localStorageKey, "essential_only");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white max-w-md w-full rounded-xl shadow-xl p-6 animate-fadeIn">

        {!showSettings ? (
          <>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Gestión de Cookies 🍪
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              Usamos cookies para mejorar tu experiencia, analizar el uso del sitio 
              y ofrecer contenido personalizado. Puedes aceptar todas, rechazar o gestionar tus preferencias.
            </p>

            <div className="flex flex-col gap-3">
              <button
                onClick={handleAcceptAll}
                className="bg-purple-600 text-white w-full py-2 rounded-lg hover:bg-purple-700 transition"
              >
                Aceptar todas
              </button>

              <button
                onClick={() => setShowSettings(true)}
                className="bg-gray-200 text-gray-800 w-full py-2 rounded-lg hover:bg-gray-300 transition"
              >
                Configurar cookies
              </button>

              <button
                onClick={handleRejectAll}
                className="bg-red-500 text-white w-full py-2 rounded-lg hover:bg-red-600 transition"
              >
                Rechazar
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-4">
              Puedes leer más en nuestra{" "}
              <Link to="/privacidad" className="text-purple-600 underline">
                política de privacidad
              </Link>
            </p>
          </>
        ) : (
          <>
            <h2 className="text-lg font-bold text-gray-900 mb-2">
              Configuración de Cookies ⚙️
            </h2>

            <p className="text-gray-600 text-sm mb-4">
              Solo permitiremos las cookies esenciales para el funcionamiento del sitio.
            </p>

            <div className="flex flex-col gap-3">
              <button
                onClick={handleAcceptEssential}
                className="bg-purple-600 text-white w-full py-2 rounded-lg hover:bg-purple-700 transition"
              >
                Guardar configuración
              </button>

              <button
                onClick={() => setShowSettings(false)}
                className="text-gray-600 underline text-sm"
              >
                Volver
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}


