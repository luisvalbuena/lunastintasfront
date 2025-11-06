import { motion } from "framer-motion";
import { Video, PenLine, Sun, Moon, Star, Sparkles } from "lucide-react";

export default function ServiciosAstrologicos() {
  const servicios = [
    {
      id: "carta-revolucion",
      icon: <Star className="w-10 h-10 text-[#90B29E]" />,
      title: "Carta Natal + Revolución Solar",
      tagline: "Una mirada al origen y al ciclo presente",
      desc: "Explora tu mapa natal y cómo se renueva en el año actual. Un viaje profundo que une tus raíces cósmicas con las energías del presente.",
      cta: "Solicitar Lectura",
      highlight: "65 €",
      style: "from-[#FFF4C7]/40 to-[#90B29E]/10",
    },
    {
      id: "talentos",
      icon: <Sparkles className="w-10 h-10 text-[#90B29E]" />,
      title: "Talentos y Habilidades + Presente",
      tagline: "Descubre tu potencial y su movimiento actual",
      desc: "Lectura enfocada en tus dones, habilidades naturales y cómo se activan en este momento vital. Ideal para procesos creativos y profesionales.",
      cta: "Explorar Talentos",
      highlight: "65 €",
      style: "from-[#FFF4C7]/40 to-[#CBAF87]/10",
    },
    {
      id: "carta-natal",
      icon: <Moon className="w-10 h-10 text-[#90B29E]" />,
      title: "Carta Natal",
      tagline: "Tu mapa esencial de vida y energía",
      desc: "Interpretación completa de tu carta natal. Comprende tus patrones, aprendizajes y el propósito que guía tu camino.",
      cta: "Solicitar Carta",
      highlight: "45 €",
      style: "from-[#FFF4C7]/40 to-[#90B29E]/10",
    },
    {
      id: "revolucion-solar",
      icon: <Sun className="w-10 h-10 text-[#90B29E]" />,
      title: "Revolución Solar",
      tagline: "El pulso de tu nuevo ciclo solar",
      desc: "Lectura personalizada para tu año actual. Descubre los temas principales que marcarán tu vuelta al Sol.",
      cta: "Pedir Revolución",
      highlight: "45 €",
      style: "from-[#FFF4C7]/40 to-[#CBAF87]/10",
    },
    {
      id: "videollamada",
      icon: <Video className="w-10 h-10 text-[#90B29E]" />,
      title: "Videollamada Personalizada",
      tagline: "Un espacio íntimo y guiado en tiempo real",
      desc: "Sesión profunda por videollamada. Exploramos juntos tu carta, procesos actuales y caminos de expansión.",
      cta: "Agendar Sesión",
      highlight: "95 €",
      style: "from-[#FFF4C7]/40 to-[#90B29E]/10",
    },
    {
      id: "gratuita",
      icon: <PenLine className="w-10 h-10 text-[#90B29E]" />,
      title: "Carta General Astral",
      tagline: "Una mirada de bienvenida al lenguaje del cielo",
      desc: "Recibe gratuitamente una carta astral general para conocer la energía de tu signo y conectar con la esencia de Lunas Tintas.",
      cta: "Recibir Carta Gratuita",
      highlight: "Gratuita",
      style: "from-[#FFF4C7]/40 to-[#CBAF87]/10",
    },
  ];

  return (
    <section className="relative py-28 bg-white text-[#2E2E2E] overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Encabezado solar/lunar */}
        <div className="flex items-center justify-center gap-4 mb-10 opacity-80">
          <Sun className="w-6 h-6 text-[#CBAF87]" />
          <span className="text-sm tracking-widest uppercase text-[#90B29E]">
            Servicios Astrológicos de Lunas Tintas
          </span>
          <Moon className="w-6 h-6 text-[#CBAF87]" />
        </div>

        <h2 className="text-center text-4xl md:text-5xl font-bold mb-16 text-[#2E2E2E]">
          Elige tu <span className="text-[#90B29E]">camino estelar</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {servicios.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`relative p-10 rounded-3xl border border-[#90B29E]/30 bg-gradient-to-br ${s.style} shadow-md hover:shadow-lg transition`}
            >
              <div className="absolute -top-4 right-4 bg-[#90B29E]/20 text-xs px-3 py-1 rounded-full border border-[#90B29E]/40 font-medium text-[#2E2E2E]">
                {s.highlight}
              </div>

              <div className="mb-6 flex items-center justify-center">{s.icon}</div>

              <h3 className="text-2xl font-semibold text-[#2E2E2E] mb-1 text-center">
                {s.title}
              </h3>
              <p className="text-sm text-[#4A4A4A] mb-6 text-center italic">
                {s.tagline}
              </p>

              <p className="text-[#4A4A4A] text-sm leading-relaxed mb-8 text-center">
                {s.desc}
              </p>

              <div className="flex justify-center">
                <button className="px-6 py-3 rounded-xl bg-[#90B29E] text-[#FFF4C7] hover:bg-[#7EA18E] transition font-medium text-sm shadow-md focus:outline-none focus:ring-2 focus:ring-[#CBAF87]">
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
