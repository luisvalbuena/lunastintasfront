import { useLocation } from 'react-router-dom';

export default function Resultado() {
  const location = useLocation();
  const { name, dob } = location.state || {};

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Resultado de tu carta astral</h2>
      <p className="text-lg mb-2">Nombre: {name}</p>
      <p className="text-lg mb-2">Fecha de nacimiento: {dob}</p>
      <p className="mt-4">Aquí podría ir el análisis astrológico personalizado.</p>
    </div>
  );
}
