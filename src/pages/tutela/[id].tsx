// components/TutelaDetail.tsx
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { getTutelas } from '@/redux/actions';

interface TutelaDetailProps {
  tutela: {
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
  };
  onEdit: (field: string, value: any) => void;
}

const Tutela: React.FC<TutelaDetailProps> = () => {
    const tutela = useSelector((state: any) => state.tutelas)[0];
    const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();
  const { un } = router.query;
  const dispatch = useDispatch();

  const handleEdit = (field: string, value: any) => {
   //onEdit(field, value);
        //const test =dispatch(getTutelas(id));
        setIsEditing(false);
  };

  const toggleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h1 className="text-2xl font-semibold mb-4">Tutela Details</h1>
      <div className="bg-white shadow-md rounded-lg p-4">
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Personal Information</h2>
          <div>
            <label className="text-sm text-gray-700">Nombre:</label>
            {isEditing ? (
              <input
                type="text"
                className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                value={tutela.informacionPersonal.nombre}
                onChange={(e) => handleEdit('informacionPersonal.nombre', e.target.value)}
              />
            ) : (
              <p className="text-sm text-gray-700">{tutela.informacionPersonal.nombre}</p>
            )}
          </div>
          {/* Add similar fields for other personal information */}
        </div>
        {/* Add sections for detallesLegales, detallesAdministrativos, and informacionAdicional */}
      </div>
      <button
        className="mt-4 px-6 py-3 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition duration-300"
        onClick={toggleEdit}
      >
        {isEditing ? 'Save Changes' : 'Edit'}
      </button>
    </div>
  );
};


export default Tutela;
