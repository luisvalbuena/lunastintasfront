import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie } from "lucide-react";

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
      <div className="bg-white/80 backdrop-blur-md border border-[#90B29E]/20 rounded-3xl shadow-xl max-w-md w-full p-8 text-center animate-fadeIn">
        {!showSettings ? (
          <>
            {/* Icono superior */}
            <div className="flex justify-center mb-4">
              <Cookie className="w-10 h-10 text-[#90B29E]" />
            </div>

            {/* Título */}
            <h2 className="text-2xl font-bold text-[#2E2E2E] mb-3">
              Gestión de <span className="text-[#90B29E]">Cookies</span> 🍪
            </h2>

            <p className="text-[#4A4A4A] text-sm mb-6 leading-relaxed">
              Usamos cookies para mejorar tu experiencia, analizar el uso del sitio y ofrecer contenido personalizado.  
              Puedes aceptar todas, rechazar o configurar tus preferencias.
            </p>

            {/* Botones */}
            <div className="flex flex-col gap-3">
              <button
                onClick={handleAcceptAll}
                className="rounded-2xl px-6 py-3 font-semibold shadow-md bg-[#90B29E] text-[#FFF4C7] hover:bg-[#7EA18E] focus:ring-2 focus:ring-[#CBAF87] transition"
              >
                Aceptar todas
              </button>

              <button
                onClick={() => setShowSettings(true)}
                className="rounded-2xl px-6 py-3 font-semibold border border-[#90B29E]/40 text-[#90B29E] bg-[#FFF4C7] hover:bg-[#F6EBAF] transition"
              >
                Configurar cookies
              </button>

              <button
                onClick={handleRejectAll}
                className="rounded-2xl px-6 py-3 font-semibold shadow-sm bg-[#CBAF87]/40 text-[#2E2E2E] hover:bg-[#CBAF87]/60 transition"
              >
                Rechazar
              </button>
            </div>

            <p className="text-xs text-[#6B6B6B] mt-5">
              Puedes leer más en nuestra{" "}
              <Link
                to="/privacidad"
                className="text-[#90B29E] underline hover:text-[#7EA18E]"
              >
                política de privacidad
              </Link>
              .
            </p>
          </>
        ) : (
          <>
            {/* Configuración */}
            <h2 className="text-xl font-bold text-[#2E2E2E] mb-3">
              Configuración de <span className="text-[#90B29E]">Cookies</span> ⚙️
            </h2>

            <p className="text-[#4A4A4A] text-sm mb-6 leading-relaxed">
              Solo permitiremos las cookies esenciales para el funcionamiento correcto del sitio.
            </p>

            <div className="flex flex-col gap-3">
              <button
                onClick={handleAcceptEssential}
                className="rounded-2xl px-6 py-3 font-semibold shadow-md bg-[#90B29E] text-[#FFF4C7] hover:bg-[#7EA18E] transition"
              >
                Guardar configuración
              </button>

              <button
                onClick={() => setShowSettings(false)}
                className="text-sm text-[#90B29E] underline hover:text-[#7EA18E]"
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


