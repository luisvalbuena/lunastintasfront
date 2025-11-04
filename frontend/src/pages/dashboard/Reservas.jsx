import React, { useEffect, useState } from 'react';
import api from '../../api/axiosConfig';
import useAuth from '../../auth/useAuth';

export default function Reservas() {
  const [reservas, setReservas] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const { logout } = useAuth();

  useEffect(() => {
    fetchReservas();
  }, []);

  const fetchReservas = async () => {
    try {
      const res = await api.get('/reservas');
      setReservas(res.data.reservas);
      setFiltered(res.data.reservas);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar esta reserva?");
    if (!confirmDelete) return;

    try {
      await api.delete(`/reservas/${id}`);
      // Filtrar la reserva eliminada del state sin recargar
      const newList = reservas.filter(r => r._id !== id);
      setReservas(newList);
      setFiltered(newList);
    } catch (err) {
      console.error("Error eliminando reserva:", err);
      alert("Error eliminando reserva");
    }
  };

  const handleFilter = () => {
    let result = reservas;

    if (startDate) {
      result = result.filter(r => new Date(r.fecha) >= new Date(startDate));
    }
    if (endDate) {
      result = result.filter(r => new Date(r.fecha) <= new Date(endDate));
    }

    setFiltered(result);
    setCurrentPage(1);
  };

  const handleSort = (column) => {
    let direction = sortDirection;

    if (sortColumn === column) {
      direction = direction === "asc" ? "desc" : "asc";
      setSortDirection(direction);
    } else {
      setSortColumn(column);
      setSortDirection("asc");
      direction = "asc";
    }

    const sorted = [...filtered].sort((a, b) => {
      if (column === "fecha") {
        return direction === "asc"
          ? new Date(a.fecha) - new Date(b.fecha)
          : new Date(b.fecha) - new Date(a.fecha);
      }

      return direction === "asc"
        ? a[column]?.toString().localeCompare(b[column]?.toString())
        : b[column]?.toString().localeCompare(a[column]?.toString());
    });

    setFiltered(sorted);
  };

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = filtered.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  const arrow = (col) => {
    if (sortColumn !== col) return "";
    return sortDirection === "asc" ? "⬆️" : "⬇️";
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Reservas</h1>
        <button
          onClick={logout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Cerrar sesión
        </button>
      </div>

      {/* Filtros */}
      <div className="bg-white p-4 rounded shadow mb-4 flex flex-wrap gap-4 items-end">
        <div>
          <label className="text-sm text-gray-600">Desde:</label>
          <input
            type="date"
            className="border p-2 rounded w-full"
            value={startDate}
            onChange={e => setStartDate(e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Hasta:</label>
          <input
            type="date"
            className="border p-2 rounded w-full"
            value={endDate}
            onChange={e => setEndDate(e.target.value)}
          />
        </div>

        <button
          onClick={handleFilter}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Buscar
        </button>
      </div>

      {/* Tabla */}
      <div className="bg-white shadow rounded p-4 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              {[
                { key: "nombre", label: "Nombre" },
                { key: "email", label: "Email" },
                { key: "telefono", label: "Teléfono" },
                { key: "fecha", label: "Fecha" },
                { key: "hora", label: "Hora" },
                { key: "notas", label: "Notas" }
              ].map(col => (
                <th
                  key={col.key}
                  onClick={() => handleSort(col.key)}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase cursor-pointer select-none"
                >
                  {col.label} {arrow(col.key)}
                </th>
              ))}

              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Acciones</th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {currentItems.length > 0 ? currentItems.map(r => (
              <tr key={r._id}>
                <td className="px-6 py-4">{r.nombre}</td>
                <td className="px-6 py-4">{r.email}</td>
                <td className="px-6 py-4">{r.telefono}</td>
                <td className="px-6 py-4">{new Date(r.fecha).toLocaleDateString()}</td>
                <td className="px-6 py-4">{r.hora}</td>
                <td className="px-6 py-4">{r.notas}</td>

                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDelete(r._id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-sm"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan="7" className="text-center py-4 text-gray-500">
                  No se encontraron reservas
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Paginación */}
      <div className="flex justify-center items-center mt-4 gap-3">
        <button
          className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(p => p - 1)}
        >
          Anterior
        </button>

        <span className="font-semibold">
          Página {currentPage} de {totalPages}
        </span>

        <button
          className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(p => p + 1)}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}


