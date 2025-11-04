import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../api/axiosConfig';

export default function CartaAstral() {
  const [form, setForm] = useState({
    nombre: "",
    fechaNacimiento: "",
    horaNacimiento: "",
    ciudadNacimiento: "",
    paisNacimiento: "",
    email: "",
    notas: ""
  });

  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [errorTerminos, setErrorTerminos] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!aceptaTerminos) {
      setErrorTerminos("Debes aceptar los términos y condiciones para continuar");
      return;
    }

    setErrorTerminos("");

    try {
      await api.post('/auto', form);
      navigate("/gracias");
    } catch (err) {
      console.error(err);
      alert("Error enviando la solicitud ❌");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Carta Astral — Solicitud</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="block mb-1">Nombre completo</label>
          <input name="nombre" type="text" value={form.nombre} onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded" required />
        </div>

        <div>
          <label className="block mb-1">Email</label>
          <input name="email" type="email" value={form.email} onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded" required />
        </div>

        <div>
          <label className="block mb-1">Fecha de nacimiento</label>
          <input name="fechaNacimiento" type="date" value={form.fechaNacimiento} onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded" required />
        </div>

        <div>
          <label className="block mb-1">Hora de nacimiento</label>
          <input name="horaNacimiento" type="time" value={form.horaNacimiento} onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded" required />
        </div>

        <div>
          <label className="block mb-1">Ciudad de nacimiento</label>
          <input name="ciudadNacimiento" type="text" value={form.ciudadNacimiento} onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded" required />
        </div>

        <div>
          <label className="block mb-1">País de nacimiento</label>
          <input name="paisNacimiento" type="text" value={form.paisNacimiento} onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded" required />
        </div>

        <div>
          <label className="block mb-1">Notas (opcional)</label>
          <textarea name="notas" value={form.notas} onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded"
            placeholder="Información adicional (ej: parto inducido, hora no exacta, etc.)" />
        </div>

        {/* ✅ Aceptación de términos */}
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            checked={aceptaTerminos}
            onChange={(e) => setAceptaTerminos(e.target.checked)}
            className="mt-1"
          />
          <label className="text-sm text-gray-700">
            Acepto los{" "}
            <Link to="/terminos" className="text-purple-600 font-medium underline hover:text-purple-800">
              términos y condiciones
            </Link>
          </label>
        </div>

        {errorTerminos && (
          <p className="text-red-600 text-sm">{errorTerminos}</p>
        )}

        <button
          type="submit"
          disabled={!aceptaTerminos}
          className={`w-full py-2 rounded font-semibold text-lg transition ${
            aceptaTerminos
              ? "bg-purple-600 text-white hover:bg-purple-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Enviar solicitud ✨
        </button>
      </form>
    </div>
  );
}


