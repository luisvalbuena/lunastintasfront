import { motion } from "framer-motion";
import { Video, PenLine, Sun, Moon } from "lucide-react";

export default function ServiciosAstrologicos() {
  const servicios = [
    {
      id: "premium",
      icon: <Video className="w-10 h-10 text-pink-200" />,
      title: "Encuentro Sagrado en Vivo",
      tagline: "Un espacio íntimo, guiado por presencia y escucha",
      desc: "Una lectura profunda y humana, en videollamada. Exploramos tu mapa natal en tiempo real, respondiendo dudas y abriendo puertas a tu propósito.",
      cta: "Agendar Encuentro",
      highlight: "Encuentro Sagrado",
      style: "from-purple-500/30 to-pink-500/30",
    },
    {
      id: "gratuita",
      icon: <PenLine className="w-10 h-10 text-purple-200" />,
      title: "Mensaje del Cielo por Escrito",
      tagline: "Recibe palabras guiadas por tu cielo natal",
      desc: "Recibe una interpretación escrita de tu carta natal. Forma sencilla y generosa de acercarte a tu universo personal.",
      cta: "Recibir Mensaje",
      highlight: "Mensaje Escrito",
      style: "from-indigo-500/20 to-purple-500/20",
    },
  ];

  return (
    <section className="relative py-28 bg-indigo-950 text-purple-100 overflow-hidden">
      {/* ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/40 to-transparent blur-2xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Dual sun/moon header */}
        <div className="flex items-center justify-center gap-4 mb-10 opacity-80">
          <Sun className="w-6 h-6 text-yellow-200" />
          <span className="text-sm tracking-widest uppercase text-purple-300">Dos Caminos para Escuchar tu Cielo</span>
          <Moon className="w-6 h-6 text-blue-200" />
        </div>

        <h2 className="text-center text-4xl md:text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">
          Elige cómo deseas recibir tu lectura
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {servicios.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`relative p-10 rounded-3xl border border-indigo-800/50 backdrop-blur-md bg-gradient-to-br ${s.style} shadow-xl hover:shadow-2xl transition`}
            >
              <div className="absolute -top-4 right-4 bg-purple-600/40 text-xs px-3 py-1 rounded-full backdrop-blur-sm border border-purple-500/40 font-medium">
                {s.highlight}
              </div>

              <div className="mb-6 flex items-center justify-center">{s.icon}</div>

              <h3 className="text-2xl font-semibold text-purple-200 mb-1 text-center">
                {s.title}
              </h3>
              <p className="text-sm text-purple-300 mb-6 text-center italic">{s.tagline}</p>

              <p className="text-purple-200 text-sm leading-relaxed mb-8 text-center">
                {s.desc}
              </p>

              <div className="flex justify-center">
                <button className="px-6 py-3 rounded-xl bg-purple-600/80 hover:bg-purple-700 transition font-medium text-sm shadow-lg backdrop-blur-sm">
                  {s.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
