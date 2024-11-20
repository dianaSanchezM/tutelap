import React , {useState} from "react";
import IdentificationInput from "@/components/IdentificationInput";
import { useSelector, useDispatch } from 'react-redux';
import { fetchTutelaSuccess } from "@/redux/actions/index";
import { useRouter } from 'next/router';
import FormComponent from "@/components/FormComponent";

const Tutela: React.FC = () => {
  const router = useRouter();

    const handleSubmit =(props:any)=>{
        
        router.push(`/tutela/${props}`);
    };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Tutela Status</h1>
      <p className="mt-4">Enter the ID of the tutela you want to update.</p>
    <IdentificationInput buttonLabel="Update Tutela" onSubmit={handleSubmit} />

    </div>
  );
};
export default Tutela;
