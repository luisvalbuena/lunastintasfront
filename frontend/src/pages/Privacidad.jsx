import React from "react";
import { Link } from "react-router-dom";
import { Shield, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Privacidad() {
  return (
    <section className="relative min-h-screen bg-white text-[#2E2E2E] overflow-hidden">
      {/* Halos decorativos */}
      <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-[#90B29E]/15 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#FFF4C7]/25 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl mx-auto px-6 py-16"
      >
        {/* Encabezado */}
        <div className="text-center mb-14">
          <div className="flex justify-center mb-4">
            <Shield className="w-12 h-12 text-[#90B29E]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">
            Política de <span className="text-[#90B29E]">Privacidad</span>
          </h1>
          <p className="text-sm text-[#6B6B6B] mt-2">
            Última actualización: <span className="text-[#CBAF87]">04/11/2025</span>
          </p>
        </div>

        {/* Contenido */}
        <div className="space-y-10">
          {/* Intro */}
          <section className="bg-[#FFF4C7]/40 border border-[#90B29E]/20 rounded-3xl p-8 shadow-sm">
            <p className="text-[#4A4A4A] leading-relaxed">
              En <span className="font-semibold text-[#90B29E]">Lunas Tintas</span> respetamos tu
              privacidad y protegemos tus datos conforme al{" "}
              <span className="font-medium text-[#CBAF87]">
                Reglamento General de Protección de Datos (RGPD)
              </span>{" "}
              y la normativa vigente.
            </p>
          </section>

          {/* 1. Datos recogidos */}
          <section className="bg-[#FFF4C7]/30 border border-[#90B29E]/20 rounded-3xl p-8 shadow-sm">
            <h2 className="text-xl font-bold mb-3 text-[#2E2E2E]">
              1. Datos que recogemos
            </h2>
            <ul className="list-disc pl-6 text-[#4A4A4A] space-y-2">
              <li>Nombre completo</li>
              <li>Email</li>
              <li>Teléfono (opcional)</li>
              <li>Fecha, hora y lugar de nacimiento</li>
              <li>Notas que nos compartas voluntariamente</li>
              <li>Datos técnicos básicos (cookies y analítica anónima)</li>
            </ul>
          </section>

          {/* 2. Uso */}
          <section className="bg-[#FFF4C7]/40 border border-[#90B29E]/20 rounded-3xl p-8 shadow-sm">
            <h2 className="text-xl font-bold mb-3 text-[#2E2E2E]">
              2. Para qué usamos tus datos
            </h2>
            <ul className="list-disc pl-6 text-[#4A4A4A] space-y-2">
              <li>Gestionar tus reservas o solicitudes</li>
              <li>Preparar y enviar cartas astrales personalizadas</li>
              <li>Responder tus consultas o mensajes</li>
              <li>Mejorar nuestra atención y servicio</li>
              <li>Comunicaciones estrictamente relacionadas con tu lectura</li>
            </ul>
          </section>

          {/* 3. Base legal */}
          <section className="bg-[#FFF4C7]/30 border border-[#90B29E]/20 rounded-3xl p-8 shadow-sm">
            <h2 className="text-xl font-bold mb-3 text-[#2E2E2E]">
              3. Base legal del tratamiento
            </h2>
            <ul className="list-disc pl-6 text-[#4A4A4A] space-y-2">
              <li>Tu consentimiento explícito</li>
              <li>La ejecución del servicio solicitado</li>
              <li>Interés legítimo en la mejora continua del servicio</li>
            </ul>
          </section>

          {/* 4. Cookies */}
          <section className="bg-[#FFF4C7]/40 border border-[#90B29E]/20 rounded-3xl p-8 shadow-sm">
            <h2 className="text-xl font-bold mb-3 text-[#2E2E2E]">4. Cookies 🍪</h2>
            <p className="text-[#4A4A4A]">
              Usamos cookies esenciales y de análisis anónimo para mejorar tu experiencia.  
              Puedes gestionar tus preferencias cuando lo desees.
            </p>
            <Link
              to="/"
              className="text-[#90B29E] underline hover:text-[#7EA18E] text-sm mt-2 inline-block transition"
            >
              Volver a configuración de cookies
            </Link>
          </section>

          {/* 5. Almacenamiento */}
          <section className="bg-[#FFF4C7]/30 border border-[#90B29E]/20 rounded-3xl p-8 shadow-sm">
            <h2 className="text-xl font-bold mb-3 text-[#2E2E2E]">
              5. Tiempo de conservación
            </h2>
            <p className="text-[#4A4A4A]">
              Conservamos tus datos solo el tiempo necesario para ofrecerte el servicio y cumplir
              con nuestras obligaciones legales. Puedes solicitar su eliminación en cualquier momento.
            </p>
          </section>

          {/* 6. Terceros */}
          <section className="bg-[#FFF4C7]/40 border border-[#90B29E]/20 rounded-3xl p-8 shadow-sm">
            <h2 className="text-xl font-bold mb-3 text-[#2E2E2E]">
              6. Compartición de datos
            </h2>
            <p className="text-[#4A4A4A]">
              No vendemos tus datos. Solo trabajamos con servicios externos seguros (como hosting o correo) bajo contrato y
              estrictas medidas de confidencialidad.
            </p>
          </section>

          {/* 7. Derechos */}
          <section className="bg-[#FFF4C7]/30 border border-[#90B29E]/20 rounded-3xl p-8 shadow-sm">
            <h2 className="text-xl font-bold mb-3 text-[#2E2E2E]">7. Tus derechos</h2>
            <p className="text-[#4A4A4A] mb-3">
              Puedes ejercer tus derechos de protección de datos en cualquier momento:
            </p>
            <ul className="list-disc pl-6 text-[#4A4A4A] space-y-2">
              <li>Acceso, rectificación y eliminación</li>
              <li>Limitación u oposición al tratamiento</li>
              <li>Portabilidad de tus datos</li>
              <li>Retirada del consentimiento</li>
            </ul>
          </section>

          {/* 8. Contacto */}
          <section className="bg-[#FFF4C7]/40 border border-[#90B29E]/20 rounded-3xl p-8 shadow-sm">
            <h2 className="text-xl font-bold mb-3 text-[#2E2E2E]">8. Contacto</h2>
            <p className="text-[#4A4A4A]">
              Si tienes consultas o deseas ejercer tus derechos, escríbenos a:{" "}
              <a
                href="mailto:contacto@lunastintas.com"
                className="text-[#90B29E] underline hover:text-[#7EA18E] font-medium"
              >
                contacto@lunastintas.com
              </a>
            </p>
          </section>

          {/* CTA final */}
          <div className="text-center mt-12">
            <Link
              to="/"
              className="rounded-2xl px-8 py-4 text-lg font-semibold shadow-md bg-[#90B29E] text-[#FFF4C7] hover:bg-[#7EA18E] focus:outline-none focus:ring-2 focus:ring-[#CBAF87] transition"
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

