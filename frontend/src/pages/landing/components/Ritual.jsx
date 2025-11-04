import { motion } from "framer-motion";
import { Sparkles, Moon, Flame, Eye, Heart } from "lucide-react";

export default function RitualDeLectura() {
  const pasos = [
    {
      icon: <Moon className="w-7 h-7 text-purple-300" />,
      title: "Apertura del espacio sagrado",
      desc: "Respiro, centro mi energía y te recibo. Creo un umbral entre cielo y tierra para comenzar la lectura.",
    },
    {
      icon: <Sparkles className="w-7 h-7 text-purple-300" />,
      title: "Invocación de tu cielo",
      desc: "Traigo tu carta natal a presencia: fecha, hora y lugar. Invoco el cielo exacto que te vio nacer.",
    },
    {
      icon: <Eye className="w-7 h-7 text-purple-300" />,
      title: "Escucha simbólica",
      desc: "Observo las posiciones, escucho los arquetipos y los patrones que emergen. Leo más allá del mapa.",
    },
    {
      icon: <Flame className="w-7 h-7 text-purple-300" />,
      title: "Revelación e intuición",
      desc: "Permito que la intuición y la tradición trabajen juntas. Lo que quiere ser dicho se ilumina.",
    },
    {
      icon: <Heart className="w-7 h-7 text-purple-300" />,
      title: "Entrega del mensaje",
      desc: "Te devuelvo lo recibido con claridad, ternura y verdad: lo que tu cielo desea recordarte.",
    },
  ];

  return (
    <section className="py-28 bg-indigo-950 text-purple-100 relative overflow-hidden">
      {/* mist */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/40 to-transparent blur-2xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl mx-auto px-6"
      >
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">
          Ritual de lectura
        </h2>
        <p className="text-center text-lg text-purple-200 mb-16 max-w-xl mx-auto">
          Un recorrido íntimo y ceremonial para escuchar tu cielo. Paso a paso, con reverencia.
        </p>

        <div className="relative border-l border-purple-500/30 ml-4">
          {pasos.map((paso, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative pl-10 pb-12"
            >
              <div className="absolute -left-[13px] top-1 w-6 h-6 rounded-full bg-purple-500/50 backdrop-blur shadow-lg flex items-center justify-center">
                {paso.icon}
              </div>
              <h3 className="text-xl font-semibold text-purple-200 mb-1">{paso.title}</h3>
              <p className="text-sm text-purple-300 leading-relaxed">{paso.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}