// src/routes/ProtectedRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../auth/useAuth';

export default function ProtectedRoute() {
  const { admin, loading } = useAuth();

  // Mientras se verifica el estado de autenticación, muestra un “loading”
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Cargando…</p>
      </div>
    );
  }

  // Si no hay admin autenticado, redirige al login
  if (!admin) {
    return <Navigate to="/login" replace />;
  }

  // Si hay admin, renderiza la ruta protegida (hijos)
  return <Outlet />;
}
