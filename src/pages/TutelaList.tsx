import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTutelaSuccess } from '@/redux/actions';

interface Tutela {
  id: string;
  nombreDemandado: string;
}

interface TutelaListProps {
  onEdit: (tutela: Tutela) => void;
}

const TutelaList: React.FC<TutelaListProps> = ({ onEdit }) => {
  const dispatch = useDispatch();
  const tutelas = useSelector((state: any) => state.tutelas);

  const handleDelete = (id: string) => {
    dispatch(deleteTutelaSuccess(id));
  };

  return (
    <div>
      <h2>Lista de Tutelas</h2>
      <ul>
        {tutelas.map((tutela: any) => (
          <li key={tutela.un}>
            <div>
              <strong>Demandado:</strong> {tutela.nombreDemandado}
              <button onClick={() => onEdit(tutela)}>Editar</button>
              <button onClick={() => handleDelete(tutela.id)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TutelaList;
