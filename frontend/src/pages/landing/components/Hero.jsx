import { motion } from "framer-motion";
import { Sparkles, Moon, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-indigo-950 to-indigo-900 text-white">
      {/* Decorative circles */}
      <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-6 max-w-3xl"
      >
        <div className="flex justify-center mb-4">
          <Moon className="w-12 h-12" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">
          Descubre tu Carta Astral
        </h1>
        <p className="mt-4 text-lg md:text-xl text-purple-200">
          Una mirada íntima y tradicional a tu esencia cósmica. Conecta con el universo y entiende tu energía desde la astrología ancestral.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            className="rounded-2xl px-8 py-6 text-lg font-semibold shadow-xl bg-purple-500 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
          >
            Comenzar Lectura
          </button>
          <button
            type="button"
            className="rounded-2xl px-8 py-6 text-lg font-semibold border border-purple-300 text-purple-200 hover:bg-purple-300/20 focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
          >
            Ver Ejemplo
          </button>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-purple-300 text-sm">
          <Sparkles className="w-4 h-4" />
          <span>Lectura astrológica personalizada</span>
          <Star className="w-4 h-4" />
          <span>Estilo cercano y humano</span>
        </div>
      </motion.div>
    </section>
  );
}