import { motion } from "framer-motion";
import { Heart, Stars } from "lucide-react";

export default function AboutMe() {
  return (
    <section className="py-24 bg-indigo-950 text-purple-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/40 to-transparent blur-2xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto px-6"
      >
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">
          Sobre mí
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Foto */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border border-purple-400/30">
              <img
                src="/miriam.jpg" // Cambia por la ruta correcta
                alt="Miriam Valbuena"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent" />
            </div>
          </div>

          {/* Texto */}
          <div className="bg-indigo-900/40 border border-indigo-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-xl">
            <p className="text-lg text-purple-200 leading-relaxed mb-6">
              Soy <span className="font-semibold text-purple-100">Miriam Valbuena</span>, astróloga especializada en Carta Astral. Mi misión es acompañarte a descubrir la voz de tu cielo interior y la sabiduría que te habita desde tu nacimiento.
            </p>

            <p className="text-lg text-purple-200 leading-relaxed mb-6">
              En un momento donde muchas lecturas se vuelven automáticas y distantes, yo elijo un camino diferente: la <span className="font-semibold text-purple-100">presencia humana</span>, la escucha profunda y el encuentro auténtico.
            </p>

            <div className="flex items-center gap-3 text-purple-300 mb-3">
              <Heart className="w-5 h-5" />
              <span>Lecturas sensibles, humanas y honestas</span>
            </div>
            <div className="flex items-center gap-3 text-purple-300 mb-6">
              <Stars className="w-5 h-5" />
              <span>Astrología tradicional con alma</span>
            </div>

            <p className="text-lg text-purple-200 leading-relaxed">
              Cada carta es única, como tú. No uso sistemas automáticos ni intérpretes mecánicos. Te leo desde el corazón, con dedicación, como mereces.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}