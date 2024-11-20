import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTutelasSuccess } from "@/redux/actions/index"; // Asegúrate de ajustar la ruta si es necesario

const TutelasPage: React.FC = () => {
    const dispatch = useDispatch();

    // Obtener las tutelas desde el estado global
    const tutelas = useSelector((state: any) => state.tutelas);

    useEffect(() => {
        // Si es necesario, aquí puedes realizar una llamada a una API para obtener las tutelas
        // Por ahora, asumimos que ya están en el estado de Redux
    }, [dispatch]);

    return (
      <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">List of Tutelas</h1>
      <table className="min-w-full bg-white border border-gray-300">
          <thead>
              <tr>
                  <th className="py-2 px-4 border-b">UN</th>
                  <th className="py-2 px-4 border-b">Nombre del Demandado</th>
                  <th className="py-2 px-4 border-b">Nombre</th>
                  <th className="py-2 px-4 border-b">Status</th>
              </tr>
          </thead>
          <tbody>
              {tutelas.map((tutela: any, index: number) => (
                  <tr key={index}>
                      <td className="py-2 px-4 border-b">{tutela.un}</td>
                      <td className="py-2 px-4 border-b">{tutela.nombreDemandado}</td>
                      <td className="py-2 px-4 border-b">{tutela.informacionPersonal.nombre}</td>
                      <td className="py-2 px-4 border-b">{tutela.status}</td>
                  </tr>
              ))}
          </tbody>
      </table>
  </div>
    );
};

export default TutelasPage;
