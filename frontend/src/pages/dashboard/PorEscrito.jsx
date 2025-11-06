import React, { useEffect, useState } from 'react';
import api from '../../api/axiosConfig';
import useAuth from '../../auth/useAuth';

export default function PorEscrito() {
  const [solicitudes, setSolicitudes] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const { logout } = useAuth();

  useEffect(() => {
    fetchSolicitudes();
  }, []);

  const fetchSolicitudes = async () => {
    try {
      const res = await api.get('/auto'); // ✅ obtenemos autos (solicitudes)
      setSolicitudes(res.data.autos);
      setFiltered(res.data.autos);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("¿Seguro que deseas eliminar esta solicitud?");
    if (!confirmDelete) return;

    try {
      await api.delete(`/auto/${id}`);
      const newList = solicitudes.filter(s => s._id !== id);
      setSolicitudes(newList);
      setFiltered(newList);
    } catch (err) {
      console.error("Error eliminando solicitud:", err);
      alert("Error eliminando solicitud");
    }
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
      return direction === "asc"
        ? (a[column] || "").toString().localeCompare((b[column] || "").toString())
        : (b[column] || "").toString().localeCompare((a[column] || "").toString());
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
        <h1 className="text-3xl font-bold">Solicitudes Carta Astral</h1>
        <button
          onClick={logout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Cerrar sesión
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
                { key: "fechaNacimiento", label: "Fecha Nac." },
                { key: "horaNacimiento", label: "Hora Nac." },
                { key: "ciudadNacimiento", label: "Ciudad" },
                { key: "paisNacimiento", label: "País" },
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
            {currentItems.length > 0 ? currentItems.map(s => (
              <tr key={s._id}>
                <td className="px-6 py-4">{s.nombre}</td>
                <td className="px-6 py-4">{s.email}</td>
                <td className="px-6 py-4">{s.fechaNacimiento}</td>
                <td className="px-6 py-4">{s.horaNacimiento}</td>
                <td className="px-6 py-4">{s.ciudadNacimiento}</td>
                <td className="px-6 py-4">{s.paisNacimiento}</td>
                <td className="px-6 py-4">{s.notas}</td>

                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDelete(s._id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-sm"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan="8" className="text-center py-4 text-gray-500">
                  No hay solicitudes
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
