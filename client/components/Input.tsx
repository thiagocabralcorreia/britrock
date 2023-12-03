import React from "react";

import { LuX } from "react-icons/lu";

interface InputProps {
  inputLabel?: string;
  labelFor: string;
  inputType: string;
  inputId: string;
  inputName: string;
  placeholderText: string;
  ariaLabelName: string;
  error?: string;
}

const Input = ({
  inputLabel,
  labelFor,
  inputType,
  inputId,
  inputName,
  placeholderText,
  ariaLabelName,
  error,
}: InputProps) => {
  return (
    <div className="mb-4">
      <label className={`block text-lg text-black mb-1`} htmlFor={labelFor}>
        {inputLabel}
      </label>
      <input
        className="w-full px-5 py-2 border border-neutral-700 border-opacity-50 text-gray-900
        bg-white shadow-sm text-md focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400"
        type={inputType}
        id={inputId}
        name={inputName}
        placeholder={placeholderText}
        aria-label={ariaLabelName}
        required
      />
      {error && (
        <div className="flex mt-1 items-center text-red-900 text-sm">
          <LuX />
          <p className="ml-1">{error}</p>
        </div>
      )}
    </div>
  );
};

export default Input;
