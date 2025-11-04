import React from "react";
import { Link } from "react-router-dom";

export default function Privacidad() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Política de Privacidad
          </h1>
          <p className="text-sm text-gray-500 mt-1">Última actualización: 04/11/2025</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-10 space-y-8">

        <section className="bg-white rounded-xl shadow-sm p-6 border">
          <p className="text-gray-700">
            En <span className="font-semibold">[NOMBRE DEL SITIO]</span> respetamos tu privacidad y
            nos comprometemos a proteger tus datos personales conforme al 
            <span className="font-medium"> Reglamento General de Protección de Datos (RGPD)</span>
            y las leyes aplicables.
          </p>
        </section>

        {/* Qué datos recogemos */}
        <section className="bg-white rounded-xl shadow-sm p-6 border">
          <h2 className="text-xl font-bold text-gray-900 mb-3">1. Datos que recogemos</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Nombre completo</li>
            <li>Email</li>
            <li>Teléfono (opcional)</li>
            <li>Fecha, hora y lugar de nacimiento (para la carta astral)</li>
            <li>Notas que nos proporciones voluntariamente</li>
            <li>Datos técnicos — cookies y analítica básica</li>
          </ul>
        </section>

        {/* Uso de los datos */}
        <section className="bg-white rounded-xl shadow-sm p-6 border">
          <h2 className="text-xl font-bold text-gray-900 mb-3">2. Para qué usamos tus datos</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Gestionar reservas</li>
            <li>Preparar y enviar cartas astrales</li>
            <li>Mejorar nuestros servicios y experiencia de usuario</li>
            <li>Responder consultas y soporte</li>
            <li>Comunicaciones relacionadas con el servicio</li>
          </ul>
        </section>

        {/* Base legal */}
        <section className="bg-white rounded-xl shadow-sm p-6 border">
          <h2 className="text-xl font-bold text-gray-900 mb-3">3. Base legal</h2>
          <p className="text-gray-700">
            Tratamos tus datos bajo las bases de:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
            <li>Consentimiento explícito</li>
            <li>Ejecución de contrato (servicio solicitado)</li>
            <li>Interés legítimo para mejora de servicio (analítica anónima)</li>
          </ul>
        </section>

        {/* Cookies */}
        <section className="bg-white rounded-xl shadow-sm p-6 border">
          <h2 className="text-xl font-bold text-gray-900 mb-3">4. Cookies 🍪</h2>
          <p className="text-gray-700">
            Utilizamos cookies esenciales y opcionales para mejorar tu experiencia.  
            Puedes administrar tus preferencias en cualquier momento.
          </p>
          <Link className="text-purple-600 underline text-sm mt-2 inline-block" to="/">
            Volver a configuración de cookies
          </Link>
        </section>

        {/* Almacenamiento */}
        <section className="bg-white rounded-xl shadow-sm p-6 border">
          <h2 className="text-xl font-bold text-gray-900 mb-3">5. Tiempo de conservación</h2>
          <p className="text-gray-700">
            Conservamos tus datos el tiempo necesario para ofrecer el servicio
            y cumplir obligaciones legales. Puedes solicitarnos su eliminación.
          </p>
        </section>

        {/* Terceros */}
        <section className="bg-white rounded-xl shadow-sm p-6 border">
          <h2 className="text-xl font-bold text-gray-900 mb-3">6. Compartición de datos</h2>
          <p className="text-gray-700">
            No vendemos tus datos.  
            Solo compartimos con servicios externos esenciales (ej: hosting seguro) bajo contrato.
          </p>
        </section>

        {/* Derechos */}
        <section className="bg-white rounded-xl shadow-sm p-6 border">
          <h2 className="text-xl font-bold text-gray-900 mb-3">7. Tus derechos</h2>
          <p className="text-gray-700 mb-2">Puedes solicitar en cualquier momento:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Acceso a tus datos</li>
            <li>Rectificación</li>
            <li>Eliminación (derecho al olvido)</li>
            <li>Limitación u oposición al tratamiento</li>
            <li>Portabilidad de datos</li>
            <li>Retirar el consentimiento</li>
          </ul>
        </section>

        {/* Contacto */}
        <section className="bg-white rounded-xl shadow-sm p-6 border">
          <h2 className="text-xl font-bold text-gray-900 mb-3">8. Contacto</h2>
          <p className="text-gray-700">
            Para ejercer tus derechos o consultas, escríbenos a:  
            <a className="text-purple-600 underline font-medium">tu-email@dominio.com</a>
          </p>
        </section>

        {/* Footer */}
        <div className="text-center mt-6">
          <Link
            to="/"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg shadow-md transition-all"
          >
            Volver al inicio
          </Link>
        </div>
      </main>
    </div>
  );
}
