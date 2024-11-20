import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { fetchTutelaSuccess, updateTutelaSuccess } from '@/redux/actions';
import FormComponent from '@/components/FormComponent';
import IdentificationInput from '@/components/IdentificationInput';

const formConfig = [
  // Sección de Información Personal
  { type: "header", title: "Información Personal" },
  { label: "Nombre", name: "informacionPersonal.nombre", type: "text" },
  { label: "Identificación", name: "informacionPersonal.identificacion", type: "text" },
  { label: "Dirección", name: "informacionPersonal.direccion", type: "text" },
  { label: "Correo Electrónico", name: "informacionPersonal.correoElectronico", type: "email" },
  { label: "Teléfono", name: "informacionPersonal.telefono", type: "tel" },

  // Sección de Detalles Legales
  { type: "header", title: "Detalles Legales" },
  {
    label: "Derechos Violados",
    name: "detallesLegales.derechosViolados",
    type: "select",
    options: [
      "El derecho a la vida",
      "El derecho a la salud",
      "El derecho a la educación",
      "El derecho a la igualdad",
      "El derecho al debido proceso",
      "El derecho a la libertad de expresión",
      "El derecho a la integridad personal",
    ],
  },
  { label: "Descripción del Incidente", name: "detallesLegales.descripcionIncidente", type: "text" },
  { label: "Fecha y Hora del Incidente", name: "detallesLegales.fechaHoraIncidente", type: "datetime-local" },

  // Sección de Detalles Administrativos
  { type: "header", title: "Detalles Administrativos" },
  { label: "Nombre Demandado", name: "detallesAdministrativos.nombreDemandado", type: "text" },
  { label: "Identificación Demandado", name: "detallesAdministrativos.identificacionDemandado", type: "text" },
  { label: "Medidas Solicitadas", name: "detallesAdministrativos.medidasSolicitadas", type: "text" },
  { label: "Acciones Previas", name: "detallesAdministrativos.accionesPrevias", type: "text" },

  // Sección de Información Adicional
  { type: "header", title: "Información Adicional" },
  { label: "Nombre de la Representación Legal", name: "informacionAdicional.representacionLegal.nombre", type: "text" },
  { label: "Contacto de la Representación Legal", name: "informacionAdicional.representacionLegal.informacionContacto", type: "text" },
  { label: "Consideraciones Especiales", name: "informacionAdicional.consideracionesEspeciales", type: "text" },
];

const UpdateTutela = () => {
    const router = useRouter();

    const handleSubmit =(props:any)=>{
        
        router.push(`/tutela/${props}`);
    };

  return (
    
     <div className="container mx-auto my-auto p-4">
     <div className="flex flex-col max-h-screen ">
         {/* Contenido principal */}
      <h1 className="text-3xl text-center font-bold">Update Tutela</h1>

         <div className="flex-grow flex flex-col items-center justify-center">
             <h1 className="text-3xl font-bold mt-8 text-center text-gray-800 w-full">
             Enter the ID of the tutela you want to update.
             </h1>
             <IdentificationInput buttonLabel="Update Tutela" onSubmit={handleSubmit} />
         </div>

         
     </div>
     </div>
  );
};

export default UpdateTutela;
