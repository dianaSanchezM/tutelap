import React, { useState } from 'react';

interface IdentificationInputProps {
  buttonLabel: string;
  onSubmit: (id: string) => void;
}

const IdentificationInput: React.FC<IdentificationInputProps> = ({ buttonLabel, onSubmit }) => {
  const [idInput, setIdInput] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Update input value directly to state
    setIdInput(event.target.value.replace(/\D/, '')); // Replace non-digits with empty string
  };

  const handleSubmit = () => {
    // Validate input before submitting
    if (idInput.trim() !== '') {
      onSubmit(idInput);
    } else {
      alert('Please enter a valid identification number.');
    }
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <input
        type="text"
        value={idInput}
        onChange={handleInputChange}
        placeholder="Enter your identification number"
        className="border-2 border-gray-300 text-black rounded-md px-4 py-2 focus:outline-none focus:border-yellow-500"
      />
      <button
        onClick={handleSubmit}
        className="mt-4 px-6 py-3 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition duration-300"
      >
        {buttonLabel}
      </button>
    </div>
  );
};

export default IdentificationInput;
