import React from "react";

const TextInputField = ({ label, name, placeholder, onChange }) => {
  return (
    <div className="grid gap-2">
      <label htmlFor="name" className="font-semibold">
        {label}
      </label>
      <input
        type="text"
        id="name"
        name={name}
        placeholder={placeholder}
        className="border border-gray-400 p-2 rounded-md w-full"
        onChange={ (event) => onChange(name, event.target.value)}
      />
    </div>
  );
};

export default TextInputField;
