import { motion } from "framer-motion";
import { Moon, Sparkles } from "lucide-react";

export default function CTAFinal() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-indigo-950 to-indigo-900 text-purple-100 overflow-hidden">
      {/* Nebula background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,90,255,0.25),transparent_70%)] blur-2xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative z-10 max-w-3xl mx-auto text-center px-6"
      >
        <div className="flex justify-center mb-6">
          <Moon className="w-12 h-12 text-purple-300" />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">
          Tu cielo está listo para hablarte
        </h2>

        <p className="text-lg text-purple-200 mb-12 max-w-xl mx-auto leading-relaxed">
          Si algo en ti siente el llamado, sigámoslo juntas. Este es tu momento para escuchar la voz de tus estrellas y recordar quién eres.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 rounded-2xl bg-purple-600/80 hover:bg-purple-700 transition font-medium shadow-lg backdrop-blur-sm text-sm">
            Agendar encuentro sagrado
          </button>
          <button className="px-8 py-4 rounded-2xl border border-purple-300 text-purple-200 hover:bg-purple-300/20 transition font-medium backdrop-blur-sm text-sm">
            Recibir mensaje escrito
          </button>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-purple-300 text-sm opacity-80">
          <Sparkles className="w-4 h-4" />
          Tu nacimiento fue un portal. Este es otro.
        </div>
      </motion.div>
    </section>
  );
}