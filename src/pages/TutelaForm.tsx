import { createTutelaSuccess, updateTutelaSuccess } from '@/redux/actions';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

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

interface InformacionAdicional {
  representacionLegal: {
    nombre: string;
    informacionContacto: string;
  };
  consideracionesEspeciales: string;
}

interface Tutela {
  id: string;
  nombreDemandado: string;
  informacionPersonal: InformacionPersonal;
  detallesLegales: DetallesLegales;
  detallesAdministrativos: DetallesAdministrativos;
  informacionAdicional: InformacionAdicional;
}

interface TutelaFormProps {
  currentTutela: Tutela | null;
  setCurrentTutela: (tutela: Tutela | null) => void;
}

const TutelaForm: React.FC<TutelaFormProps> = ({ currentTutela, setCurrentTutela }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<Tutela>({
    id: '',
    nombreDemandado: '',
    informacionPersonal: {
      nombre: '',
      identificacion: '',
      direccion: '',
      correoElectronico: '',
      telefono: ''
    },
    detallesLegales: {
      derechosViolados: '',
      descripcionIncidente: '',
      fechaHoraIncidente: '',
      documentosSoporte: ''
    },
    detallesAdministrativos: {
      nombreDemandado: '',
      identificacionDemandado: '',
      medidasSolicitadas: '',
      accionesPrevias: ''
    },
    informacionAdicional: {
      representacionLegal: {
        nombre: '',
        informacionContacto: ''
      },
      consideracionesEspeciales: ''
    }
  });

  useEffect(() => {
    if (currentTutela) {
      setFormData(currentTutela);
    }
  }, [currentTutela]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentTutela) {
      dispatch(updateTutelaSuccess(formData));
    } else {
      dispatch(createTutelaSuccess({ ...formData, id: Date.now().toString() })); // Genera un ID único
    }
    setFormData({
      id: '',
      nombreDemandado: '',
      informacionPersonal: {
        nombre: '',
        identificacion: '',
        direccion: '',
        correoElectronico: '',
        telefono: ''
      },
      detallesLegales: {
        derechosViolados: '',
        descripcionIncidente: '',
        fechaHoraIncidente: '',
        documentosSoporte: ''
      },
      detallesAdministrativos: {
        nombreDemandado: '',
        identificacionDemandado: '',
        medidasSolicitadas: '',
        accionesPrevias: ''
      },
      informacionAdicional: {
        representacionLegal: {
          nombre: '',
          informacionContacto: ''
        },
        consideracionesEspeciales: ''
      }
    });
    setCurrentTutela(null); // Limpia el formulario
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{currentTutela ? 'Editar Tutela' : 'Crear Tutela'}</h2>
      <input
        type="text"
        name="nombreDemandado"
        placeholder="Nombre Demandado"
        value={formData.nombreDemandado}
        onChange={handleChange}
        required
      />
      {/* Agrega otros campos del formulario aquí siguiendo la estructura de formData */}
      <button type="submit">{currentTutela ? 'Actualizar' : 'Crear'}</button>
      <button type="button" onClick={() => setCurrentTutela(null)}>Cancelar</button>
    </form>
  );
};

export default TutelaForm;
