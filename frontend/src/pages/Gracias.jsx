import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, Heart } from "lucide-react";

export default function Gracias() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-white text-[#2E2E2E] text-center px-6 overflow-hidden">
      {/* Halos decorativos */}
      <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-[#90B29E]/15 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#FFF4C7]/25 blur-3xl" />

      {/* Icono */}
      <div className="flex justify-center mb-8 relative z-10">
        <Heart className="w-14 h-14 text-[#90B29E]" />
      </div>

      {/* Título */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#2E2E2E] tracking-tight">
        ¡Gracias por tu solicitud!
      </h1>

      {/* Descripción */}
      <p className="text-lg md:text-xl text-[#4A4A4A] max-w-md mb-10 leading-relaxed">
        Hemos recibido tu información 🌙  
        Pronto te escribiremos con los detalles de tu lectura astral personalizada.
      </p>

      {/* Botón principal */}
      <Link
        to="/"
        className="rounded-2xl px-8 py-4 text-lg font-semibold shadow-md bg-[#90B29E] text-[#FFF4C7] hover:bg-[#7EA18E] focus:outline-none focus:ring-2 focus:ring-[#CBAF87] transition"
      >
        Volver al inicio
      </Link>

      {/* Mensaje adicional */}
      <div className="mt-10 flex items-center justify-center gap-2 text-[#6B6B6B] text-sm">
        <Sparkles className="w-4 h-4 text-[#CBAF87]" />
        <span>Gracias por confiar en Lunas Tintas ✨</span>
      </div>
    </section>
  );
}
