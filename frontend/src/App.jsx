import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/landing/Home";
import CartaAstral from "./pages/CartaAstral";
import Resultado from "./pages/Resultado";
import Reserva from "./pages/Reserva";
import ReservaVisual from "./pages/ReservaVisual";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import ProtectedRoute from "./routes/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./components/DashboardLayout";
import Reservas from "./pages/dashboard/Reservas";
import PorEscrito from "./pages/dashboard/PorEscrito";
import Gracias from "./pages/Gracias";
import Terminos from "./pages/Terminos";

// ✅ Import cookie modal
import AcceptCookies from "./components/AcceptCookies";
import Privacidad from "./pages/Privacidad";

function PublicLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* ✅ Modal cookies */}
      <AcceptCookies />

      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

function PrivateLayout({ children }) {
  return <main className="min-h-screen">{children}</main>;
}

export default function App() {
  return (
    <Routes>
      {/* RUTAS PÚBLICAS */}
      <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
      <Route path="/login" element={<PublicLayout><Login /></PublicLayout>} />
      <Route path="/carta" element={<PublicLayout><CartaAstral /></PublicLayout>} />
      <Route path="/resultado" element={<PublicLayout><Resultado /></PublicLayout>} />
      <Route path="/visual" element={<PublicLayout><Reserva /></PublicLayout>} />
      <Route path="/reserva" element={<PublicLayout><ReservaVisual /></PublicLayout>} />
      <Route path="/gracias" element={<PublicLayout><Gracias/></PublicLayout>} />
      <Route path="/terminos" element={<PublicLayout><Terminos/></PublicLayout>} />
      <Route path="/privacidad" element={<PublicLayout><Privacidad/></PublicLayout>} />

      {/* PROTEGIDAS */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="reservas" element={<Reservas />} />
          <Route path="escritas" element={<PorEscrito />} />
        </Route>
      </Route>

      {/* 404 */}
      <Route path="*" element={<PublicLayout><NotFound /></PublicLayout>} />
    </Routes>
  );
}

