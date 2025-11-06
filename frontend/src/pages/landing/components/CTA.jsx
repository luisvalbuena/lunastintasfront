import { motion } from "framer-motion";
import { Moon, Sparkles } from "lucide-react";

export default function CTAFinal() {
  return (
    <section className="relative py-32 bg-white text-[#2E2E2E] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative z-10 max-w-3xl mx-auto text-center px-6"
      >
        {/* Ícono */}
        <div className="flex justify-center mb-6">
          <Moon className="w-12 h-12 text-[#90B29E]" />
        </div>

        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#2E2E2E]">
          Tu cielo está listo para <span className="text-[#90B29E]">hablarte</span>
        </h2>

        {/* Descripción */}
        <p className="text-lg text-[#4A4A4A] mb-12 max-w-xl mx-auto leading-relaxed">
          Si algo en ti siente el llamado, sigámoslo juntas. Este es tu momento para escuchar la voz de tus estrellas y recordar quién eres.
        </p>

        {/* Botones (verde + beige) */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-5 rounded-2xl bg-[#90B29E] text-[#FFF4C7] hover:bg-[#7EA18E] transition font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-[#CBAF87] text-sm">
            Agendar encuentro sagrado
          </button>
          <button className="px-8 py-5 rounded-2xl bg-[#FFF4C7] text-[#90B29E] border border-[#90B29E]/20 hover:bg-[#F6EBAF] transition font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-[#CBAF87]/40 text-sm">
            Recibir mensaje escrito
          </button>
        </div>

        {/* Línea inferior */}
        <div className="mt-10 flex items-center justify-center gap-2 text-[#6B6B6B] text-sm opacity-80">
          <Sparkles className="w-4 h-4 text-[#CBAF87]" />
          <span>Tu nacimiento fue un portal. Este es otro.</span>
        </div>
      </motion.div>
    </section>
  );
}
