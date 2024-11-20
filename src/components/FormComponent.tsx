import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { createTutelaSuccess } from "@/redux/actions/index";
import { useRouter } from 'next/router';
import InputField from "@/components/basics/InputField"; // Asegúrate de que la ruta sea correcta

interface FormComponentProps {
  formData: any; // Aquí puedes especificar un tipo más estricto según tu estructura de datos
  formConfig: any; // Igual aquí, si tienes una estructura definida para esto
  onChange: any;
  isEditMode: boolean;
  onSubmit: any;
}

const FormComponent: React.FC<FormComponentProps> = ({ formData, formConfig, onChange, isEditMode, onSubmit }) => {
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      const keys = name.split(".");
  
      onChange((prev) => {
        let newData = { ...prev };
        if (keys.length === 2) {
          newData[keys[0]] = {
            ...newData[keys[0]],
            [keys[1]]: value,
          };
        } else if (keys.length === 3) {
          newData[keys[0]] = {
            ...newData[keys[0]],
            [keys[1]]: {
              ...newData[keys[0]][keys[1]],
              [keys[2]]: value,
            },
          };
        } else {
          newData[name] = value;
        }
        onChange(newData); // Llama a onChange con los nuevos datos
        return newData;
      });
    };
      
    return (
        <div className="p-6 bg-[#f5f5dc] min-h-screen flex items-center justify-center">
        <form 
          onSubmit={onSubmit} 
          className="bg-[#D7C19D] max-w-5xl w-full mx-auto p-8 rounded-md shadow-lg space-y-0 px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {formConfig.map((field, index) =>
    field.type === "header" ? (
      <h2 key={index} className="col-span-3 text-xl text-gray-800 font-bold mb-0">
        {field.title}
      </h2>
    ) : field.type === "select" ? (
      <div key={index} className="col-span-1">
        <label className="block text-gray-700 font-medium mb-1" htmlFor={field.name}>
          {field.label}
        </label>

        <select
          name={field.name}
          id={field.name}
          defaultValue={ field.name.split('.').reduce((obj, key) => obj[key] || '', formData)}
          onChange={handleChange}
          className="w-full bg-white text-black border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Seleccione un derecho</option>
          {field.options.map((option, index) => (
            <option key={index} value={option} >
              {option}
            </option>
          ))}
        </select>
      </div>
    ) : (
      <InputField
        key={index}
        label={field.label}
        name={field.name}
        type={field.type}
        value={field.name.split('.').reduce((obj, key) => obj[key] || '', formData)}
        onChange={handleChange}
        disabled={field.isDisabled}
      />
    )
  )}
  
          {/* Botón de Enviar */}
          <div className="col-span-3">
            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-2 px-4 rounded-md shadow hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
  );
};

export default FormComponent;
