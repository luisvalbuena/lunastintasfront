import { motion } from "framer-motion";
import { Sparkles, Moon, Star } from "lucide-react";
import principito from "../../../assets/principito.png"; // ✅ Imagen importada correctamente

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between bg-white text-[#2E2E2E] overflow-hidden px-6 sm:px-10 md:px-16 lg:px-24 pt-24 md:pt-0">
      {/* ==== ILUSTRACIÓN ==== */}
      <div className="flex-1 flex items-center justify-center mb-10 md:mb-0 order-first md:order-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="
            w-64 aspect-square rounded-full overflow-hidden border border-[#90B29E]/30 shadow-lg bg-[#FFF4C7]/40 
            md:w-full md:max-w-md md:rounded-3xl md:aspect-auto md:h-[500px] md:bg-[#FFF4C7]/50 md:shadow-inner
          "
        >
          <img
            src={principito}
            alt="Ilustración del Principito"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* ==== TEXTO ==== */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-center md:text-left max-w-xl"
      >
        {/* Ícono superior */}
        <div className="flex justify-center md:justify-start mb-6">
          <Moon className="w-10 h-10 md:w-12 md:h-12 text-[#90B29E]" />
        </div>

        {/* Título */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#2E2E2E] leading-tight">
          Conecta con tu <span className="text-[#90B29E]">Esencia Lunar</span>
        </h1>

        {/* Descripción */}
        <p className="mt-5 text-base sm:text-lg md:text-xl text-[#4A4A4A] leading-relaxed">
          Una lectura íntima y artesanal para descubrir tu energía cósmica y los
          matices que habitan en tu carta astral.
        </p>

        {/* Botones */}
        <div className="mt-8 md:mt-10 flex flex-wrap items-center justify-center md:justify-start gap-4">
          <button
            type="button"
            className="rounded-2xl px-8 py-4 sm:py-5 text-base sm:text-lg font-semibold shadow-md bg-[#90B29E] text-[#FFF4C7] hover:bg-[#7EA18E] focus:outline-none focus:ring-2 focus:ring-[#CBAF87] transition"
          >
            Comenzar Lectura
          </button>

          <button
            type="button"
            className="rounded-2xl px-8 py-4 sm:py-5 text-base sm:text-lg font-semibold shadow-md bg-[#FFF4C7] text-[#90B29E] border border-[#90B29E]/20 hover:bg-[#F6EBAF] focus:outline-none focus:ring-2 focus:ring-[#CBAF87]/40 transition"
          >
            Ver Ejemplo
          </button>
        </div>

        {/* Características */}
        <div className="mt-10 md:mt-12 flex flex-wrap items-center justify-center md:justify-start gap-3 text-[#6B6B6B] text-sm sm:text-base">
          <Sparkles className="w-4 h-4 text-[#CBAF87]" />
          <span>Astrología artesanal y simbólica</span>
          <Star className="w-4 h-4 text-[#CBAF87]" />
          <span>Guía con alma y propósito</span>
        </div>
      </motion.div>
    </section>
  );
}


