import React from "react";

interface InputFieldProps {
  label?: string;
  name: string;
  value: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label= "",
  name="",
  value="",
  type = "text",
  placeholder = "",
  onChange= ()=>{},
  disabled= false,
}) => {
  return (
    <div className="col-span-1">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-100 text-black py-3"
      />
    </div>
  );
};

export default InputField;
