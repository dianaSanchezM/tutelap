import React , {useState} from "react";
import IdentificationInput from "@/components/IdentificationInput";
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

const Search: React.FC = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const tutelas = useSelector((state: any) => state.tutelas);

    const handleSearch = (props: any) => {
        router.push(`/tutela/${props}`);
    };

    return (
    <div className="container mx-auto my-auto p-4">
        <div className="flex flex-col max-h-screen ">
            {/* Contenido principal */}
            <div className="flex-grow flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold mt-8 text-center text-gray-800 w-full">
                    Enter the identification number of the tutela
                </h1>
                <IdentificationInput buttonLabel="Search tutela" onSubmit={handleSearch} />
            </div>

            
        </div>
        </div>
    );
};

export default Search;