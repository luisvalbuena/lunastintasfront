import { motion } from "framer-motion";
import { Stars, MoonStar, Heart, Telescope } from "lucide-react";

export default function QueRevelaraTuCielo() {
  const features = [
    {
      icon: <MoonStar className="w-8 h-8 text-purple-300" />,
      title: "Tu energía esencial",
      desc: "Comprende la esencia que guía tu vida y tu propósito profundo desde el mapa astral clásico.",
    },
    {
      icon: <Telescope className="w-8 h-8 text-purple-300" />,
      title: "Movimientos planetarios",
      desc: "Descubre cómo la danza de los planetas influye en tu carácter, decisiones y destino personal.",
    },
    {
      icon: <Stars className="w-8 h-8 text-purple-300" />,
      title: "Armonías y desafíos",
      desc: "Identifica tus talentos naturales y los aprendizajes que tu alma eligió para evolucionar.",
    },
    {
      icon: <Heart className="w-8 h-8 text-purple-300" />,
      title: "Guía para tu camino",
      desc: "Recibe una lectura cálida y humana, con consejos prácticos y espirituales para tu presente.",
    },
  ];

  return (
    <section className="py-24 bg-indigo-950 text-purple-100 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/40 to-transparent blur-2xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">
          Qué revelará tu cielo
        </h2>
        <p className="text-lg text-purple-200 max-w-2xl mx-auto mb-16">
          Tu carta astral es un espejo del alma. Aquí conocerás los mensajes que el universo sembró en ti al nacer.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-indigo-900/40 p-8 rounded-2xl border border-indigo-800/50 backdrop-blur-sm hover:bg-indigo-900/60 transition shadow-xl"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-purple-200">{feature.title}</h3>
              <p className="text-sm text-purple-300">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
