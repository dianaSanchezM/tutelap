import React, { useState } from 'react';
import TutelaList from './TutelaList';
import TutelaForm from './TutelaForm';
import TutelaSearchById from './TutelasearchById';

const TutelaManager: React.FC = () => {
  const [currentTutela, setCurrentTutela] = useState<any>(null); // Puedes definir el tipo más específico si lo deseas

  return (
    <div>
      <TutelaForm currentTutela={currentTutela} setCurrentTutela={setCurrentTutela} />
      {/*<TutelaSearchById /> 
      <TutelaList onEdit={setCurrentTutela} />*/}
    </div>
  );
};

export default TutelaManager;
