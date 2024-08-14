// components/TutelaCard.tsx
import React from 'react';
import { useRouter } from 'next/router';

interface TutelaCardProps {
  tutela: {
    id: string;
    nombreDemandado: string;
    derechosViolados: string;
    fechaHoraIncidente: string;
    un: number;
  };
}

const TutelaCard: React.FC<TutelaCardProps> = ({ tutela }) => {
  const router = useRouter();
  
  const handleOnClick = () => {
    router.push(`/tutela/[${tutela.un}]`);
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-4 ">
      <h2 className="text-lg font-semibold mb-2">{tutela.nombreDemandado} #{tutela.un}</h2>
      <p className="text-sm text-gray-500 mb-2">{tutela.id}</p>
      <p className="text-sm text-gray-500 mb-2">{tutela.derechosViolados}</p>
      <p className="text-sm text-gray-500 mb-2">{tutela.fechaHoraIncidente}</p>
      <button onClick={handleOnClick} className="bg-yellow-500 text-white py-1 px-4 rounded-md hover:bg-yellow-600 transition duration-300">
        View Details
      </button>
    </div>
  );
};

export default TutelaCard;
