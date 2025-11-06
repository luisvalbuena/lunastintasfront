import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axiosConfig";

export default function CartaAstral() {
  const [form, setForm] = useState({
    nombre: "",
    fechaNacimiento: "",
    horaNacimiento: "",
    ciudadNacimiento: "",
    paisNacimiento: "",
    email: "",
    notas: "",
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
      await api.post("/auto", form);
      navigate("/gracias");
    } catch (err) {
      console.error(err);
      alert("Error enviando la solicitud ❌");
    }
  };

  return (
    <section className="py-24 bg-white text-[#2E2E2E]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">
          Carta Astral — <span className="text-[#90B29E]">Solicitud</span>
        </h2>

        <p className="text-center text-[#4A4A4A] mb-12 leading-relaxed max-w-2xl mx-auto">
          Completa tus datos como si escribieras en tu cuaderno estelar personal.
          Cada línea abre un diálogo con tu cielo natal.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-[#FFF4C7]/30 border border-[#90B29E]/20 shadow-sm rounded-3xl p-10 backdrop-blur-sm"
        >
          {/* Diseño libreta abierta */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative">
            {/* línea del medio */}
            <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-[#90B29E]/30" />

            {/* página izquierda */}
            <div className="space-y-6">
              {[
                { name: "nombre", label: "Nombre completo", type: "text" },
                { name: "email", label: "Email", type: "email" },
                { name: "fechaNacimiento", label: "Fecha de nacimiento", type: "date" },
                { name: "horaNacimiento", label: "Hora de nacimiento", type: "time" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-[#2E2E2E] mb-1">
                    {field.label}
                  </label>
                  <input
                    name={field.name}
                    type={field.type}
                    value={form[field.name]}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-[#90B29E]/50 focus:border-[#CBAF87] outline-none py-1 transition"
                    required
                  />
                </div>
              ))}
            </div>

            {/* página derecha */}
            <div className="space-y-6">
              {[
                { name: "ciudadNacimiento", label: "Ciudad de nacimiento", type: "text" },
                { name: "paisNacimiento", label: "País de nacimiento", type: "text" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-[#2E2E2E] mb-1">
                    {field.label}
                  </label>
                  <input
                    name={field.name}
                    type={field.type}
                    value={form[field.name]}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-[#90B29E]/50 focus:border-[#CBAF87] outline-none py-1 transition"
                    required
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm font-medium text-[#2E2E2E] mb-1">
                  Notas (opcional)
                </label>
                <textarea
                  name="notas"
                  value={form.notas}
                  onChange={handleChange}
                  placeholder="Ej: parto inducido, hora no exacta..."
                  className="w-full bg-transparent border-b-2 border-[#90B29E]/50 focus:border-[#CBAF87] outline-none py-1 transition min-h-[80px]"
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
                    className="text-[#90B29E] font-medium underline hover:text-[#7EA18E]"
                  >
                    términos y condiciones
                  </Link>
                </label>
              </div>
              {errorTerminos && (
                <p className="text-red-600 text-sm">{errorTerminos}</p>
              )}
            </div>
          </div>

          {/* botón */}
          <div className="mt-12 flex justify-center">
            <button
              type="submit"
              disabled={!aceptaTerminos}
              className={`px-10 py-4 rounded-2xl font-semibold text-lg shadow-md transition ${
                aceptaTerminos
                  ? "bg-[#90B29E] text-[#FFF4C7] hover:bg-[#7EA18E] focus:ring-2 focus:ring-[#CBAF87]"
                  : "bg-[#90B29E]/30 text-[#FFF4C7]/70 cursor-not-allowed"
              }`}
            >
              Enviar solicitud ✨
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

