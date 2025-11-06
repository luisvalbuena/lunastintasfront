import { motion } from "framer-motion";
import { Heart, Stars } from "lucide-react";
import mimi from "../../../assets/mimi.PNG"; // ✅ Importamos la imagen correctamente

export default function AboutMe() {
  return (
    <section className="relative py-28 bg-white text-[#2E2E2E]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative max-w-6xl mx-auto px-6"
      >
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-16 text-[#2E2E2E]">
          Sobre mí
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Foto */}
          <div className="flex justify-center">
            <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem] rounded-full overflow-hidden shadow-2xl border border-[#90B29E]/40 bg-[#FFF4C7]/10">
              <img
                src={mimi}
                alt="Miriam Valbuena"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Texto */}
          <div className="rounded-3xl p-8 md:p-10 shadow-md border border-[#90B29E]/20 bg-[#FFF4C7]/30 backdrop-blur-sm">
            <p className="text-lg text-[#4A4A4A] leading-relaxed mb-6">
              Soy{" "}
              <span className="font-semibold text-[#90B29E]">
                Miriam Valbuena
              </span>
              , astróloga especializada en Carta Astral. Mi misión es acompañarte
              a descubrir la voz de tu cielo interior y la sabiduría que te
              habita desde tu nacimiento.
            </p>

            <p className="text-lg text-[#4A4A4A] leading-relaxed mb-6">
              En un momento donde muchas lecturas se vuelven automáticas y
              distantes, yo elijo un camino diferente: la{" "}
              <span className="font-semibold text-[#90B29E]">
                presencia humana
              </span>
              , la escucha profunda y el encuentro auténtico.
            </p>

            <div className="flex items-center gap-3 text-[#90B29E] mb-3">
              <Heart className="w-5 h-5 text-[#CBAF87]" />
              <span>Lecturas sensibles, humanas y honestas</span>
            </div>

            <div className="flex items-center gap-3 text-[#90B29E] mb-6">
              <Stars className="w-5 h-5 text-[#CBAF87]" />
              <span>Astrología tradicional con alma</span>
            </div>

            <p className="text-lg text-[#4A4A4A] leading-relaxed">
              Cada carta es única, como tú. No uso sistemas automáticos ni
              intérpretes mecánicos. Te leo desde el corazón, con dedicación,
              como mereces.
            </p>

            {/* Botón */}
            <div className="mt-10">
              <button
                type="button"
                className="rounded-2xl px-8 py-4 text-lg font-semibold shadow-md bg-[#90B29E] text-[#FFF4C7] hover:bg-[#7EA18E] focus:outline-none focus:ring-2 focus:ring-[#CBAF87] transition"
              >
                Reserva tu lectura
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}


