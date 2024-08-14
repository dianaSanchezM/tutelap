import * as types from './../actions/actionTypes';

const DERECHOS = [
  "El derecho a la vida",
  "El derecho a la salud",
  "El derecho a la educación",
  "El derecho a la igualdad",
  "El derecho al debido proceso",
  "El derecho a la libertad de expresión",
  "El derecho a la integridad personal",
];
//
const initialState = {
  tutelas: [
    {
      un: 8253777047,
    id: "1234567890",
    "nombreDemandado": "Hospital San Martín",
        "informacionPersonal": {
        "nombre": "María Rodríguez",
        "identificacion": "1234567890",
        "direccion": "Calle 123, Bogotá, Colombia",
        "correoElectronico": "maria.rodriguez@example.com",
        "telefono": "+57 123 456 7890"
      },
      "detallesLegales": {
        "derechosViolados": "Derecho a la salud",
        "descripcionIncidente": "El hospital público negó el tratamiento necesario para una condición médica grave.",
        "fechaHoraIncidente": "2024-07-03T10:30:00",
        "documentosSoporte": "Informe médico detallando la condición del paciente y la necesidad del tratamiento."
      },
      "detallesAdministrativos": {
        "nombreDemandado": "Hospital San Martín",
        "identificacionDemandado": "987654321",
        "medidasSolicitadas": "Orden de realizar el tratamiento médico sin demora.",
        "accionesPrevias": "Solicitud directa al hospital y reclamo ante la Secretaría de Salud local."
      },
      "informacionAdicional": {
        "representacionLegal": {
          "nombre": "Luis Pérez",
          "informacionContacto": "Abogado especializado en derechos constitucionales. Teléfono: +57 321 654 9876, correo: luis.perez@example.com"
        },
        "consideracionesEspeciales": "El paciente ha intentado obtener el tratamiento de manera regular durante dos meses sin éxito."
      }
  },
  {
            un:8253777048,

      id: "2345678901",
    "nombreDemandado": "Colegio San Agustín",
      "informacionPersonal": {
        "nombre": "Javier Pérez",
        "identificacion": "2345678901",
        "direccion": "Carrera 45 #67-89, Medellín, Colombia",
        "correoElectronico": "javier.perez@example.com",
        "telefono": "+57 300 123 4567"
      },
      "detallesLegales": {
        "derechosViolados": "Derecho a la educación",
        "descripcionIncidente": "El colegio privado ha negado la matrícula del estudiante a pesar de cumplir con todos los requisitos académicos y financieros.",
        "fechaHoraIncidente": "2024-06-15T09:00:00",
        "documentosSoporte": "Documentación académica del estudiante y comprobantes de pago de matrícula."
      },
      "detallesAdministrativos": {
        "nombreDemandado": "Colegio San Agustín",
        "identificacionDemandado": "876543210",
        "medidasSolicitadas": "Admisión inmediata del estudiante y rectificación de la decisión administrativa.",
        "accionesPrevias": "Solicitud formal de admisión, comunicación con el director del colegio."
      },
      "informacionAdicional": {
        "representacionLegal": {
          "nombre": "Ana Gómez",
          "informacionContacto": "Abogada especializada en derechos educativos. Teléfono: +57 310 987 6543, correo: ana.gomez@example.com"
        },
        "consideracionesEspeciales": "El estudiante ha sido aceptado en el colegio por los últimos tres años sin problemas."
      }
    },
    {
      un: 8253777049,
      id: "3456789012",
          "nombreDemandado": "Constructora EcoVida",
          "informacionPersonal": {
          "nombre": "Carlos Ramírez",
          "identificacion": "3456789012",
          "direccion": "Av. 10 de Noviembre, Cali, Colombia",
          "correoElectronico": "carlos.ramirez@example.com",
          "telefono": "+57 310 987 6543"
        },
        "detallesLegales": {
          "derechosViolados": "Derecho a un ambiente sano y saludable",
          "descripcionIncidente": "La empresa constructora ha iniciado obras que generan contaminación acústica y ambiental significativa en la zona residencial, afectando la calidad de vida de los residentes.",
          "fechaHoraIncidente": "2024-07-01T08:00:00",
          "documentosSoporte": "Informe técnico de impacto ambiental y testimonios de vecinos afectados."
        },
        "detallesAdministrativos": {
          "nombreDemandado": "Constructora EcoVida",
          "identificacionDemandado": "765432109",
          "medidasSolicitadas": "Suspensión inmediata de las obras y compensación por los daños ambientales causados.",
          "accionesPrevias": "Reclamo formal a la empresa, comunicación con la autoridad ambiental local."
        },
        "informacionAdicional": {
          "representacionLegal": {
            "nombre": "Juan López",
            "informacionContacto": "Abogado especializado en derecho ambiental. Teléfono: +57 320 654 9876, correo: juan.lopez@example.com"
          },
          "consideracionesEspeciales": "La zona residencial está catalogada como de interés ambiental en el plan de ordenamiento territorial."
        }
      },
      {
        un: 8253777040,
      id: "1234567890",
        "nombreDemandado": "Hospital San Martín",
            "informacionPersonal": {
            "nombre": "María Rodríguez",
            "identificacion": "1234567890",
            "direccion": "Calle 123, Bogotá, Colombia",
            "correoElectronico": "maria.rodriguez@example.com",
            "telefono": "+57 123 456 7890"
          },
          "detallesLegales": {
            "derechosViolados": "Derecho a la salud",
            "descripcionIncidente": "El hospital público negó el tratamiento necesario para una condición médica grave.",
            "fechaHoraIncidente": "2024-07-03T10:30:00",
            "documentosSoporte": "Informe médico detallando la condición del paciente y la necesidad del tratamiento."
          },
          "detallesAdministrativos": {
            "nombreDemandado": "Hospital San Martín",
            "identificacionDemandado": "987654321",
            "medidasSolicitadas": "Orden de realizar el tratamiento médico sin demora.",
            "accionesPrevias": "Solicitud directa al hospital y reclamo ante la Secretaría de Salud local."
          },
          "informacionAdicional": {
            "representacionLegal": {
              "nombre": "Luis Pérez",
              "informacionContacto": "Abogado especializado en derechos constitucionales. Teléfono: +57 321 654 9876, correo: luis.perez@example.com"
            },
            "consideracionesEspeciales": "El paciente ha intentado obtener el tratamiento de manera regular durante dos meses sin éxito."
          }
      },
      {
        un: 8253777041,
      id: "2345678901",
        "nombreDemandado": "Colegio San Agustín",
          "informacionPersonal": {
            "nombre": "Javier Pérez",
            "identificacion": "2345678901",
            "direccion": "Carrera 45 #67-89, Medellín, Colombia",
            "correoElectronico": "javier.perez@example.com",
            "telefono": "+57 300 123 4567"
          },
          "detallesLegales": {
            "derechosViolados": "Derecho a la educación",
            "descripcionIncidente": "El colegio privado ha negado la matrícula del estudiante a pesar de cumplir con todos los requisitos académicos y financieros.",
            "fechaHoraIncidente": "2024-06-15T09:00:00",
            "documentosSoporte": "Documentación académica del estudiante y comprobantes de pago de matrícula."
          },
          "detallesAdministrativos": {
            "nombreDemandado": "Colegio San Agustín",
            "identificacionDemandado": "876543210",
            "medidasSolicitadas": "Admisión inmediata del estudiante y rectificación de la decisión administrativa.",
            "accionesPrevias": "Solicitud formal de admisión, comunicación con el director del colegio."
          },
          "informacionAdicional": {
            "representacionLegal": {
              "nombre": "Ana Gómez",
              "informacionContacto": "Abogada especializada en derechos educativos. Teléfono: +57 310 987 6543, correo: ana.gomez@example.com"
            },
            "consideracionesEspeciales": "El estudiante ha sido aceptado en el colegio por los últimos tres años sin problemas."
          }
        },
        {
            un: 8253777042,

      id: "3456789012",
              "nombreDemandado": "Constructora EcoVida",
              "informacionPersonal": {
              "nombre": "Carlos Ramírez",
              "identificacion": "3456789012",
              "direccion": "Av. 10 de Noviembre, Cali, Colombia",
              "correoElectronico": "carlos.ramirez@example.com",
              "telefono": "+57 310 987 6543"
            },
            "detallesLegales": {
              "derechosViolados": "Derecho a un ambiente sano y saludable",
              "descripcionIncidente": "La empresa constructora ha iniciado obras que generan contaminación acústica y ambiental significativa en la zona residencial, afectando la calidad de vida de los residentes.",
              "fechaHoraIncidente": "2024-07-01T08:00:00",
              "documentosSoporte": "Informe técnico de impacto ambiental y testimonios de vecinos afectados."
            },
            "detallesAdministrativos": {
              "nombreDemandado": "Constructora EcoVida",
              "identificacionDemandado": "765432109",
              "medidasSolicitadas": "Suspensión inmediata de las obras y compensación por los daños ambientales causados.",
              "accionesPrevias": "Reclamo formal a la empresa, comunicación con la autoridad ambiental local."
            },
            "informacionAdicional": {
              "representacionLegal": {
                "nombre": "Juan López",
                "informacionContacto": "Abogado especializado en derecho ambiental. Teléfono: +57 320 654 9876, correo: juan.lopez@example.com"
              },
              "consideracionesEspeciales": "La zona residencial está catalogada como de interés ambiental en el plan de ordenamiento territorial."
            }
          },
          {
            un: 8253777043,

      id: "1234567890",
            "nombreDemandado": "Hospital San Martín",
                "informacionPersonal": {
                "nombre": "María Rodríguez",
                "identificacion": "1234567890",
                "direccion": "Calle 123, Bogotá, Colombia",
                "correoElectronico": "maria.rodriguez@example.com",
                "telefono": "+57 123 456 7890"
              },
              "detallesLegales": {
                "derechosViolados": "Derecho a la salud",
                "descripcionIncidente": "El hospital público negó el tratamiento necesario para una condición médica grave.",
                "fechaHoraIncidente": "2024-07-03T10:30:00",
                "documentosSoporte": "Informe médico detallando la condición del paciente y la necesidad del tratamiento."
              },
              "detallesAdministrativos": {
                "nombreDemandado": "Hospital San Martín",
                "identificacionDemandado": "987654321",
                "medidasSolicitadas": "Orden de realizar el tratamiento médico sin demora.",
                "accionesPrevias": "Solicitud directa al hospital y reclamo ante la Secretaría de Salud local."
              },
              "informacionAdicional": {
                "representacionLegal": {
                  "nombre": "Luis Pérez",
                  "informacionContacto": "Abogado especializado en derechos constitucionales. Teléfono: +57 321 654 9876, correo: luis.perez@example.com"
                },
                "consideracionesEspeciales": "El paciente ha intentado obtener el tratamiento de manera regular durante dos meses sin éxito."
              }
          },
          {
            un: 8253777043,

      id: "2345678901",
            "nombreDemandado": "Colegio San Agustín",
              "informacionPersonal": {
                "nombre": "Javier Pérez",
                "identificacion": "2345678901",
                "direccion": "Carrera 45 #67-89, Medellín, Colombia",
                "correoElectronico": "javier.perez@example.com",
                "telefono": "+57 300 123 4567"
              },
              "detallesLegales": {
                "derechosViolados": "Derecho a la educación",
                "descripcionIncidente": "El colegio privado ha negado la matrícula del estudiante a pesar de cumplir con todos los requisitos académicos y financieros.",
                "fechaHoraIncidente": "2024-06-15T09:00:00",
                "documentosSoporte": "Documentación académica del estudiante y comprobantes de pago de matrícula."
              },
              "detallesAdministrativos": {
                "nombreDemandado": "Colegio San Agustín",
                "identificacionDemandado": "876543210",
                "medidasSolicitadas": "Admisión inmediata del estudiante y rectificación de la decisión administrativa.",
                "accionesPrevias": "Solicitud formal de admisión, comunicación con el director del colegio."
              },
              "informacionAdicional": {
                "representacionLegal": {
                  "nombre": "Ana Gómez",
                  "informacionContacto": "Abogada especializada en derechos educativos. Teléfono: +57 310 987 6543, correo: ana.gomez@example.com"
                },
                "consideracionesEspeciales": "El estudiante ha sido aceptado en el colegio por los últimos tres años sin problemas."
              }
            },
            {
      un: 8253777044,
      id: "3456789012",
                  "nombreDemandado": "Constructora EcoVida",
                  "informacionPersonal": {
                  "nombre": "Carlos Ramírez",
                  "identificacion": "3456789012",
                  "direccion": "Av. 10 de Noviembre, Cali, Colombia",
                  "correoElectronico": "carlos.ramirez@example.com",
                  "telefono": "+57 310 987 6543"
                },
                "detallesLegales": {
                  "derechosViolados": "Derecho a un ambiente sano y saludable",
                  "descripcionIncidente": "La empresa constructora ha iniciado obras que generan contaminación acústica y ambiental significativa en la zona residencial, afectando la calidad de vida de los residentes.",
                  "fechaHoraIncidente": "2024-07-01T08:00:00",
                  "documentosSoporte": "Informe técnico de impacto ambiental y testimonios de vecinos afectados."
                },
                "detallesAdministrativos": {
                  "nombreDemandado": "Constructora EcoVida",
                  "identificacionDemandado": "765432109",
                  "medidasSolicitadas": "Suspensión inmediata de las obras y compensación por los daños ambientales causados.",
                  "accionesPrevias": "Reclamo formal a la empresa, comunicación con la autoridad ambiental local."
                },
                "informacionAdicional": {
                  "representacionLegal": {
                    "nombre": "Juan López",
                    "informacionContacto": "Abogado especializado en derecho ambiental. Teléfono: +57 320 654 9876, correo: juan.lopez@example.com"
                  },
                  "consideracionesEspeciales": "La zona residencial está catalogada como de interés ambiental en el plan de ordenamiento territorial."
                }
              }
    ],
    tutela: null,
};

const tutelasReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case types.FETCH_TUTELAS_SUCCESS:
      return {
        ...state,
        tutelas: action.payload
      };
    case types.FETCH_TUTELA_SUCCESS:
      return {
        ...state,
        tutela: action.payload
      };
    case types.CREATE_TUTELA_SUCCESS:
      return {
        ...state,
        tutelas: [...state.tutelas, action.payload]
      };
    case types.UPDATE_TUTELA_SUCCESS:
      return {
        ...state,
        tutelas: state.tutelas.map(tutela =>
          tutela.id === action.payload.id ? action.payload : tutela
        )
      };
    case types.DELETE_TUTELA_SUCCESS:
      return {
        ...state,
        tutelas: state.tutelas.filter(tutela => tutela.id !== action.payload)
      };
    default:
      return state;
  }
};

export default tutelasReducer;

