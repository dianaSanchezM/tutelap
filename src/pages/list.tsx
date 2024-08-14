// components/TutelaList.tsx
import React from 'react';
import TutelaCard from './../components/TutelaCard';
import { useSelector, useDispatch } from 'react-redux';

interface TutelaListProps {
  tutelas: {
    id: string;
    nombreDemandado: string;
    derechosViolados: string;
    fechaHoraIncidente: string;
  }[];
}

const List: React.FC<TutelaListProps> = () => {
    const tutelas = useSelector((state: any) => state.tutelas);

    return (
    <div>
      {tutelas.map((tutela:any) => (
        <TutelaCard key={tutela.un} tutela={{...tutela, derechosViolados: tutela.detallesLegales.derechosViolados, fechaHoraIncidente: tutela.detallesLegales.fechaHoraIncidente  }}   />
      ))}
    </div>
  );
};

export default List;
