import React, { useState } from 'react';
import api from '../api/axiosConfig';

export default function Reserva() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [notas, setNotas] = useState('');
  const [mensaje, setMensaje] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/reservas', {
        nombre,
        email,
        telefono,
        fecha,
        hora,
        notas
      });
      if (res.data.success) {
        setMensaje('Tu reserva ha sido enviada correctamente.');
        setError(null);
        // limpiar campos
        setNombre('');
        setEmail('');
        setTelefono('');
        setFecha('');
        setHora('');
        setNotas('');
      } else {
        setError('Hubo un problema al enviar tu reserva.');
      }
    } catch (err) {
      console.error(err);
      setError('Error en el envío de la reserva.');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Reservar cita presencial</h2>
      {mensaje && <p className="text-green-600 mb-2">{mensaje}</p>}
      {error && <p className="text-red-600 mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* campos formulario */}
        <div>
          <label className="block mb-1">Nombre completo</label>
          <input type="text" value={nombre} onChange={e=>setNombre(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded" required />
        </div>
        <div>
          <label className="block mb-1">Correo electrónico</label>
          <input type="email" value={email} onChange={e=>setEmail(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded" required />
        </div>
        <div>
          <label className="block mb-1">Teléfono</label>
          <input type="tel" value={telefono} onChange={e=>setTelefono(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded" />
        </div>
        <div>
          <label className="block mb-1">Fecha de la cita</label>
          <input type="date" value={fecha} onChange={e=>setFecha(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded" required />
        </div>
        <div>
          <label className="block mb-1">Hora</label>
          <select value={hora} onChange={e=>setHora(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded" required >
            <option value="">Selecciona una hora</option>
            <option value="10:00">10:00</option>
            <option value="12:00">12:00</option>
            <option value="14:00">14:00</option>
            <option value="16:00">16:00</option>
            <option value="18:00">18:00</option>
          </select>
        </div>
        <div>
          <label className="block mb-1">Notas adicionales</label>
          <textarea value={notas} onChange={e=>setNotas(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded" rows={3} />
        </div>
        <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">
          Reservar
        </button>
      </form>
    </div>
  );
}


