import React, { useEffect, useState } from "react";

const Input = ({htmlId,label,value,setValue,customClass="form-input py-2 rounded-md w-full focus:shadow-lg mb-3",placeHolder}) => {
  return (
    <div>
      <label htmlFor={htmlId} className="text-xl">
        {label}
      </label>
      <input
        id={htmlId}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        className={customClass}
        placeholder={placeHolder}
      />
    </div>
  );
};

export default Input;
