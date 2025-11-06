import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../auth/useAuth";
import { Moon } from "lucide-react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(username, password);
    if (success) {
      navigate("/dashboard");
    } else {
      setError("Credenciales inválidas");
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white text-[#2E2E2E] overflow-hidden">
      {/* Halos decorativos */}
      <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-[#90B29E]/15 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#FFF4C7]/25 blur-3xl" />

      <div className="relative z-10 w-full max-w-md bg-white/70 backdrop-blur-md border border-[#90B29E]/20 rounded-3xl p-10 shadow-md">
        {/* Ícono superior */}
        <div className="flex justify-center mb-6">
          <Moon className="w-10 h-10 text-[#90B29E]" />
        </div>

        {/* Título */}
        <h2 className="text-3xl font-bold text-center mb-6">
          <span className="text-[#90B29E]">Lunas Tintas</span>  
          <br />
          <span className="text-[#2E2E2E] text-xl font-medium">
            Acceso administrador
          </span>
        </h2>

        {error && (
          <p className="text-red-600 text-sm text-center mb-4">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-[#2E2E2E] mb-1">
              Usuario
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-transparent border-b-2 border-[#90B29E]/50 focus:border-[#CBAF87] outline-none py-1 transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#2E2E2E] mb-1">
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent border-b-2 border-[#90B29E]/50 focus:border-[#CBAF87] outline-none py-1 transition"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full mt-6 rounded-2xl px-6 py-3 text-lg font-semibold shadow-md bg-[#90B29E] text-[#FFF4C7] hover:bg-[#7EA18E] focus:outline-none focus:ring-2 focus:ring-[#CBAF87] transition"
          >
            Entrar
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-[#6B6B6B]">
          Acceso restringido a administradores
        </p>
      </div>
    </section>
  );
}
