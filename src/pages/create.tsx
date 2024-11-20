import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { createTutelaSuccess } from "@/redux/actions/index";
import { useRouter } from 'next/router';
import InputField from "@/components/basics/InputField";
import FormComponent from "@/components/FormComponent";

const DERECHOS = [
  "El derecho a la vida",
  "El derecho a la salud",
  "El derecho a la educación",
  "El derecho a la igualdad",
  "El derecho al debido proceso",
  "El derecho a la libertad de expresión",
  "El derecho a la integridad personal",
];

function generarUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const random = Math.random() * 16 | 0;
    const v = c === 'x' ? random : (random & 0x3 | 0x8);
    return v.toString(16);
  });
}

interface InformacionPersonal {
  nombre: string;
  identificacion: string;
  direccion: string;
  correoElectronico: string;
  telefono: string;
}

interface DetallesLegales {
  derechosViolados: string;
  descripcionIncidente: string;
  fechaHoraIncidente: string;
  documentosSoporte: string;
}

interface DetallesAdministrativos {
  nombreDemandado: string;
  identificacionDemandado: string;
  medidasSolicitadas: string;
  accionesPrevias: string;
}

interface RepresentacionLegal {
  nombre: string;
  informacionContacto: string;
}

interface InformacionAdicional {
  representacionLegal: RepresentacionLegal;
  consideracionesEspeciales: string;
}

interface FormData {
  un: string;
  id: string;
  nombreDemandado: string;
  informacionPersonal: InformacionPersonal;
  detallesLegales: DetallesLegales;
  detallesAdministrativos: DetallesAdministrativos;
  informacionAdicional: InformacionAdicional;
}

const Create: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const tutelas = useSelector((state: any) => state.tutelas);
  const [formData, setFormData] = useState<FormData>({
    un: generarUUID(),
    id: "",
    nombreDemandado: "",
    informacionPersonal: {
      nombre: "",
      identificacion: "",
      direccion: "",
      correoElectronico: "",
      telefono: "",
    },
    detallesLegales: {
      derechosViolados: "",
      descripcionIncidente: "",
      fechaHoraIncidente: "",
      documentosSoporte: "",
    },
    detallesAdministrativos: {
      nombreDemandado: "",
      identificacionDemandado: "",
      medidasSolicitadas: "",
      accionesPrevias: "",
    },
    informacionAdicional: {
      representacionLegal: {
        nombre: "",
        informacionContacto: "",
      },
      consideracionesEspeciales: "",
    },
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const actionType = 'create';
    dispatch(createTutelaSuccess(formData));
    router.push({
      pathname: '/success',
      query: { action: actionType },
    });
  };

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
  

  return (
    <FormComponent 
      formData={formData}
      formConfig={formConfig}
      onChange={setFormData}
      isEditMode={true}
      onSubmit={handleSubmit}
    />
  );
};

export default Create;
