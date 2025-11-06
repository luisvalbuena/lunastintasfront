import { motion } from "framer-motion";
import { Sparkles, Moon, Flame, Eye, Heart } from "lucide-react";

export default function RitualDeLectura() {
  const pasos = [
    {
      icon: <Moon className="w-7 h-7 text-[#90B29E]" />,
      title: "Apertura del espacio sagrado",
      desc: "Respiro, centro mi energía y te recibo. Creo un umbral entre cielo y tierra para comenzar la lectura.",
    },
    {
      icon: <Sparkles className="w-7 h-7 text-[#90B29E]" />,
      title: "Invocación de tu cielo",
      desc: "Traigo tu carta natal a presencia: fecha, hora y lugar. Invoco el cielo exacto que te vio nacer.",
    },
    {
      icon: <Eye className="w-7 h-7 text-[#90B29E]" />,
      title: "Escucha simbólica",
      desc: "Observo las posiciones, escucho los arquetipos y los patrones que emergen. Leo más allá del mapa.",
    },
    {
      icon: <Flame className="w-7 h-7 text-[#90B29E]" />,
      title: "Revelación e intuición",
      desc: "Permito que la intuición y la tradición trabajen juntas. Lo que quiere ser dicho se ilumina.",
    },
    {
      icon: <Heart className="w-7 h-7 text-[#90B29E]" />,
      title: "Entrega del mensaje",
      desc: "Te devuelvo lo recibido con claridad, ternura y verdad: lo que tu cielo desea recordarte.",
    },
  ];

  return (
    <section className="py-28 bg-white text-[#2E2E2E] relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl mx-auto px-6"
      >
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-4 text-[#2E2E2E]">
          Ritual de <span className="text-[#90B29E]">lectura</span>
        </h2>
        <p className="text-center text-lg text-[#4A4A4A] mb-16 max-w-xl mx-auto leading-relaxed">
          Un recorrido íntimo y ceremonial para escuchar tu cielo. Paso a paso, con reverencia.
        </p>

        <div className="relative border-l-2 border-[#90B29E]/50 ml-4">
          {pasos.map((paso, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative pl-10 pb-12"
            >
              {/* Icono de paso */}
              <div className="absolute -left-[13px] top-1 w-6 h-6 rounded-full bg-[#FFF4C7] border border-[#90B29E]/60 shadow-sm flex items-center justify-center">
                {paso.icon}
              </div>

              {/* Título y descripción */}
              <h3 className="text-xl font-semibold text-[#2E2E2E] mb-1">
                {paso.title}
              </h3>
              <p className="text-sm text-[#4A4A4A] leading-relaxed">{paso.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Botón al final con verde + beige */}
        <div className="mt-16 text-center">
          <button className="px-8 py-5 rounded-2xl bg-[#90B29E] text-[#FFF4C7] hover:bg-[#7EA18E] transition font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-[#CBAF87] text-sm">
            Iniciar tu ritual de lectura
          </button>
        </div>
      </motion.div>
    </section>
  );
}
