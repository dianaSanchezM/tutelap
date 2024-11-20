import React, { useState } from 'react';
import { useSelector } from 'react-redux';

interface Tutela {
  id: string;
  nombreDemandado: string;
  informacionPersonal: {
    nombre: string;
    identificacion: string;
    direccion: string;
    correoElectronico: string;
    telefono: string;
  };
  detallesLegales: {
    derechosViolados: string;
    descripcionIncidente: string;
    fechaHoraIncidente: string;
    documentosSoporte: string;
  };
  detallesAdministrativos: {
    nombreDemandado: string;
    identificacionDemandado: string;
    medidasSolicitadas: string;
    accionesPrevias: string;
  };
  informacionAdicional: {
    representacionLegal: {
      nombre: string;
      informacionContacto: string;
    };
    consideracionesEspeciales: string;
  };
}

const TutelaSearchById: React.FC = () => {
  const [searchId, setSearchId] = useState<string>(''); // ID para buscar
  const [foundTutela, setFoundTutela] = useState<Tutela | null>(null); // Estado para guardar la tutela encontrada

  const tutelas = useSelector((state: any) => state.tutelas); // Obtener la lista de tutelas desde el estado

  const handleSearch = () => {
    console.log('log test', {tutelas});
    
    const tutela = tutelas.find((t: { id: string; }) => t.id === searchId); // Buscar la tutela por ID
    setFoundTutela(tutela || null); // Establecer el estado con la tutela encontrada o null si no se encuentra
  };

  return (
    <div>
      <h2>Consultar Tutela por ID</h2>
      <input
        type="text"
        placeholder="Ingresa el ID de la tutela"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>

      {foundTutela ? (
        <div>
          <h3>Detalles de la Tutela</h3>
          <p><strong>ID:</strong> {foundTutela.id}</p>
          <p><strong>Nombre Demandado:</strong> {foundTutela.nombreDemandado}</p>
          <p><strong>Nombre:</strong> {foundTutela.informacionPersonal.nombre}</p>
          <p><strong>Identificación:</strong> {foundTutela.informacionPersonal.identificacion}</p>
          <p><strong>Derechos Violados:</strong> {foundTutela.detallesLegales.derechosViolados}</p>
          {/* Aquí puedes agregar más detalles si lo deseas */}
        </div>
      ) : searchId && (
        <p>No se encontró ninguna tutela con el ID ingresado.</p>
      )}
    </div>
  );
};

export default TutelaSearchById;
