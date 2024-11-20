import React , {useState} from "react";
import IdentificationInput from "@/components/IdentificationInput";
import { useDispatch } from 'react-redux';
import { deleteTutelaSuccess } from "@/redux/actions/index";
import { useRouter } from 'next/router';

const Delete: React.FC = () => {

    const dispatch = useDispatch();
    const router = useRouter();

    const handleDelete =(props:any)=>{
        const test =dispatch(deleteTutelaSuccess(props));
        console.log('log test',{test});
        router.push('/success');
    };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Delete Tutela</h1>
      <p className="mt-4">Enter the ID of the tutela you want to delete.</p>
    <IdentificationInput buttonLabel="Delete Tutela" onSubmit={handleDelete} />

    </div>
  );
};

export default Delete;
