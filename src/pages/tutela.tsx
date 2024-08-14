import React , {useState} from "react";
import IdentificationInput from "@/components/IdentificationInput";
import { useSelector, useDispatch } from 'react-redux';
import { getTutelas } from "@/redux/actions/index";
import { useRouter } from 'next/router';

const Tutela: React.FC = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const tutelas = useSelector((state: any) => state.tutelas);

    const handleSearch =(props:any)=>{
        const test =dispatch(getTutelas(props));
        console.log('log test',{test});
        router.push('/list');
    };

    //{tutelas.map((tutela:any)=> <h1>{tutela.id}</h1>)}
    //
    return (
      <div className="flex flex-col flex-grow items-center justify-center  bg-gray-200">
      <h1 className="text-3xl font-bold mt-8  md:text-center text-gray-800 md:w-1/3">Enter the personal identification number of the person who filed the tutela</h1>
      <IdentificationInput buttonLabel="Search tutelas" onSubmit={handleSearch} />
    </div>
    );
  };
  
  export default Tutela;