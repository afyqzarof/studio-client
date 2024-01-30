import InputError from "../InputError/InputError";
import "./Input.scss";

const Input = ({
  name,
  label,
  placeholder,
  className,
  isPassword,
  handleChange,
  tabIndex,
  msg,
}) => {
  return (
    <div className={`input-container ${className}`}>
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
      />
      {msg && <InputError msg={msg} />}
    </div>
  );
};

export default Input;
