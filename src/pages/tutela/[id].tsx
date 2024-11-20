import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { fetchTutelaSuccess, updateTutelaSuccess } from '@/redux/actions';
import FormComponent from '@/components/FormComponent';

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

const Tutela = () => {
  const router = useRouter();
  const { id } = router.query; // Obteniendo el `id` de la URL
  const dispatch = useDispatch();
  const tutela = useSelector((state: any) => state.tutela); // Selecciona la tutela actual
  const [formValues, setFormValues] = useState(null);

  useEffect(() => {
    if (id) {
      // Obtener la tutela desde el store, disparando la acción de consulta
      dispatch(fetchTutelaSuccess({ un: parseInt(id) }));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (tutela) {
      setFormValues(tutela); // Cargar los valores de la tutela en el formulario
    }
  }, [tutela]);

  const handleSubmit = (e: any) => {
    // Disparar acción de actualización
    e.preventDefault();
    dispatch(updateTutelaSuccess(formValues));

    // Redirigir a la página de éxito
    router.push('/success');
  };

  if (!formValues) {
    return <div>Loading...</div>; // Mostrar un indicador de carga mientras se obtienen los datos
  }

  return (
    <div>
      <h1 className="text-3xl bg-[#f5f5dc] pt-3 font-bold text-center">Update Tutela</h1>

      {/* Renderiza el FormComponent y pasa los valores */}
      <FormComponent formData={formValues} onSubmit={handleSubmit} formConfig={formConfig} onChange={setFormValues} isEditMode={true} />
    </div>
  );
};

export default Tutela;
