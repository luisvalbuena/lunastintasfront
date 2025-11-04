import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-indigo-900 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Lunas Tintas</Link>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">Inicio</Link>
          <Link to="/reserva" className="hover:underline">Reserva presencial</Link>
          <Link to="/carta" className="hover:underline">Haz tu carta</Link>
          <Link to="/login" className="hover:underline">Login</Link>
        </nav>
      </div>
    </header>
  )
}
