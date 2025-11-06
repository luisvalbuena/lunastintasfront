import React, { useState, useEffect } from "react";
import api from "../api/axiosConfig";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { Link } from "react-router-dom";

export default function ReservaVisual() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [horasLibres, setHorasLibres] = useState([]);
  const [selectedHora, setSelectedHora] = useState("");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [notas, setNotas] = useState("");
  const [mensaje, setMensaje] = useState(null);
  const [error, setError] = useState(null);
  const [diasCompletos, setDiasCompletos] = useState([]);

  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [errorTerminos, setErrorTerminos] = useState("");

  const handleMonthChange = (month) => {
    const mes = month.getMonth() + 1;
    const año = month.getFullYear();
    api
      .get(`/reservas/dias-completos?mes=${mes}&año=${año}`)
      .then((res) => {
        if (res.data.success) {
          const fechas = res.data.diasCompletos.map((f) => new Date(f));
          setDiasCompletos(fechas);
        } else setDiasCompletos([]);
      })
      .catch(() => setDiasCompletos([]));
  };

  useEffect(() => {
    if (selectedDay) {
      const fechaISO = selectedDay.toISOString().split("T")[0];
      api
        .get(`/reservas/libres?fecha=${fechaISO}`)
        .then((res) => {
          if (res.data.success) {
            setHorasLibres(res.data.horasLibres);
          } else setHorasLibres([]);
        })
        .catch(() => setHorasLibres([]));
    }
    setSelectedHora("");
  }, [selectedDay]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!aceptaTerminos)
      return setErrorTerminos("Debes aceptar los términos y condiciones");

    setErrorTerminos("");
    if (!selectedDay) return setError("Selecciona un día.");
    if (!selectedHora) return setError("Selecciona una hora.");

    try {
      const fechaISO = selectedDay.toISOString().split("T")[0];
      const res = await api.post("/reservas", {
        nombre,
        email,
        telefono,
        fecha: fechaISO,
        hora: selectedHora,
        notas,
      });

      if (res.data.success) {
        setMensaje("Reserva creada correctamente.");
        setError(null);
        setNombre("");
        setEmail("");
        setTelefono("");
        setNotas("");
        setSelectedHora("");
        setAceptaTerminos(false);
        api
          .get(`/reservas/libres?fecha=${fechaISO}`)
          .then((r) => r.data.success && setHorasLibres(r.data.horasLibres));
      } else setError(res.data.error);
    } catch {
      setError("Error al crear la reserva.");
    }
  };

  return (
    <section className="py-24 bg-white text-[#2E2E2E]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          Reserva tu <span className="text-[#90B29E]">Encuentro</span>
        </h2>

        <div className="bg-[#FFF4C7]/40 border border-[#90B29E]/30 shadow-md rounded-3xl p-10 backdrop-blur-sm">
          {/* Cabecera calendario */}
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Selecciona tu día disponible
          </h3>

          <div className="flex flex-col md:flex-row md:gap-12 items-start justify-center">
            {/* Calendario */}
            <div className="flex-1 mb-8 md:mb-0">
              <DayPicker
                mode="single"
                selected={selectedDay}
                onSelect={(day, modifiers) => {
                  if (!day || modifiers.disabled) return;
                  setSelectedDay(day);
                }}
                onMonthChange={handleMonthChange}
                disabled={[{ before: new Date() }, ...diasCompletos]}
                modifiers={{ full: diasCompletos }}
                modifiersClassNames={{
                  full:
                    "bg-[#90B29E]/20 text-gray-400 line-through cursor-not-allowed",
                }}
                className="rounded-xl border border-[#90B29E]/20 p-4 bg-[#FFF4C7]/40 text-[#2E2E2E]"
              />
            </div>

            {/* Horas */}
            {selectedDay && (
              <div className="flex-1">
                <h4 className="text-lg font-medium mb-3">
                  Horas disponibles para{" "}
                  <span className="text-[#90B29E] font-semibold">
                    {selectedDay.toLocaleDateString()}
                  </span>
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  {horasLibres.length > 0 ? (
                    horasLibres.map((hora) => (
                      <button
                        key={hora}
                        type="button"
                        onClick={() => setSelectedHora(hora)}
                        className={`px-3 py-2 rounded-2xl text-sm font-medium transition border ${
                          selectedHora === hora
                            ? "bg-[#90B29E] text-[#FFF4C7] border-[#90B29E]"
                            : "bg-transparent border-[#90B29E]/40 hover:bg-[#90B29E]/10"
                        }`}
                      >
                        {hora}
                      </button>
                    ))
                  ) : (
                    <p className="text-sm text-[#4A4A4A]">
                      No hay horas disponibles este día.
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Formulario con estilo libreta */}
          <form onSubmit={handleSubmit} className="mt-12 grid md:grid-cols-2 gap-8 relative">
            <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-[#90B29E]/30" />

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#2E2E2E] mb-1">
                  Nombre completo
                </label>
                <input
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="w-full bg-transparent border-b-2 border-[#90B29E]/50 focus:border-[#CBAF87] outline-none py-1 transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2E2E2E] mb-1">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-b-2 border-[#90B29E]/50 focus:border-[#CBAF87] outline-none py-1 transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2E2E2E] mb-1">
                  Teléfono
                </label>
                <input
                  type="tel"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  className="w-full bg-transparent border-b-2 border-[#90B29E]/50 focus:border-[#CBAF87] outline-none py-1 transition"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#2E2E2E] mb-1">
                  Notas adicionales
                </label>
                <textarea
                  value={notas}
                  onChange={(e) => setNotas(e.target.value)}
                  rows={3}
                  className="w-full bg-transparent border-b-2 border-[#90B29E]/50 focus:border-[#CBAF87] outline-none py-1 transition min-h-[80px]"
                  placeholder="Información relevante o necesidades específicas..."
                />
              </div>

              {/* términos */}
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  checked={aceptaTerminos}
                  onChange={(e) => setAceptaTerminos(e.target.checked)}
                  className="mt-1 accent-[#90B29E]"
                />
                <label className="text-sm text-[#4A4A4A]">
                  Acepto los{" "}
                  <Link
                    to="/terminos"
                    className="text-[#90B29E] underline font-medium hover:text-[#7EA18E]"
                  >
                    términos y condiciones
                  </Link>
                </label>
              </div>
              {errorTerminos && (
                <p className="text-red-600 text-sm">{errorTerminos}</p>
              )}
            </div>

            <div className="md:col-span-2 flex justify-center mt-10">
              <button
                type="submit"
                disabled={!aceptaTerminos}
                className={`px-10 py-4 rounded-2xl font-semibold text-lg shadow-md transition ${
                  aceptaTerminos
                    ? "bg-[#90B29E] text-[#FFF4C7] hover:bg-[#7EA18E] focus:ring-2 focus:ring-[#CBAF87]"
                    : "bg-[#90B29E]/30 text-[#FFF4C7]/70 cursor-not-allowed"
                }`}
              >
                Confirmar reserva {selectedHora && `– ${selectedHora}`}
              </button>
            </div>
          </form>

          {/* mensajes */}
          {mensaje && (
            <p className="text-[#90B29E] text-center mt-6">{mensaje}</p>
          )}
          {error && <p className="text-red-600 text-center mt-6">{error}</p>}
        </div>
      </div>
    </section>
  );
}
