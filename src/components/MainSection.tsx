import { useRouter } from "next/router";

const MainSection: React.FC = () => {
  const router = useRouter();


    return (
      <div className="relative">
        <div className="absolute inset-0 bg-gray-900 bg-opacity-60 flex items-center justify-center ">
          <div className="text-center text-white md:text-left mx-auto md:ml-40">
            <h2 className="text-5xl font-bold mb-4 md:w-2/4  ">
                A tutela allows individuals to file a legal action
                to protect their fundamental rights
            </h2>
            <p className="mt-2 text-lg  md:w-2/4">
              TutelApp simplifies the process of creating, managing, and checking the status of tutelas, empowering Colombian citizens to uphold their rights effectively.
            </p>
       
        <button  onClick={()=>router.push(`/create`)} className="mt-4 px-6 py-3 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition duration-300">
              Create Tutela
            </button>
          </div>
        </div>
        <img
          src="/people.png"
          alt="Main Image"
          className="w-full object-cover h-3/4"
          style={{ height: '50vh' }}
        />
      </div>
    );
  };

  export default MainSection;