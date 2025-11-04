import React from "react";
import { Link } from "react-router-dom";

export default function Terminos() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <h1 className="text-3xl font-extrabold text-gray-900">Términos y Condiciones</h1>
          <p className="text-sm text-gray-500 mt-1">Última actualización: 04/11/2025</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-10">
        {/* Intro */}
        <div className="bg-white rounded-xl shadow-sm p-6 border mb-8">
          <p className="text-gray-700">
            Bienvenido/a a <span className="font-semibold">[Nombre Comercial] {/* TODO: tu marca */}</span>.
            Estos Términos y Condiciones (“Términos”) regulan el acceso y uso del sitio web, así
            como de los servicios de <span className="font-medium">reservas</span> y solicitudes de{" "}
            <span className="font-medium">carta astral</span> (“Auto”). Al utilizar nuestros
            servicios, aceptas estos Términos.
          </p>
        </div>

        {/* Index */}
        <nav className="bg-white rounded-xl shadow-sm p-6 border mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Contenido</h2>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-sm text-purple-700">
            <li><a href="#aceptacion" className="hover:underline">1. Aceptación</a></li>
            <li><a href="#servicios" className="hover:underline">2. Servicios</a></li>
            <li><a href="#cuentas" className="hover:underline">3. Cuentas y Acceso</a></li>
            <li><a href="#reservas" className="hover:underline">4. Reservas</a></li>
            <li><a href="#auto" className="hover:underline">5. Cartas Astrales (Auto)</a></li>
            <li><a href="#pagos" className="hover:underline">6. Pagos y Facturación</a></li>
            <li><a href="#cancelaciones" className="hover:underline">7. Cancelaciones y Reembolsos</a></li>
            <li><a href="#privacidad" className="hover:underline">8. Privacidad y Datos</a></li>
            <li><a href="#propiedad" className="hover:underline">9. Propiedad Intelectual</a></li>
            <li><a href="#conducta" className="hover:underline">10. Conducta del Usuario</a></li>
            <li><a href="#responsabilidad" className="hover:underline">11. Responsabilidad</a></li>
            <li><a href="#menores" className="hover:underline">12. Menores de Edad</a></li>
            <li><a href="#jurisdiccion" className="hover:underline">13. Ley Aplicable</a></li>
            <li><a href="#cambios" className="hover:underline">14. Cambios en los Términos</a></li>
            <li><a href="#contacto" className="hover:underline">15. Contacto</a></li>
          </ul>
        </nav>

        {/* Sections */}
        <section id="aceptacion" className="bg-white rounded-xl shadow-sm p-6 border mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">1. Aceptación</h3>
          <p className="text-gray-700">
            Al acceder o utilizar el sitio y los servicios, confirmas que has leído y aceptas estos
            Términos. Si no estás de acuerdo, no utilices el sitio ni los servicios.
          </p>
        </section>

        <section id="servicios" className="bg-white rounded-xl shadow-sm p-6 border mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">2. Servicios</h3>
          <p className="text-gray-700">
            Ofrecemos (i) sistema de <span className="font-medium">reservas</span> para sesiones y
            (ii) gestión de <span className="font-medium">solicitudes de carta astral (Auto)</span>.
            Las características pueden cambiar o actualizarse en cualquier momento.
          </p>
        </section>

        <section id="cuentas" className="bg-white rounded-xl shadow-sm p-6 border mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">3. Cuentas y Acceso</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Eres responsable de mantener la confidencialidad de tus credenciales.</li>
            <li>Podemos suspender o cancelar el acceso por uso indebido o incumplimiento.</li>
            <li>Debes proporcionar información verídica y mantenerla actualizada.</li>
          </ul>
        </section>

        <section id="reservas" className="bg-white rounded-xl shadow-sm p-6 border mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">4. Reservas</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Las reservas están sujetas a disponibilidad y confirmación.</li>
            <li>Los horarios mostrados pueden variar por zona horaria u operativa.</li>
            <li>Nos reservamos el derecho de reprogramar por causas de fuerza mayor.</li>
          </ul>
        </section>

        <section id="auto" className="bg-white rounded-xl shadow-sm p-6 border mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">5. Cartas Astrales (Auto)</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>El usuario debe proporcionar <span className="font-medium">fecha</span>, <span className="font-medium">hora</span> y <span className="font-medium">lugar de nacimiento</span> exactos.</li>
            <li>Si la hora no es precisa, los resultados (ascendente/casas) pueden variar.</li>
            <li>El servicio es de orientación; no sustituye asesoramiento profesional (médico, legal, financiero, etc.).</li>
          </ul>
        </section>

        <section id="pagos" className="bg-white rounded-xl shadow-sm p-6 border mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">6. Pagos y Facturación</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Los precios se muestran en la moneda indicada e incluyen/excluyen impuestos según se indique.</li>
            <li>El pago debe completarse para confirmar el servicio, salvo acuerdo expreso.</li>
            <li>Podemos actualizar precios y condiciones de pago con efecto futuro.</li>
          </ul>
        </section>

        <section id="cancelaciones" className="bg-white rounded-xl shadow-sm p-6 border mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">7. Cancelaciones y Reembolsos</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Las cancelaciones deben solicitarse con la antelación indicada en la política vigente.</li>
            <li>Los reembolsos, cuando apliquen, se procesarán por el mismo método de pago.</li>
            <li>Los servicios ya prestados o contenidos digitales entregados pueden no ser reembolsables.</li>
          </ul>
        </section>

        <section id="privacidad" className="bg-white rounded-xl shadow-sm p-6 border mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">8. Privacidad y Datos</h3>
          <p className="text-gray-700 mb-2">
            Tratamos los datos conforme a nuestra Política de Privacidad. Al usar el servicio, consientes
            el tratamiento de tus datos (incluyendo datos necesarios para cartas astrales).
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Datos proporcionados: nombre, email, fecha/hora/lugar de nacimiento, notas.</li>
            <li>Uso: gestionar reservas, preparar cartas astrales, comunicaciones relacionadas.</li>
            <li>Derechos: acceso, rectificación, supresión y demás, según la normativa aplicable.</li>
          </ul>
        </section>

        <section id="propiedad" className="bg-white rounded-xl shadow-sm p-6 border mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">9. Propiedad Intelectual</h3>
          <p className="text-gray-700">
            El contenido del sitio, marcas, diseños, textos e informes generados están protegidos por
            derechos de propiedad intelectual. No se permite su reproducción sin autorización.
          </p>
        </section>

        <section id="conducta" className="bg-white rounded-xl shadow-sm p-6 border mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">10. Conducta del Usuario</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>No uses el servicio para actividades ilegales o que infrinjan derechos de terceros.</li>
            <li>No intentes acceder sin autorización a sistemas o datos.</li>
            <li>Proporciona información veraz y actualizada.</li>
          </ul>
        </section>

        <section id="responsabilidad" className="bg-white rounded-xl shadow-sm p-6 border mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">11. Limitación de Responsabilidad</h3>
          <p className="text-gray-700">
            Dentro de los máximos permitidos por ley, <span className="font-semibold">[Nombre Comercial]</span>{" "}
            no será responsable por daños indirectos, incidentales o consecuentes derivados del uso del servicio.
            El servicio se ofrece “tal cual” y “según disponibilidad”.
          </p>
        </section>

        <section id="menores" className="bg-white rounded-xl shadow-sm p-6 border mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">12. Menores de Edad</h3>
          <p className="text-gray-700">
            El uso del servicio por menores requiere consentimiento y supervisión de sus tutores legales.
          </p>
        </section>

        <section id="jurisdiccion" className="bg-white rounded-xl shadow-sm p-6 border mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">13. Ley Aplicable y Jurisdicción</h3>
          <p className="text-gray-700">
            Estos Términos se rigen por las leyes de <span className="font-semibold">[País/Estado] {/* TODO */}</span>.
            Cualquier disputa se someterá a los tribunales de <span className="font-semibold">[Ciudad] {/* TODO */}</span>,
            salvo norma imperativa en contrario.
          </p>
        </section>

        <section id="cambios" className="bg-white rounded-xl shadow-sm p-6 border mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">14. Cambios en los Términos</h3>
          <p className="text-gray-700">
            Podemos actualizar estos Términos en cualquier momento con efectos futuros. Te notificaremos cambios
            relevantes por medios razonables. El uso continuado implica aceptación.
          </p>
        </section>

        <section id="contacto" className="bg-white rounded-xl shadow-sm p-6 border">
          <h3 className="text-xl font-bold text-gray-900 mb-3">15. Contacto</h3>
          <p className="text-gray-700">
            Si tienes preguntas, contáctanos en{" "}
            <a href="mailto:contacto@tu-dominio.com" className="text-purple-700 underline">
              contacto@tu-dominio.com
            </a>{" "}
            o por correo postal a{" "}
            <span className="font-medium">[Dirección completa] {/* TODO */}</span>.
          </p>
          <div className="mt-6">
            <Link
              to="/"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg shadow-md transition-all"
            >
              Volver al inicio
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

