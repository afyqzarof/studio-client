import InputError from "../InputError/InputError";
import React from "react";
import "./Input.scss";
type InputProps = {
  name: string;
  label: string;
  placeholder: string;
  className?: string;
  isPassword?: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  tabIndex?: number;
  msg: string;
  disabled: boolean;
};
const Input = ({
  name,
  label,
  placeholder,
  className,
  isPassword,
  handleChange,
  tabIndex,
  msg,
  disabled,
}: InputProps) => {
  return (
    <div className={`input-container ${className ? className : ""}`}>
      <label htmlFor={name} className="input-container__label">
        {label}
      </label>
      <input
        className="input-container__input"
        type={isPassword ? "password" : "text"}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleChange}
        tabIndex={tabIndex}
        disabled={disabled}
      />
      {msg && <InputError msg={msg} />}
    </div>
  );
};

export default Input;
