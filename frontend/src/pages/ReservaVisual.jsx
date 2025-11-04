import React, { useState, useEffect } from 'react';
import api from '../api/axiosConfig';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';
import { Link } from "react-router-dom";

export default function ReservaVisual() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [horasLibres, setHorasLibres] = useState([]);
  const [selectedHora, setSelectedHora] = useState('');
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [notas, setNotas] = useState('');
  const [mensaje, setMensaje] = useState(null);
  const [error, setError] = useState(null);
  const [diasCompletos, setDiasCompletos] = useState([]);

  // ✅ Estado para términos
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [errorTerminos, setErrorTerminos] = useState("");

  const handleMonthChange = (month) => {
    const mes = month.getMonth() + 1;
    const año = month.getFullYear();
    api.get(`/reservas/dias-completos?mes=${mes}&año=${año}`)
      .then(res => {
        if (res.data.success) {
          const fechas = res.data.diasCompletos.map(f => new Date(f));
          setDiasCompletos(fechas);
        } else {
          setDiasCompletos([]);
        }
      })
      .catch(() => setDiasCompletos([]));
  };

  useEffect(() => {
    if (selectedDay) {
      const fechaISO = selectedDay.toISOString().split('T')[0];
      api.get(`/reservas/libres?fecha=${fechaISO}`)
        .then(res => {
          if (res.data.success) {
            setHorasLibres(res.data.horasLibres);
          } else {
            setHorasLibres([]);
          }
        })
        .catch(() => setHorasLibres([]));
    }
    setSelectedHora('');
  }, [selectedDay]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!aceptaTerminos) {
      setErrorTerminos("Debes aceptar los términos y condiciones");
      return;
    }

    setErrorTerminos("");

    if (!selectedDay) return setError('Selecciona un día.');
    if (!selectedHora) return setError('Selecciona una hora.');

    try {
      const fechaISO = selectedDay.toISOString().split('T')[0];
      const res = await api.post('/reservas', {
        nombre,
        email,
        telefono,
        fecha: fechaISO,
        hora: selectedHora,
        notas
      });

      if (res.data.success) {
        setMensaje('Reserva creada correctamente.');
        setError(null);
        setNombre('');
        setEmail('');
        setTelefono('');
        setNotas('');
        setSelectedHora('');
        setAceptaTerminos(false);

        api.get(`/reservas/libres?fecha=${fechaISO}`)
          .then(r => r.data.success && setHorasLibres(r.data.horasLibres));
      } else {
        setError(res.data.error);
      }
    } catch {
      setError('Error al crear la reserva.');
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Selecciona tu día</h2>

      <DayPicker
        mode="single"
        selected={selectedDay}
        onSelect={(day, modifiers) => {
          if (!day || modifiers.disabled) return;
          setSelectedDay(day);
        }}
        onMonthChange={handleMonthChange}
        disabled={[
          { before: new Date() },
          ...diasCompletos
        ]}
        modifiers={{ full: diasCompletos }}
        modifiersClassNames={{ full: 'bg-gray-300 text-gray-500 cursor-not-allowed' }}
        className="mb-6"
      />

      {selectedDay && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">
            Horas disponibles para {selectedDay.toLocaleDateString()}
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {horasLibres.map(hora => (
              <button
                key={hora}
                type="button"
                onClick={() => setSelectedHora(hora)}
                className={`px-3 py-2 rounded border ${
                  selectedHora === hora ? 'bg-purple-600 text-white' : 'bg-white text-gray-800'
                }`}
              >
                {hora}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Formulario de datos */}
      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="block mb-1">Nombre completo</label>
          <input type="text" value={nombre} onChange={e => setNombre(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded" required />
        </div>

        <div>
          <label className="block mb-1">Correo electrónico</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded" required />
        </div>

        <div>
          <label className="block mb-1">Teléfono</label>
          <input type="tel" value={telefono} onChange={e => setTelefono(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded" />
        </div>

        <div>
          <label className="block mb-1">Notas adicionales</label>
          <textarea value={notas} onChange={e => setNotas(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded" rows={3}/>
        </div>

        {/* ✅ Términos y condiciones */}
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            checked={aceptaTerminos}
            onChange={(e) => setAceptaTerminos(e.target.checked)}
            className="mt-1"
          />
          <label className="text-sm text-gray-700">
            Acepto los{" "}
            <Link to="/terminos" className="text-purple-600 underline font-medium">
              términos y condiciones
            </Link>
          </label>
        </div>

        {errorTerminos && <p className="text-red-600 text-sm">{errorTerminos}</p>}

        <button
          type="submit"
          disabled={!aceptaTerminos}
          className={`w-full py-2 rounded transition ${
            aceptaTerminos
              ? "bg-purple-600 hover:bg-purple-700 text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Confirmar reserva {selectedHora && `– ${selectedHora}`}
        </button>
      </form>

      {mensaje && <p className="text-green-600 mt-4">{mensaje}</p>}
      {error && <p className="text-red-600 mt-4">{error}</p>}
    </div>
  );
}
