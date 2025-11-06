import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Book, Sparkles } from "lucide-react";

export default function Terminos() {
  return (
    <section className="min-h-screen bg-white text-[#2E2E2E] relative overflow-hidden">
      {/* Decoración sutil de fondo */}
      <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-[#90B29E]/15 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#FFF4C7]/25 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl mx-auto px-6 py-16"
      >
        {/* Encabezado */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Book className="w-12 h-12 text-[#90B29E]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Términos y <span className="text-[#90B29E]">Condiciones</span>
          </h1>
          <p className="text-sm text-[#6B6B6B]">
            Última actualización: <span className="text-[#CBAF87]">04/11/2025</span>
          </p>
        </div>

        {/* Contenido */}
        <div className="space-y-10">
          {/* Intro */}
          <section className="bg-[#FFF4C7]/40 border border-[#90B29E]/20 rounded-3xl p-8 shadow-sm">
            <p className="text-[#4A4A4A] leading-relaxed">
              Bienvenido/a a{" "}
              <span className="font-semibold text-[#90B29E]">Lunas Tintas</span>.  
              Estos Términos y Condiciones regulan el acceso y uso del sitio web, así como los
              servicios de <span className="font-medium text-[#90B29E]">reservas</span> y de{" "}
              <span className="font-medium text-[#90B29E]">cartas astrales</span>.  
              Al utilizar nuestros servicios, aceptas estos Términos.
            </p>
          </section>

          {/* Índice */}
          <nav className="bg-[#FFF4C7]/30 border border-[#90B29E]/20 rounded-3xl p-8 shadow-sm">
            <h2 className="text-xl font-semibold mb-3 text-[#2E2E2E]">
              Contenido
            </h2>
            <ul className="grid md:grid-cols-2 gap-x-10 gap-y-2 text-sm">
              {[
                "1. Aceptación",
                "2. Servicios",
                "3. Cuentas y Acceso",
                "4. Reservas",
                "5. Cartas Astrales",
                "6. Pagos y Facturación",
                "7. Cancelaciones y Reembolsos",
                "8. Privacidad y Datos",
                "9. Propiedad Intelectual",
                "10. Conducta del Usuario",
                "11. Responsabilidad",
                "12. Menores de Edad",
                "13. Ley Aplicable",
                "14. Cambios en los Términos",
                "15. Contacto",
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={`#s${i}`}
                    className="text-[#90B29E] hover:text-[#7EA18E] underline-offset-2 hover:underline transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Secciones */}
          {[
            {
              id: "s0",
              title: "1. Aceptación",
              text: `Al acceder o utilizar el sitio y los servicios, confirmas que has leído y aceptas estos Términos. Si no estás de acuerdo, no utilices el sitio ni los servicios.`,
            },
            {
              id: "s1",
              title: "2. Servicios",
              text: `Ofrecemos lecturas astrológicas personalizadas, reservas de sesiones y servicios simbólicos de interpretación astral. Las características pueden actualizarse o modificarse.`,
            },
            {
              id: "s2",
              title: "3. Privacidad y Datos",
              text: `Tratamos tus datos conforme a nuestra Política de Privacidad. Al usar el servicio, consientes su tratamiento con fines de gestión, comunicación y elaboración de tu carta astral.`,
            },
            {
              id: "s3",
              title: "4. Responsabilidad",
              text: `Lunas Tintas no sustituye asesoramiento profesional médico, psicológico, legal ni financiero. Ofrecemos orientación simbólica y espiritual.`,
            },
            {
              id: "s4",
              title: "5. Contacto",
              text: `Si tienes dudas o comentarios, puedes escribirnos a 
              contacto@lunastintas.com o a través de nuestras redes sociales.`,
            },
          ].map((sec) => (
            <section
              key={sec.id}
              id={sec.id}
              className="bg-[#FFF4C7]/40 border border-[#90B29E]/20 rounded-3xl p-8 shadow-sm"
            >
              <h3 className="text-xl font-bold text-[#2E2E2E] mb-3">
                {sec.title}
              </h3>
              <p className="text-[#4A4A4A] leading-relaxed">{sec.text}</p>
            </section>
          ))}

          {/* CTA final */}
          <div className="text-center mt-12">
            <Link
              to="/"
              className="inline-block rounded-2xl px-8 py-4 text-lg font-semibold shadow-md bg-[#90B29E] text-[#FFF4C7] hover:bg-[#7EA18E] focus:outline-none focus:ring-2 focus:ring-[#CBAF87] transition"
            >
              Volver al inicio
            </Link>

            <div className="mt-6 flex items-center justify-center gap-2 text-[#6B6B6B] text-sm">
              <Sparkles className="w-4 h-4 text-[#CBAF87]" />
              <span>Gracias por confiar en Lunas Tintas 🌙</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

