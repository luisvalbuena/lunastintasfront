import { motion } from "framer-motion";
import { MoonStar, Heart, Telescope } from "lucide-react";
import img1 from "../../../assets/01.jpg";
import img2 from "../../../assets/02.jpg";
import img3 from "../../../assets/03.jpg";

export default function QueRevelaraTuCielo() {
  const features = [
    {
      icon: <MoonStar className="w-8 h-8 text-[#90B29E]" />,
      title: "Tu energía esencial",
      desc: "Comprende la esencia que guía tu vida y tu propósito profundo desde el mapa astral clásico.",
      img: img1,
    },
    {
      icon: <Telescope className="w-8 h-8 text-[#90B29E]" />,
      title: "Movimientos planetarios",
      desc: "Descubre cómo la danza de los planetas influye en tu carácter, decisiones y destino personal.",
      img: img2,
    },
    {
      icon: <Heart className="w-8 h-8 text-[#90B29E]" />,
      title: "Guía para tu camino",
      desc: "Recibe una lectura cálida y humana, con consejos prácticos y espirituales para tu presente.",
      img: img3,
    },
  ];

  return (
    <section className="py-24 bg-white text-[#2E2E2E] relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#2E2E2E]">
          Qué revelará tu <span className="text-[#90B29E]">cielo</span>
        </h2>

        <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto mb-16">
          Tu carta astral es un espejo del alma. Aquí conocerás los mensajes que
          el universo sembró en ti al nacer.
        </p>

        <div className="flex flex-col gap-28">
          {features.map((feature, i) => {
            const isReversed = i % 2 !== 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-14 ${
                  isReversed ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Cuadro de imagen */}
                <div className="relative w-full md:w-1/2 flex items-center justify-center">
                  <div className="w-80 h-80 md:w-[26rem] md:h-[26rem] rounded-3xl bg-[#FFF4C7]/70 border border-[#90B29E]/20 shadow-[0_8px_25px_rgba(0,0,0,0.15)] flex items-center justify-center overflow-hidden">
                    <img
                      src={feature.img}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Línea divisoria */}
                  <div
                    className={`absolute ${
                      isReversed
                        ? "left-[-40px] border-l-[3px] border-[#90B29E]/40"
                        : "right-[-40px] border-r-[3px] border-[#90B29E]/40"
                    } h-full hidden md:block`}
                  />
                </div>

                {/* Texto */}
                <div className="w-full md:w-1/2 text-center md:text-left px-4 md:px-8">
                  <div className="flex justify-center md:justify-start mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-[#2E2E2E]">
                    {feature.title}
                  </h3>
                  <p className="text-[#4A4A4A] leading-relaxed text-base">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Botón final */}
        <div className="mt-24">
          <button
            type="button"
            className="rounded-2xl px-8 py-5 text-lg font-semibold shadow-md bg-[#90B29E] text-[#FFF4C7] hover:bg-[#7EA18E] focus:outline-none focus:ring-2 focus:ring-[#CBAF87] transition"
          >
            Descubre tu carta astral
          </button>
        </div>
      </motion.div>
    </section>
  );
}

