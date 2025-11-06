import React from "react";
import { Link } from "react-router-dom";
import { Moon, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-white text-[#2E2E2E] text-center px-6 overflow-hidden">
      {/* Efectos decorativos suaves */}
      <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-[#90B29E]/15 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#FFF4C7]/25 blur-3xl" />

      {/* Ícono superior */}
      <div className="flex justify-center mb-8 relative z-10">
        <Moon className="w-14 h-14 text-[#90B29E]" />
      </div>

      {/* Título */}
      <h1 className="text-6xl md:text-7xl font-bold mb-4 text-[#2E2E2E] tracking-tight">
        404
      </h1>

      {/* Subtítulo */}
      <p className="text-lg md:text-xl text-[#4A4A4A] mb-10 max-w-md leading-relaxed">
        Oh... parece que te has perdido entre las estrellas 🌙  
        <span className="text-[#90B29E] font-medium">
          No encontramos esta constelación.
        </span>
      </p>

      {/* Botón */}
      <Link
        to="/"
        className="rounded-2xl px-8 py-4 text-lg font-semibold shadow-md bg-[#90B29E] text-[#FFF4C7] hover:bg-[#7EA18E] focus:outline-none focus:ring-2 focus:ring-[#CBAF87] transition"
      >
        Volver al inicio
      </Link>

      {/* Mensaje adicional */}
      <div className="mt-10 flex items-center justify-center gap-2 text-[#6B6B6B] text-sm">
        <Sparkles className="w-4 h-4 text-[#CBAF87]" />
        <span>Tu viaje continúa, solo hay que mirar hacia el cielo correcto.</span>
      </div>
    </section>
  );
}


