import React from "react";
import Link from 'next/link';


const CenteredContainer: React.FC = () => {
    return (
      <div className="flex flex-col justify-center items-center  space-y-4">
        <div className="bg-gray-800 hover:text-gray-900 p-4 rounded-3xl shadow-lg  hover:bg-yellow-500 transition duration-300 flex flex-col w-full">
        <Link href="/create">
          <h3 className="text-xl text-gray-200 font-bold mb-2 px-2">Create Tutela</h3>
          <p className="text-gray-200 px-2">Easily generate new tutela with our guided form.</p>
        </Link>
        </div>
        <div className="bg-gray-800 hover:text-gray-900 p-4 rounded-3xl shadow-lg  hover:bg-yellow-500 transition duration-300 flex flex-col w-full">
        <Link href="/tutela">
          <h3 className="text-xl text-gray-200 font-bold mb-2 px-2">Consult Status</h3>
          <p className="text-gray-200 px-2">Stay informed about the status of your tutelas in real-time.</p>
        </Link>
        </div>
        <div className="bg-gray-800 hover:text-gray-900 p-4 rounded-3xl shadow-lg  hover:bg-yellow-500 transition duration-300 flex flex-col w-full">
        <Link href="/update">
          <h3 className="text-xl text-gray-200 font-bold mb-2 px-2">Edit Tutela</h3>
          <p className="text-gray-200 px-2">Make changes to existing tutelas as needed.</p>
        </Link>
        </div>
        <div className="bg-gray-800 hover:text-gray-900 p-4 rounded-3xl shadow-lg  hover:bg-yellow-500 transition duration-300 flex flex-col w-full">
        <Link href="/delete">
          <h3 className="text-xl text-gray-200 font-bold mb-2 px-2">Delete Tutela</h3>
          <p className="text-gray-200 px-2">Remove tutela that are no longer necessary.</p>
        </Link>
        </div>
        </div>
    );
  };

const AdditionalSection: React.FC = () => {
    return (
      <div className="py-16 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            {/* Image Column */}
            <div className="flex items-center justify-center">
              <img
                src="/law.png"  // Replace with your image path
                alt="Description of image"
                className="rounded-lg shadow-lg"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
  
            {/* Buttons Column */}
            <div className="flex flex-col justify-center items-center space-y-4 ">
              <CenteredContainer/>
          </div>
          </div>
        </div>
      </div>
    );
  }; 

export default AdditionalSection;