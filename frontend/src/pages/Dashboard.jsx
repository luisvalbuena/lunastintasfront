import React, { useEffect, useState } from 'react';
import api from '../api/axiosConfig';
import useAuth from '../auth/useAuth';

export default function Dashboard() {
  const { logout } = useAuth();

  const [totalReservas, setTotalReservas] = useState(0);
  const [totalAuto, setTotalAuto] = useState(0);
  const [ultimasReservas, setUltimasReservas] = useState([]);
  const [ultimasAuto, setUltimasAuto] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Reservas
      const resReservas = await api.get('/reservas');
      const reservas = resReservas.data.reservas || [];
      setTotalReservas(reservas.length);
      setUltimasReservas(reservas.slice(0, 5));

      // Solicitudes carta astral
      const resAuto = await api.get('/auto');
      const autos = resAuto.data.autos || [];
      setTotalAuto(autos.length);
      setUltimasAuto(autos.slice(0, 5));
    } catch (err) {
      console.log("Error cargando dashboard", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <button
          onClick={logout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Cerrar sesión
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold text-gray-600">Reservas</h2>
          <p className="text-4xl font-extrabold mt-2">{totalReservas}</p>
          <p className="text-sm text-gray-500 mt-1">Total reservas recibidas</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold text-gray-600">Cartas Astrales</h2>
          <p className="text-4xl font-extrabold mt-2">{totalAuto}</p>
          <p className="text-sm text-gray-500 mt-1">Solicitudes carta astral</p>
        </div>
      </div>

      {/* Últimos registros */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Últimas reservas */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-bold mb-4">Últimas Reservas</h3>
          <ul className="space-y-3">
            {ultimasReservas.map((r) => (
              <li key={r._id} className="flex justify-between border-b pb-2">
                <span className="font-medium">{r.nombre}</span>
                <span className="text-sm text-gray-600">
                  {new Date(r.fecha).toLocaleDateString()} - {r.hora}
                </span>
              </li>
            ))}
            {ultimasReservas.length === 0 && (
              <p className="text-gray-500 text-sm">No hay reservas</p>
            )}
          </ul>
        </div>

        {/* Últimas cartas astrales */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-bold mb-4">Últimas Cartas Astrales</h3>
          <ul className="space-y-3">
            {ultimasAuto.map((a) => (
              <li key={a._id} className="flex justify-between border-b pb-2">
                <span className="font-medium">{a.nombre}</span>
                <span className="text-sm text-gray-600">{a.fechaNacimiento}</span>
              </li>
            ))}
            {ultimasAuto.length === 0 && (
              <p className="text-gray-500 text-sm">No hay solicitudes</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}


